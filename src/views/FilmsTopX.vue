<template>
    <div>
        <div class="row">
            <div v-for="film in listFilms" :key="film.id"  class="col-md-6">
                <film-card-x :currentFilm="film"></film-card-x>
            </div>
        </div>
    </div>
</template>

<script>
    import filmsMixin from './AllFilmsMixin.js'

    export default {
        name: 'xFilmsTop',
        mixins: [filmsMixin],
        data(){
            return {
                typeSearch: 'top_rated'
            }
        }
    }
</script>