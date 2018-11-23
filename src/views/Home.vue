<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="bgHeader">
      <Main msg="First project with Vue.js"/>
    </div>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
  name: 'home',
  props: {
    header: {
      type: String,
      default: require('@/assets/img/bg-header.jpg')
    }
  },
  computed: {
    bgHeader() {
      return {
        backgroundImage: `url(${this.header})`
      }
    }
  },
  data () {
    return {

    }
  },
  components: {
    Main
  }
}
</script>
<style lang="scss" scoped>
  .page-header {
      height: 100vh;
      background-position: center center;
      background-size: cover;
      margin: 0;
      padding: 0;
      border: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
  }
  .header-filter {
      position: relative;
  }
</style>
