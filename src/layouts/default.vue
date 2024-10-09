<template>
  <div id="app">
    <loading v-if="$store.state.isLoading" />
    <AppHeader class="nav" />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import AppHeader from '@/layouts/partials/Navbar';
import Loading from '../components/Loading.vue';
export default {
  name: 'Coccinella',
  data() {
    return {};
  },
  components: {
    AppHeader,
    Loading,
  },
  mounted() {
    let header = document.querySelector('.nav');
    let style_down = `top:-100px; position: fixed;`;
    let style_up = `top:0px; position: sticky;`;
    let last_height = 0;
    window.addEventListener('scroll', () => {
      let currentHeight = document.documentElement.scrollTop;
      console.log('currentHeight', currentHeight);
      if (currentHeight > last_height) {
        header.style.cssText = style_down;
      } else {
        header.style.cssText = style_up;
      }
      last_height = currentHeight <= 0 ? 0 : currentHeight;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../assets/scss/Coccinella.scss';
</style>
