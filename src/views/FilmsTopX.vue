<template>
    <div>
        <div class="row">
            <div v-for="film in listFilms" :key="film.id"  class="col-md-6">
                <film-card-x :currentFilm="film"></film-card-x>
            </div>
        </div>
        <md-button v-if="listFilms[0] && !loading" class="md-raised md-primary" @click="getNextPageFilms">Подгрузить еще фильмов</md-button>
        <img class='loading' v-if="loading" src='../assets/img/loading.gif'>
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