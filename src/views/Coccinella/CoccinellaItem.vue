<template>
  <div class="home">
    <Breadrumbs />
    <banner />
    <ProductCoccinella />
  </div>
</template>

<script>
import ProductCoccinella from './components/ProductCoccinella.vue';
import Breadrumbs from '../../components/BreadCrumbs.vue';
import banner from './components/CoccinellaBanner.vue';
export default {
  name: 'CoccinellaItem',
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

<style lang="scss" scoped></style>
