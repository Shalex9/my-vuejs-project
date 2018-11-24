<template>
    <div class="container-fluid wrapper">
        <h1>Откройте для себя новые фильмы</h1>

        <md-tabs md-alignment="centered" md-active-tab="tab-search">
            <md-tab id="tab-popular" md-label="Популярные" @click="switchView('FilmsPopular')"></md-tab>
            <md-tab id="tab-now" md-label="В прокате" @click="switchView('FilmsNow')"></md-tab>
            <md-tab id="tab-search" md-label="Поиск фильма" @click="switchToSearch()"></md-tab>
            <md-tab id="tab-top" md-label="ТОП фильмы" @click="switchView('FilmsTop')"></md-tab>
            <md-tab id="tab-upcoming" md-label="Ожидаемые" @click="switchView('FilmsUpcoming')"></md-tab>
        </md-tabs>

        <md-radio v-model="layout" class="md-primary" value="y" @click="switchLayout('y')">Вертикально</md-radio>
        <md-radio v-model="layout" class="md-primary" value="x" @click="switchLayout('x')">Горизонтально</md-radio>

        <div v-if="isSearch">
            <div class="search row">
                <div class="col-md-2 col-md-offset-5">
                    <md-field>
                        <label>Поиск фильма</label>
                        <md-input v-model="filmName" placeholder="Поиск фильма" @keyup.enter="searchFilms"></md-input>
                    </md-field>
                </div>
            </div>

            <div v-if="layout == 'y'">
                <div class="md-layout md-gutter md-alignment-center" v-if="isFilmSearch && isResult">
                    <div class="" v-for="film in listFilms" :key="film.id">
                        <keep-alive>
                            <film-card :currentFilm="film" style="height: 100%"></film-card>
                        </keep-alive>
                    </div>
                    <md-button v-if="listFilms[0] && !loading" class="md-raised md-primary" @click="getNextPageFilms">Подгрузить еще фильмов</md-button>
                    <img class='loading' v-if="loading" src='../assets/img/loading.gif'>
                </div>
                <div v-else-if="isFilmSearch && isResult == false">Нет фильмов, удовлетворяющих условиям поиска.</div>
                <div v-if="filmName == ''">Начните поиск...</div>
            </div>
            <div v-else>
                <div class="row" v-if="isFilmSearch && isResult">
                    <div v-for="film in listFilms" :key="film.id"  class="col-md-6">
                        <film-card-x :currentFilm="film"></film-card-x>
                    </div>
                    <md-button v-if="listFilms[0] && !loading" class="md-raised md-primary" @click="getNextPageFilms">Подгрузить еще фильмов</md-button>
                    <img class='loading' v-if="loading" src='../assets/img/loading.gif'>
                </div>
                <div v-else-if="isFilmSearch && isResult == false">Нет фильмов, удовлетворяющих условиям поиска.</div>
                <div v-if="filmName == ''">Начните поиск...</div>
            </div>


        </div>
        <div v-else>
            <keep-alive>
                <component :is="layout + currentView" :film="filmName" class="container-fluid"></component>
            </keep-alive>
        </div>

    </div>
</template>

<script>
    import yFilmsNow from '../views/FilmsNowY.vue'
    import xFilmsNow from '../views/FilmsNowX.vue'
    import yFilmsPopular from '../views/FilmsPopularY.vue'
    import xFilmsPopular from '../views/FilmsPopularX.vue'
    import yFilmsTop from '../views/FilmsTopY.vue'
    import xFilmsTop from '../views/FilmsTopX.vue'
    import yFilmsUpcoming from '../views/FilmsUpcomingY.vue'
    import xFilmsUpcoming from '../views/FilmsUpcomingX.vue'
    import FilmCard from '../components/FilmCard.vue'
    import FilmCardX from '../components/FilmCardX.vue'

    export default {
        name: 'films',
        data () {
            return {
                loading: false,
                isSearch: true,
                layout: 'y',
                currentView: 'FilmsSearch',
                filmName : '',
                pageIndex: 1,   
                isFilmSearch: false,
                listFilms: [],
                currentFilm: {},
                searchUrl: "https://api.themoviedb.org/3/search/movie",
                apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
                language: "&language=ru-RU",
                isResult: false
            }
        },
        computed: {
            link: function(){
                return this.$resource(this.searchUrl + this.apiKey + "&query=" + this.filmName + this.language + "&page=" + this.pageIndex)
            },
        },
        methods: {
            switchView: function(view) {
                this.isSearch = false
                this.currentView = view
            },
            switchLayout: function(lt) {
                this.layout = lt
            },
            switchToSearch: function() {
                this.isSearch = true
            },
            searchFilms: function() {
                this.loading = true
                this.listFilms = []
                this.link.get().then(res => {
                    this.listFilms = res.data.results
                    this.isFilmSearch = true
                    this.loading = false
                    if(res.data.results.length > 0)
                        this.isResult = true
                })
            },
            getNextPageFilms: function() {
                this.loading = true
                this.pageIndex++;
                this.link.get().then(res => {
                    this.listFilms = [...this.listFilms, ...res.data.results] 
                    this.loading = false
                })
            }
        },
        components: {
            FilmCard, FilmCardX,
            yFilmsNow, xFilmsNow,
            yFilmsTop, xFilmsTop,
            yFilmsPopular, xFilmsPopular,
            yFilmsUpcoming, xFilmsUpcoming,
        }
    }
</script>
