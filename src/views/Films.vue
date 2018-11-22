<template>
    <div class="container-fluid wrapper">
        <h1>Откройте для себя новые фильмы</h1>

        <md-tabs md-alignment="centered" md-active-tab="tab-search">
            <md-tab id="tab-popular" md-label="Популярные" @click="switchView('FilmsPopular')"></md-tab>
            <md-tab id="tab-now" md-label="В прокате" @click="switchView('FilmsNow')"></md-tab>
            <md-tab id="tab-search" md-label="Поиск фильма" @click="switchView('FilmsSearch')"></md-tab>
            <md-tab id="tab-top" md-label="ТОП фильмы" @click="switchView('FilmsTop')"></md-tab>
            <md-tab id="tab-upcoming" md-label="Ожидаемые" @click="switchView('FilmsUpcoming')"></md-tab>
        </md-tabs>

        <md-radio v-model="layout" class="md-primary" value="y" @click="switchLayout('y')">Вертикально</md-radio>
        <md-radio v-model="layout" class="md-primary" value="x" @click="switchLayout('x')">Горизонтально</md-radio>
        <keep-alive>
            <component :is="layout + currentView" v-on:setFilmName="setFilmName" v-on:setFilm="setFilm" :film="filmName" class="container-fluid"></component>
        </keep-alive>
    </div>
</template>

<script>
    import yFilmsNow from '../views/FilmsNowY.vue'
    import xFilmsNow from '../views/FilmsNowX.vue'
    import yFilmsPopular from '../views/FilmsPopularY.vue'
    import xFilmsPopular from '../views/FilmsPopularX.vue'
    import yFilmsTop from '../views/FilmsTopY.vue'
    import xFilmsTop from '../views/FilmsTopX.vue'
    import yFilmsUpcoming from '../views/FilmsUpcomingY.vue'
    import xFilmsUpcoming from '../views/FilmsUpcomingX.vue'
    import yFilmsSearch from '../views/FilmsSearchY.vue'
    import xFilmsSearch from '../views/FilmsSearchX.vue'

    export default {
        name: 'films',
        data () {
            return {
                layout: 'y',
                currentView: 'FilmsSearch',
                filmName : 'home'
            }
        },   
        methods: {
            setFilmName: function(name) {
                this.filmName = name
                console.log("films: ", this.filmName)
            },
            setFilm: function(name) {
                this.filmName = name
                console.log("films: ", this.filmName)
            },
            switchView: function(view) {
                this.currentView = view
            },
            switchLayout: function(lt) {
                this.layout = lt
            }
        },
        components: {
            yFilmsNow, xFilmsNow, yFilmsTop, xFilmsTop, yFilmsPopular, xFilmsPopular, 
            yFilmsUpcoming, xFilmsUpcoming, yFilmsSearch, xFilmsSearch
        }
    }
</script>


<style lang="scss" scoped>

</style>
