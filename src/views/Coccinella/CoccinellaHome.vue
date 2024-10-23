<template>
  <div class="home">
    <div class="lock" @click="scrollHead()">
      <b-icon
        id="scrollStop"
        icon="caret-up"
        font-scale="4"
        class="icon-unlock"
      ></b-icon>
      <b-icon
        id="scrollStop"
        icon="caret-up-fill"
        font-scale="4"
        class="icon-lock"
      ></b-icon>
    </div>
    <banner />
    <Carousel />
    <Category />
  </div>
</template>

<script>
import banner from './components/CoccinellaBanner.vue';
import Category from './components/Category.vue';
import Carousel from './components/Carousel.vue';
export default {
  name: 'CoccinellaHome',
  data() {
    return {};
  },
  components: { banner, Category, Carousel },
  mounted() {
    let header = document.querySelector('.nav');
    let lockDiv = document.querySelector('.lock');
    // let editLock = `display: inline;`;
    let style_down = `top:-100px`;
    let style_up = `top:0px;`;
    let last_height = 0;

    window.addEventListener('scroll', () => {
      let currentHeight = document.documentElement.scrollTop;
      if (currentHeight === 0) {
        console.log('currentHeight', currentHeight);
        lockDiv.style.cssText = `display: none;`;
      } else {
        lockDiv.style.cssText = `display: inline;`;
      }
      if (currentHeight > last_height) {
        header.style.cssText = style_down;
      } else {
        header.style.cssText = style_up;
      }
      last_height = currentHeight <= 0 ? 0 : currentHeight;
    });
  },

  methods: {
    scrollHead() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.lock {
  position: fixed;
  bottom: 30%;
  right: 5%;
  cursor: pointer;
  z-index: 10000;
}
.lock:hover .icon-unlock,
.lock .icon-lock {
  display: none;
}
.lock:hover .icon-lock {
  display: inline;
}
</style>
