<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import Main from '@/components/Main.vue'

export default {
  name: 'about',
  components: {
    Main
  }
}
</script>