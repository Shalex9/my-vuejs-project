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

        <component :is="currentView"></component>
    </div>
</template>

<script>
    import FilmsNow from '../views/FilmsNow.vue'
    // import AllFilmsMixin from '../views/AllFilmsMixin.js'
    import FilmsPopular from '../views/FilmsPopular.vue'
    import FilmsTop from '../views/FilmsTop.vue'
    import FilmsUpcoming from '../views/FilmsUpcoming.vue'
    import FilmsSearch from '../views/FilmsSearch.vue'

    export default {
        name: 'films',
        data () {
            return {
                currentView: 'FilmsSearch',
            }
        },   
        methods: {
            switchView: function(view) {
                this.currentView = view
            }
        },
        components: {
            FilmsNow, FilmsTop, FilmsPopular, FilmsUpcoming, FilmsSearch
        }
    }
</script>


<style lang="scss" scoped>

</style>
