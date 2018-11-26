<template>
    <div class="container-fluid">
        <div class="row info">
            <div class="film-detail-bg">
                <!--<img :src="'https://image.tmdb.org/t/p/original' +  this.currentFilm.backdrop_path">-->
                <img :src="this.currentFilm.backdrop_path ? 'https://image.tmdb.org/t/p/original'+this.currentFilm.backdrop_path : ''" />
            </div>

            <div class="film-detail-wrapper"> 
                <div class="col-md-4">
                    <div class="film-poster">
                        <a :href="'https://image.tmdb.org/t/p/w342'+ this.currentFilm.poster_path">
                            <img :src=" this.currentFilm.poster_path ? 'https://image.tmdb.org/t/p/w342'+ this.currentFilm.poster_path : '../assets/img/no-image.jpg'" :alt=" this.currentFilm.title ?  this.currentFilm.title : 'Нет данных'">
                        </a>
                    </div>
                </div> 
                <div class="col-md-8">
                    <div class="film-detail-content">
                        <h4 class="title">{{ this.currentFilm.title ?  this.currentFilm.title : 'Нет данных'}}</h4>
                        <h3 class="card-title" v-if="currentFilm.tagline">{{this.currentFilm.tagline}}</h3>
                        <div class="icon">
                            <div class="box_percent">
                                <div class="vote_average">
                                    <div class="percent">{{this.vote_average}}<span>%</span></div>
                                    <md-progress-spinner md-mode="determinate" :md-value="vote_average"></md-progress-spinner>
                                </div>
                            </div>
                            <p>Рейтинг фильма</p>
                            <!--<a href="#" class="set-favorite-false" data-toggle="dropdown" >
                                <i class="material-icons md-white" fxFlex="10%">turned_in_not</i>
                            </a>
                            <a href="" data-toggle="dropdown">
                                <i class="material-icons md-white" fxFlex="10%">turned_in</i>
                            </a>-->
                        </div>

                        <div class="overview">
                            <h3>Обзор</h3>
                            <p>{{ this.currentFilm.overview ?  this.currentFilm.overview : "Описание фильма отсутсвует"}}</p>
                        </div>

                        <div class="runtime info-box">
                            <p>Продолжительность:</p> 
                            {{ this.currentFilm.runtime ?  this.currentFilm.runtime + " мин." : "Данные отсутсвуют"}}
                        </div>

                        <div class="release info-box">
                            <p>Релиз:</p> 
                            {{ this.currentFilm.release_date ?  this.currentFilm.release_date : "Данные отсутсвуют"}}
                        </div>

                        <div class="genres info-box">
                            <p>Жанр: </p>
                            <span v-if="listGenres">
                                <span v-for="genre in listGenres" :key="genre.name">
                                    {{genre}}
                                </span>
                            </span>
                            <span v-else-if="listGenres == []"> Нет данных о жанре</span>
                        </div>

                        <div class="country info-box">
                            <p>Страна: </p>
                            <span v-if="listCountry">
                                <span v-for="country in listCountry" :key="country.name">
                                    {{country}}
                                </span>
                            </span>
                            <span v-else-if="listGenres == []"> Нет данных о стране</span>
                        </div>
                        <div class="company info-box">
                            <p>Компания: </p>
                            <span v-if="listCompany">
                                <span v-for="company in listCompany" :key="company">
                                    <img :src="'https://image.tmdb.org/t/p/w342' + company" style="max-width: 7%;"/>
                                </span>
                            </span>
                            <span v-else-if="listGenres == []"> Нет данных о компании</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row roles">
            <h2 style="margin: 50px;">В главных ролях:</h2>
            <div class="actorsBox" v-if="isActors">
                <div class="actors" v-for="actor in listActors"  :key="actor.id">
                    <router-link :to="{ name: 'actorDetails', params: { id: actor.id}}" class="actor-router">
                        <actor-card :currentActor="actor"></actor-card>
                    </router-link>
                </div>
            </div>
            <div v-else>Not result</div>
        </div>
    </div>


</template>

<script>
    import ActorCard from '../components/ActorCard.vue'

    export default {
        name: 'FilmDetails',
        data() {
            return{
                currentFilm: {},
                listCountry: [],
                listCompany: [],
                listGenres: [],
                listActors: {},
                vote_average: 0,
                movieUrl: "https://api.themoviedb.org/3/movie/",
                personUrl: "https://api.themoviedb.org/3/person/",
                actorsUrl: "https://api.themoviedb.org/3/credit/",
                searchUrl: "https://api.themoviedb.org/3/search/movie",
                apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
                language: "&language=ru-RU",
                isResult: false,
                isActors: false
            }
        },
        computed: {
            resource: function(){
                return this.$resource(this.movieUrl + this.$route.params.id + this.apiKey + this.language)
            },
            actorsResource: function() {
                return this.$resource(this.movieUrl + this.$route.params.id + "/credits" + this.apiKey)
            }
        },
        methods: {
            getFilmDetails: function() {
                this.currentFilm = {}
                this.resource.get().then(function(response){
                    console.log(response.data)
                    this.isResult = true
                    this.currentFilm = response.data
                    if(response.data.production_countries) { 
                        response.data.production_countries.forEach(function(element) {
                            this.listCountry.push(element.name)
                        }, this);
                    } else { 
                         this.listCountry =  false 
                    }
                    if(response.data.production_companies) { 
                        response.data.production_companies.forEach(function(element) {
                            if(element.logo_path != null)
                                this.listCompany.push(element.logo_path)
                        }, this);
                    } else { 
                         this.listCompany =  false 
                    }  
                    if(response.data.genres) { 
                        response.data.genres.forEach(function(element) {
                            this.listGenres.push(element.name)
                        }, this);
                    } else { 
                         this.listGenres =  false 
                    }         
                    this.currentFilm.vote_average ?  this.vote_average = this.currentFilm.vote_average * 10 : "0"                        
                }, function(error) {
                    this.isResult = false
                })
            },
            getActorsList: function() {
                this.listActors = {}
                this.actorsResource.get().then(function(response){
                    console.log("resp", response.data.cast); 
                    this.listActors = response.data.cast.slice(0,8);
                        console.log("actorsList", this.listActors); 
                    this.isActors = true
                })
            }
        },
        mounted() {
            this.getFilmDetails()
            this.getActorsList()
        },
        components: {
            ActorCard
        }
    }
</script>

<style lang="scss" scoped>
    .info {
        min-height: 650px;
    }
    .film-detail-bg {
        position: absolute;
        -webkit-filter: brightness(120%) grayscale(1);
        filter: brightness(120%) grayscale(1);
        opacity: .15;
        width: 100%;
        top: 64px;
        left: 0;
        max-height: 650px;
        overflow: hidden;
    }
    .film-poster {
        width: 70%;
        margin: 50px 3% auto 25%;
    }
    .film-detail-content {
        margin: 50px 12% auto 3%;
    }
    .title {
        font-size: 40px !important;
        margin-bottom: 3%;
    }
    .icon {
        display: flex;
        justify-content: flex-start;
        align-items: center;
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
    .info-box {
        p {
            display: inline-block;
            font-weight: bold;
            font-size: 16px;
            margin-right: 10px;
        }
    }
    .company{
        margin: 10px auto;
    }
    .actorsBox {
        display: flex;
        justify-content: center;
    }
    .actors {
        width: 11%;
        height: 360px;
        .actor-router {
            &:hover {
                text-decoration: none;
            }
        }
    }
    // .md-card {
    //     width: 100% !important;
    //     min-height: 350px;
    //     max-height: 350px;
    // }
    // .md-card-content {
    //     padding: 5px;
    // }
    // .md-card .md-title {
    //     font-size: 18px;
    // }
</style>
