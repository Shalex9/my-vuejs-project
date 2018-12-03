<template>
  <div class="container-fluid wrapper">
        <h2>Последние новости:</h2>
        <div class="col-md-8 col-md-offset-2" v-if="isResult">
            <div class="" v-for="news in listNews" :key="news.id">
                <keep-alive>
                    <news-card :currentNews="news" style="height: 100%"></news-card>
                </keep-alive>
            </div>
        </div>
        <div v-else>Нет новостей.
            <img class='loading' v-if="loading" src='../assets/img/loading.gif'></div>
    </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'

export default {
    name: 'News',
    data(){
        return {
            loading: false,
            isResult: false,
            listNews: []
        }
    },
    computed: {
        url: function(){
            return this.$resource('https://newsapi.org/v2/top-headlines?country=ua&apiKey=e67be5e10c404475b91f6dee8e307da8') 
        }
    },
    methods: {
        getNews: function() { 
            this.loading = true
            this.url.get().then(function(response){
                this.isResult = true
                this.listNews = response.data.articles 
                this.loading = false
            })
        }                
    },
    created() {
        this.getNews()
    },
    components: {
        NewsCard
    }
}
</script>

<style lang="scss" scoped>
    .container-fluid {
        background: #eee;
    }
    h2 {
        margin: 50px;
    }
</style>
