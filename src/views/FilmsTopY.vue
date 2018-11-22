<template>
    <div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="" v-for="film in listFilms" :key="film.id">
                <film-card :currentFilm="film" style="height: 100%"></film-card>
            </div>
        </div>
    </div>
</template>

<script>
    import filmsMixin from './AllFilmsMixin.js'

    export default {
        name: 'yFilmsTop',
        mixins: [filmsMixin],
        data(){
            return {
                typeSearch: 'top_rated'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-field {
        width: 25%;
    }
</style>