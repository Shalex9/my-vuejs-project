<template>
  <div class="wrapper">
    <div class="page-header"></div>

    <div class="main">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item">
            <div class="profile">
              <div class="avatar">
                <img :src="img" alt="Alexander" class="img-raised rounded-circle img-fluid">
              </div>
              <div class="name">
                <h3 class="title">Александр Шевчук</h3>

                <h1>Тестовая работа на Vue.js</h1><br />
                <h3>Код работы на гитхабе:</h3>
                <md-button href="https://github.com/Shalex9/my-vuejs-project" class="md-icon-button" style="font-size: 40px;"><i class="fab fa-github"></i></md-button>
              </div>
            </div>
            
            <h3><router-link to='/films'>Перейдите на вкладку фильмы</router-link></h3>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
  export default {
    name: 'home',
    props: {
      img: {
        type: String,
        default: require("../assets/img/shalex.jpg")
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page-header {
    // position: relative;
    background-image: url("../assets/img/bg-header.jpg");
    background-position: center center;
    background-size: cover;
    margin: 0;
    height: 600px;
  }
  .main {
    background: #FFFFFF;
    position: relative;
    z-index: 3;
    margin: -33% 30px 0px;
    border-radius: 6px;
    -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
  .md-layout-item {
    min-width: 60%;
    max-width: 60%;
    flex: 0 1 60%;
    margin: 0 auto;
  }
  .profile {
    text-align: center;
    img {
      max-width: 160px;
      width: 100%;
      margin: 0 auto;
      transform: translate3d(0, -50%, 0);
      border-radius: 50% !important;
      -webkit-box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
      box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    }
  }
  .name {
    margin-top: -80px;
    .title {
      margin-top: 30px;
      margin-bottom: 25px;
      min-height: 32px;
      color: #3C4858;
      text-decoration: none;
    }
    p {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  }
</style>
