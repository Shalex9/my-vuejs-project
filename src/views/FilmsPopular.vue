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
        name: 'FilmsPopular',
        mixins: [filmsMixin],
        data(){
            return {
                typeSearch: 'popular'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-card {
        max-height: 650px;
        min-height: 650px;
        position: relative;
    }
    .md-field {
        width: 25%;
    }
</style>
