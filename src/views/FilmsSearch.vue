<template>
    <div>
        <div class="search row">
            <md-field>
                <label>Поиск фильма</label>
                <md-input v-model="filmName" placeholder="Поиск фильма" @keyup.enter="searchFilms"></md-input>
            </md-field>
            <md-button class="md-icon-button md-raised md-primary searchBtn" @click.prevent="searchFilms">
                <md-icon>search</md-icon>
            </md-button>
        </div>
        <div class="md-layout md-gutter md-alignment-center" v-if="isFilmSearch && isResult">
            <div class="" v-for="film in listFilms" :key="film.id">
                <keep-alive>
                    <film-card v-bind:currentFilm="film" style="height: 100%"></film-card>
                </keep-alive>
            </div>
        </div>
        <div v-else-if="isFilmSearch && isResult == false">Нет результата</div>
        <div v-if="filmName == ''">Начните поиск...</div>
    </div>
</template>

<script>
    import FilmCard from '../components/FilmCard.vue'

    export default {
        name: 'FilmsSearch',
        data () {
            return {
                isFilmSearch: false,
                listFilms: [],
                currentFilm: {},
                filmName: '',
                searchUrl: "https://api.themoviedb.org/3/search/movie",
                apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
                language: "&language=ru-RU",
                isResult: false
            }
        },    
        computed: {
            searchEnable() {
                if(this.filmName === '' || this.filmName === undefined) 
                    return true
                else
                    return false
            },
            resource: function(){
                return this.$resource(this.searchUrl + this.apiKey + "&query=" + this.filmName + this.language + "&page=1")
            }
        },
        methods: {
            searchFilms: function() {
                this.listFilms = []
                try {
                    this.resource.get().then(function(response){
                        this.listFilms = response.data.results
                        this.isFilmSearch = true
                        if(response.data.results.length > 0) 
                            this.isResult = true
                    })
                } catch (err){
                    this.isResult = false
                    this.isFilmSearch = true
                    console.log("catch", this.isFilmSearch)   
                    console.log("catch", this.isResult)              
                }
            }
        },
        components: {
            FilmCard
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
        justify-content: center;
        .searchBtn{
            position: absolute;
            right: 37%;
        }
    }
    .md-field {
        width: 25%;
    }
</style>
