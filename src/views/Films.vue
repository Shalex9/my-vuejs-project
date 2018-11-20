<template>
    <div class="wrapper">
        <h1>Search Films</h1>
        <div class="search">
            <md-field>
                <label>Search Film</label>
                <md-input v-model="filmName" placeholder="Search Film"></md-input>
                <span class="md-error">There is an error</span>
            </md-field>
            <md-button class="md-raised md-primary" :disabled="searchEnable" prevent @click="searchFilms" @keyup.13="searchFilms">Search</md-button>
        </div>
        <div class="md-layout md-gutter md-alignment-center" v-if="isResult">
            <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100" v-for="film in listFilms"  :key="film.id">
                <film-card v-bind:currentFilm="film" style="height: 100%"></film-card>
            </div>
        </div>
        <div v-else>Not result</div>
    </div>
</template>

<script>
import FilmCard from '../components/FilmCard.vue'

export default {
    name: 'films',
    data () {
        return {
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
            this.resource.get().then(function(response){
                // console.log(response.data.results)
                this.listFilms = response.data.results
                this.isResult = true
            }, function(error) {
                this.isResult = false
            })
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
    }
    .md-field {
        width: 15%;
        margin: 0 auto;
    }
    .md-layout-item {
        height: 620px !important;
        margin-top: 8px;
        margin-bottom: 8px;

        &:after {
        width: 100%;
        height: 100%;
        display: block;
        background: md-get-palette-color(purple, 200);
        content: " ";
    }
  }
</style>
