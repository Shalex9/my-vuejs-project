<template>
   <md-card md-with-hover>
        <md-card-header>
            <md-card-media>
                <img :src="currentFilm.backdrop_path ? 'https://image.tmdb.org/t/p/w342'+currentFilm.backdrop_path : 'http://shalex.info/assets/img/not-poster_path_320x480.jpg'" :alt="currentFilm.title ? currentFilm.title : 'Нет данных'">
            </md-card-media>
        </md-card-header>

        <md-card-content>
            <div class="md-title">{{currentFilm.title}}</div>
            <div class="md-subhead">{{currentFilm.release_date}}</div>
        </md-card-content>

        <md-card-actions>
            <div class="box">
                <div class="box_percent">
                    <div class="vote_average">
                        <div class="percent">{{vote_average}}<span>%</span></div>
                        <md-progress-spinner md-mode="determinate" :md-value="vote_average"></md-progress-spinner>
                    </div>
                </div>
            </div>
          <md-button class="md-raised md-primary btnShowMore" :to="{ name: 'filmDetails', params: { id: this.currentFilm.id}}">Подробнее</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    export default {
        props: ["currentFilm"],
        computed: { 
            vote_average: function() {
                return this.currentFilm.vote_average ? this.currentFilm.vote_average * 10 : 0 
            }
        },
    }
</script>

<style lang="scss" scoped>
    .md-card {
        margin: 25px;
        min-height: 460px;
        max-height: 460px;
        position: relative;
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

    .box {
        position: absolute;
        top: 83%;
        left: 10%;
        p {
            width: 15%;
            margin-left: 10px;
            margin-top: 1%;
            font-size: 15px;
            font-weight: bold;
            text-align: left;
        }
        .box_percent {
            width: 66px;
            height: 66px;
            border-radius: 33px;
            background: #ccc;
        }
        .vote_average {
            position: relative;    
            width: 60px;
            height: 60px;
            top: 3px;
            left: 3px;
        }
        .percent {
            position: absolute;
            font-size: 22px;
            font-weight: bold;
            top: 20px;
            left: 15px;
        }
        .percent span {
            font-size: 12px;
        }
    }
    .btnShowMore {
        position: absolute;
        top: 85%;
        right: 10%;
        &:hover {
            text-decoration: none
        }
    }
</style>

