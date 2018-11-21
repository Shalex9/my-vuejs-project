<template>
    <div class="container-fluid">
        <div class="row">
            <div class="film-detail-bg">
                <img :src="'https://image.tmdb.org/t/p/original' +  this.currentFilm.backdrop_path">
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
                            <p>Рейтинг пользователя</p>
                            <a href="#" class="set-favorite-false" data-toggle="dropdown" >
                                <i class="material-icons md-white" fxFlex="10%">turned_in_not</i>
                            </a>
                            <a href="" data-toggle="dropdown">
                                <i class="material-icons md-white" fxFlex="10%">turned_in</i>
                            </a>
                        </div>

                        <div class="overview">
                            <h3>Обзор</h3>
                            <p>{{ this.currentFilm.overview ?  this.currentFilm.overview : "Описание фильма отсутсвует"}}</p>
                        </div>

                        <div class="runtime info-box">
                            <p>Продолжительность:</p> 
                            {{ this.currentFilm.runtime ?  this.currentFilm.runtime + " минут" : "Данные отсутсвуют"}}
                        </div>

                        <div class="genres info-box">
                            <p>Жанр: </p>
                            <span v-if="listGenres">
                                <span v-for="genre in listGenres" :key="genre.name">
                                    {{genre}}
                                </span>
                            </span>
                            <span v-else> Нет данных о жанре</span>
                        </div>

                        <div class="country info-box">
                            <p>Страна: </p>
                            <span v-if="listCountry">
                                <span v-for="country in listCountry" :key="country.name">
                                    {{country}}
                                </span>
                            </span>
                            <span v-else> Нет данных о стране</span>
                        </div>
                        <div class="company info-box">
                            <p>Компания: </p>
                            <span v-if="listCompany">
                                <span v-for="company in listCompany" :key="company">
                                    <img :src="'https://image.tmdb.org/t/p/w342' + company" style="max-width: 7%;"/>
                                </span>
                            </span>
                            <span v-else> Нет данных о компании</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row roles">
            <h2>В ролях: {{$route.params.id}}</h2>
        </div>
        <!--<div class="actors" fxLayout="row" fxLayoutWrap fxLayoutAlign="space-between stretch">
                <actor-card *ngFor="let actor of actorsList"
                    [actor]="actor"
                    [routerLink]="['/peoples', actor.id]"
                    fxFlex="49" fxFlex.gt-xs="19">
                </actor-card>
        </div>
        <button md-button color="primary" routerLink="cast">Показать всех</button>-->
    </div>


</template>

<script>
    export default {
        name: 'FilmDetails',
        data() {
            return{
                currentFilm: {},
                listCountry: [],
                listCompany: [],
                listGenres: [],
                vote_average: 0,
                movieUrl: "https://api.themoviedb.org/3/movie/",
                personUrl: "https://api.themoviedb.org/3/person/",
                actorsUrl: "https://api.themoviedb.org/3/credit/",
                searchUrl: "https://api.themoviedb.org/3/search/movie",
                apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
                language: "&language=ru-RU",
                isResult: false
            }
        },
        computed: {
            resource: function(){
                return this.$resource(this.movieUrl + this.$route.params.id + this.apiKey + this.language)
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
            }
        },
        created() {
            this.getFilmDetails()
        }
    }
</script>

<style lang="scss" scoped>
    .film-detail-bg {
        position: absolute;
        -webkit-filter: brightness(120%) grayscale(1);
        filter: brightness(120%) grayscale(1);
        opacity: .15;
        width: 100%;
        top: 64px;
        left: 0;
        max-height: 550px;
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
    .overview {
        h3 {}
        p {}
    }
    .company{
        margin: 10px auto;
    }
</style>
