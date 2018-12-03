<template>
   <md-card md-with-hover>
        <md-card-header>
            <!--<md-card-media>
                <img :src="currentNews.urlToImage ? currentNews.urlToImage : 'http://shalex.info/assets/img/not-poster_path_320x480.jpg'" :alt="currentNews.title ? currentNews.title : 'Нет данных'">
            </md-card-media>-->

            <md-card-header-text>
                <div class="md-title">{{currentNews.title}}</div>
                <div class="md-subhead">
                    <b>Опубликовано: </b> <span class="published"></span> </br>
                    <b>Источник: </b> <a :href="currentNews.source.name">{{currentNews.source.name}}</a>
                </div>
            </md-card-header-text>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary btnShowMore" :href="currentNews.url">Перейти к источнику</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
export default {
    name: 'film-card',
    props: ["currentNews"],
    methods: {
        chanceDate: function() {
            var newDate = this.currentNews.publishedAt.toString().replace("T", " в ").replace("Z", "")
            $(".md-subhead span").text(newDate)
        }
    },
    mounted() {
        this.chanceDate()
    }
}
</script>

<style lang="scss" scoped>
    .md-card {
        height: 200px !important;
        overflow: hidden;
        margin-bottom: 25px;
        width: 100%;
    }
    .md-button {
        position: absolute;
        bottom: 10%;
        right: 2%;
    }
    .md-raised:hover {
        text-decoration: none;
    }
</style>
