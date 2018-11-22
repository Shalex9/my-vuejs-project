<template>
   <md-card md-with-hover>
        <md-card-header>
            <md-card-media>
                <img :src="currentActor.profile_path ? 'https://image.tmdb.org/t/p/w342'+currentActor.profile_path : 'http://shalex.info/assets/img/not-poster_path_320x480.jpg'" :alt="currentActor.name ? currentActor.name : 'Нет данных'">
            </md-card-media>
        </md-card-header>

        <md-card-content>
            <div class="md-title">{{currentActor.name}}</div>
            <div class="md-subhead">{{currentActor.character}}</div>
        </md-card-content>
    </md-card>
</template>


<script>
    export default {
        name: 'ActorCard',
        props: ["currentActor"],
    }
</script>

<style lang="scss" scoped>
    .md-card {
        min-height: 350px;
        max-height: 350px;
        .md-card-header {
            padding: 0 !important;
        }
        .md-card-header .md-card-media {
            width: 100%;
            height: 100%;
            margin-left: 0; 
            flex: 0 0 80px;
        }
    }
</style>
