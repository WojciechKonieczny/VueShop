<template>
  <div id="app">
    <header id="#top-header">
      <Menu />
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/global.scss';
@import '@/assets/scss/variables.scss';

#app {
  background: $primary-gradient;
  width: 100%;
  height: 100%;
  padding-top: 1.3em;
}
</style>

<script>
import Menu from '@/components/Header/Menu';

export default {
  components: { Menu },
}
</script>
