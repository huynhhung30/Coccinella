<template>
  <div id="app">
    <loading v-if="$store.state.isLoading" />
    <AppHeader class="nav" />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import AppHeader from '@/layouts/partials/Navbar';
import Footer from '@/layouts/partials/Footer';
import Loading from '../components/Loading.vue';
export default {
  name: 'Coccinella',
  data() {
    return {};
  },
  components: {
    AppHeader,
    Loading,
    Footer,
  },
  mounted() {
    let header = document.querySelector('.nav');
    let style_down = `top:-100px; position: revert-layer; transition: 1s linear;`;
    let style_up = `top:0px; position: sticky; transition: 1s linear;`;
    let last_height = 0;
    window.addEventListener('scroll', () => {
      let currentHeight = document.documentElement.scrollTop;

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
