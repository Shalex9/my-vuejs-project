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
        name: 'xFilmsNow',
        mixins: [filmsMixin],
        data(){
            return {
                typeSearch: 'now_playing'
            }
        }
    }
</script>

