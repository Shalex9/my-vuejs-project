<template>
    <div class="container-fluid">
        <div class="row info">
            <div class="actor-detail-wrapper"> 
                <div class="col-md-4">
                    <div class="actor-poster">
                        <a :href="'https://image.tmdb.org/t/p/w342'+ this.currentActor.profile_path">
                            <img :src=" this.currentActor.profile_path ? 'https://image.tmdb.org/t/p/w342'+ this.currentActor.profile_path : '../assets/img/no-image.jpg'" :alt=" this.currentActor.name ?  this.currentActor.name : 'Нет данных'">
                        </a>
                    </div>
                </div> 
                <div class="col-md-8">
                    <div class="actor-detail-content">
                        <h2 style='padding-top:30px;'>{{this.currentActor.name}}</h2>
                        <div class="info-box">
                            <p>Дата рождения: </p>
                            {{ this.currentActor.birthday ?  this.currentActor.birthday : 'Нет данных' }}
                        </div>

                        <div class="info-box">
                            <p>Место рождения: </p>
                            {{ this.currentActor.place_of_birth ?  this.currentActor.place_of_birth : 'Нет данных' }}
                        </div>

                        <div class="info-box">
                            <p>Биография: </p>
                            {{ this.currentActor.biography ?  this.currentActor.biography : 'Нет данных' }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<script>
    export default {
        name: 'ActorDetails',
        data() {
            return{
                currentActor: {},
                personUrl: "https://api.themoviedb.org/3/person/",
                apiKey: "?api_key=e0f7e1b6f264b1d5cb04ea6cc4216ade",
                language: "&language=ru-RU",
                isResult: false
            }
        },
        computed: {
            resource: function(){
                return this.$resource(this.personUrl + this.$route.params.id + this.apiKey + this.language)
            }
        },
        methods: {
            getActorInfo: function(){
                this.currentActor = {}
                this.resource.get().then(function(response){
                    console.log(response.data)
                    this.isResult = true
                    this.currentActor = response.data
                })
            }
        },
        created(){
            this.getActorInfo()
        }
    }
</script>

<style lang="scss" scoped>
    .info {
        min-height: 650px;
    }
    .actor-poster {
        width: 70%;
        margin: 50px 3% auto 25%;
    }
    .actor-detail-content {
        margin: 50px 12% auto 3%;
    }
    .title {
        font-size: 40px !important;
        margin-bottom: 3%;
    }
    .info-box {
        p {
            display: inline-block;
            font-weight: bold;
            font-size: 16px;
            margin-right: 10px;
        }
    }
</style>
