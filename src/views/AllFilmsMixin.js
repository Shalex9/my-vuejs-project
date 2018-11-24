import FilmCard from '../components/FilmCard.vue';
import FilmCardX from '../components/FilmCardX.vue';
const filmsMixin = {
    data: function() {
        return {
            loading: false,
            listFilms: [],
            currentFilm: {},
            pageIndex: 1,
            movieUrl: "https://api.themoviedb.org/3/movie/",
            apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
            language: "&language=ru-RU"
        }
    },
    computed: {
        link: function(){
            return this.$resource(this.movieUrl + this.typeSearch + this.apiKey + this.language + "&page=" + this.pageIndex)
        }
    },
    methods: {
        searchFilms: function() {
            this.loading = true
            this.listFilms = []
            this.link.get().then(res => {
                this.listFilms = res.data.results
                this.loading = false
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
    created(){
        this.searchFilms()
    },
    components: {
        FilmCard, FilmCardX
    }
}

export default filmsMixin;


