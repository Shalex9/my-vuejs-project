<template>
    <div>
        <div class="row">
            <div v-for="film in listFilms" :key="film.id"  class="col-md-6">
                <film-card-x :currentFilm="film"></film-card-x>
            </div>
        </div>
    </div>

    <!--<v-layout row wrap>
        <v-flex v-for="film in listFilms" :key="film.id" xs4>
            <v-card flat tile>
                <vuetify-film-card></vuetify-film-card>
            </v-card>
        </v-flex>
    </v-layout>-->
</template>

<script>
    import filmsMixin from './AllFilmsMixin.js'

    export default {
        name: 'xFilmsPopular',
        mixins: [filmsMixin],
        data(){
            return {
                typeSearch: 'popular'
            }
        }
    }
</script>
