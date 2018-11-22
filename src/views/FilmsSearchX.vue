<template>
    <div>
        <div class="search row">
            <md-field class="searchInput">
                <label>Поиск фильма</label>
                <md-input v-model="filmInput" placeholder="Поиск фильма" @keyup.enter="searchFilmsInput"></md-input>
            </md-field>
            <!--<md-button class="md-icon-button md-raised md-primary searchBtn" @click.prevent="searchFilmsInput">
                <md-icon>search</md-icon>
            </md-button>-->
        </div>

        <div class="row" v-if="isFilmSearch && isResult">
            <div v-for="film in listFilms" :key="film.id"  class="col-md-6">
                <film-card-x :currentFilm="film"></film-card-x>
            </div>
        </div>
        <div v-else-if="isFilmSearch && isResult == false">Нет фильмов, удовлетворяющих условиям поиска.</div>
        <div v-if="filmName == ''">Начните поиск...</div>
    </div>
</template>

<script>
    import FilmCardX from '../components/FilmCardX.vue'

    export default {
        name: 'xFilmsSearch',
        data () {
            return {
                isFilmSearch: false,
                listFilms: [],
                currentFilm: {},
                filmInput: '',
                searchUrl: "https://api.themoviedb.org/3/search/movie",
                apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
                language: "&language=ru-RU",
                isResult: false
            }
        },    
        props: ['film'],
        computed: {
            filmName: function(){
                this.filmInput = this.film
                return this.film
            },
            resource: function(){
                return this.$resource(this.searchUrl + this.apiKey + "&query=" + this.filmName + this.language + "&page=1")
            },
            resourceInput: function(){
                return this.$resource(this.searchUrl + this.apiKey + "&query=" + this.filmInput + this.language + "&page=1")
            }
        },
        methods: {
            searchFilms: function() {
                this.listFilms = []
                this.resource.get().then(function(response){
                    this.listFilms = response.data.results
                    this.isFilmSearch = true
                    if(response.data.results.length > 0) 
                        this.isResult = true
                    this.$emit('setFilmName', this.filmName)
                })
            },
            searchFilmsInput: function() {
                this.listFilms = []
                this.resourceInput.get().then(function(response){
                    this.listFilms = response.data.results
                    this.isFilmSearch = true
                    if(response.data.results.length > 0) 
                        this.isResult = true
                    this.$emit('setFilmName', this.filmName)
                })
            }
        },
        created() {
            this.searchFilms()
        },
        components: {
            FilmCardX
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
        justify-content: center;
        margin: 50px;
        .searchInput {
            widows: 320px;
        }
        .searchBtn{
            position: absolute;
            right: 37%;
        }
    }
</style>
