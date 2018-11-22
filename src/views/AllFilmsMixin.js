import FilmCard from '../components/FilmCard.vue';
import FilmCardX from '../components/FilmCardX.vue';
// import VuetifyFilmCard from '../components/VuetifyFilmCard.vue';
const filmsMixin = {
    data: function() {
        return {
            listFilms: [],
            currentFilm: {},
            movieUrl: "https://api.themoviedb.org/3/movie/",
            apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
            language: "&language=ru-RU"
        }
    },
    computed: {
        link: function(){
            return this.$resource(this.movieUrl + this.typeSearch + this.apiKey + this.language + "&page=1")
        }
    },
    methods: {
        searchFilms: function() {
            this.listFilms = []
            this.link.get().then(function(response){
                this.listFilms = response.data.results
            })
        }
    },
    created(){
        this.searchFilms()
    },
    components: {
        FilmCard, FilmCardX
    }
}

export default filmsMixin;


