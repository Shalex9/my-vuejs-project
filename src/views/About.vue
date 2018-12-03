<template>
  <div class="about">
    <div class="container">
      <div class="col-md-10 col-md-offset-1">
        <div class="boxLogo">
          <img src="../assets/img/vue.png" alt="Vue">
        </div>
        <h1>Это моя первая работа на Vue.js</h1>
        <p>В этом проекте работал с API сайта <a href="https://www.themoviedb.org/discover/movie?language=ru-RU">TheMovieDB</a>. <br /> 
          Извлекая данные с этого ресурса есть возможность получать фильмы как с помощью <b>поиска по названию</b>, так и по различным <b>категориям</b>. 
          Карточки фильмов можно просматривать в двух вариантах: вертикальном и горизонтальном. 
          Фильмы подгружаются по 20 штук. Внизу, под последним рядом фильмов расроложена кнопка "<b>Подгрузить еще фильмов</b>", 
          нажав на которую добавится следующая порция из 20 фильмов(если такая имеется). 
          Во время загрузки фильмов выполняется <b>анимация</b>. <br />
          Нажав кнопку подробнее на любом из понравившихся фильмов Вы перейдете к <b>странице детального обзора выбранного фильма</b>. 
          Если на ресурсе TheMovieDB содежатся данные об этом фильме, - на этой странице будет предоставленны все эти данные. <br />
          Также в деталях фильма отображаются несколько основных актеров, а кликнув по карточке с актером - 
          есть возможность перейти на <b>страницу деталей данного актера</b>.
        </p>

        <h3>Также подключил загрузку новостей с ресурса newsapi.org</h3>
        
        <h3>Код работы на гитхабе:</h3>
        <md-button href="https://github.com/Shalex9/my-vuejs-project" target="_blank" class="md-icon-button" style="font-size: 40px;"><i class="fab fa-github"></i></md-button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'about',
}
</script>

<style lang="scss">
  .about {
    background: #eee
  }
  .boxLogo {
    img {
        max-width: 160px;
        width: 100%;
    }
  }
  .about {
    padding: 50px;
    p {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
