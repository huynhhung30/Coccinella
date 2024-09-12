<template>
  <div class="home">
    <!-- <CoccinellaBanner class="banner"/> -->
    <ProductCoccinella />
  </div>
</template>

<script>
// import CoccinellaBanner from '@/components/CoccinellaBanner.vue';
import ProductCoccinella from '@/components/ProductCoccinella.vue';
export default {
  name: 'CoccinellaHome',
  components: {
    // CoccinellaBanner,
    ProductCoccinella,
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../assets/scss/CoccinellaHome.scss';
</style>
