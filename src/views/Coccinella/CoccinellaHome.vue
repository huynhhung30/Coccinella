<template>
  <div class="home">
    <Breadrumbs />
    <banner />
    <ProductCoccinella />
  </div>
</template>

<script>
import ProductCoccinella from './components/ProductCoccinella';
import Breadrumbs from '../../components/BreadCrumbs.vue';
import banner from './components/CoccinellaBanner.vue';
export default {
  name: 'CoccinellaHome',
  data() {
    return {};
  },
  components: { ProductCoccinella, Breadrumbs, banner },
  mounted() {
    let header = document.querySelector('.nav');
    let style_down = `top:-100px`;
    let style_up = `top:0px;`;
    let last_height = 0;
    window.addEventListener('scroll', () => {
      let currentHeight = document.documentElement.scrollTop;
      console.log('currentHeight', currentHeight);
      if (currentHeight > last_height) {
        console.log('if', header.style.cssText);

        header.style.cssText = style_down;
      } else {
        console.log('else', header.style.cssText);
        header.style.cssText = style_up;
      }
      last_height = currentHeight <= 0 ? 0 : currentHeight;
    });
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: 0 35px;
}
</style>
