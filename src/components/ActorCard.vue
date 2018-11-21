<template>
   <md-card md-with-hover>
        <md-card-header>
            <md-card-media>
                <img :src="actor.profile_path ? 'https://image.tmdb.org/t/p/w342'+actor.profile_path : 'http://shalex.info/assets/img/not-poster_path_320x480.jpg'" :alt="actor.name ? actor.name : 'Нет данных'">
            </md-card-media>
        </md-card-header>

        <md-card-content>
            <div class="md-title">{{actor.name}}</div>
            <div class="md-subhead">{{actor.character}}</div>
            <!--{{currentFilm.overview}}-->
        </md-card-content>
    </md-card>
</template>


<script>
    export default {
        name: 'ActorCard',
        data() {
            return {
                actor: {}
            }
        },
        props: ["currentActor"],
        methods: {

        },
        created(){
            this.actor = this.currentActor
        }
    }
</script>

<style lang="scss" scoped>
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
