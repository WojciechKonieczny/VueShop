<template>
  <div id="app">
    <header id="#top-header">
      <Menu />
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

@font-face {
   font-family: 'Bebas Neue';
   src: url('../src/assets/font/BebasNeue-Regular.ttf');
}


* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
}

html {
   width: 100%;
   height: 100%;
   font-size: 62.5%;
   line-height: 1.312;
}

body {
   width: 100%;
   font-family: 'Roboto', sans-serif;
   color: $primary-gray;
   font-size: 100%;
}

.container {
   width: 80%;
   max-width: 90em;
   margin: 0 auto;
   background: #ffffff;
}

a:link, a:visited{
   text-decoration: none;
   color: $primary-gray;
}

@media all and (max-width: $l-screen) {
   html {
      font-size: 60%;
   }
}

#app {
  background: $primary-gradient;
  height: 100%;
  padding-top: 1.3em;
}
</style>

<script>
import Menu from '@/components/Header/Menu';
import Items from '@/components/Items/Items';

export default {
  components: { Menu, Items },
}
</script>
