<template>
   <md-card md-with-hover>
        <md-card-header>
            <md-card-media>
                <img :src="filmDetail.poster_path ? 'https://image.tmdb.org/t/p/w342'+filmDetail.poster_path : 'http://shalex.info/assets/img/not-poster_path_320x480.jpg'" :alt="filmDetail.title ? filmDetail.title : 'Нет данных'">
            </md-card-media>
        </md-card-header>

        <md-card-content>
            <div class="md-title">{{currentFilm.title}}</div>
            <div class="md-subhead">{{currentFilm.release_date}}</div>
            <!--{{currentFilm.overview}}-->
        </md-card-content>

        <md-card-actions>
          <md-button>See more</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    export default {
        data(){
            return{
                filmDetail: {}
            }
        },
        props: ["currentFilm"],
        computed: { },
        created() {
            this.filmDetail = this.currentFilm
        }
    }
</script>

<style scoped>
    .md-card {
        width: 320px;
        margin: 4px;
        display: inline-block;
        vertical-align: top;
        overflow: hidden;
    }
    .md-card-header {
        padding: 0 !important;
    }
    .md-card-header .md-card-media {
        width: 100%;
        height: 100%;
        margin-left: 0; 
        flex: 0 0 80px;
    }
</style>

