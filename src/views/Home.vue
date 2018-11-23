<template>
  <div class="wrapper">
    <div class="section page-header header-filter">
      <!--<Main msg="First project with Vue.js"/>-->
      <h1>First project with Vue.js</h1><br />
      <h3><router-link to='/films'>Go to page with films -></router-link></h3>
    </div>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'

export default {
  name: 'home',
  components: {
    Main
  }
}
</script>
<style lang="scss" scoped>
  .section {
    background: url("../assets/img/bg-header.jpg");
    color: white;
  }
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
