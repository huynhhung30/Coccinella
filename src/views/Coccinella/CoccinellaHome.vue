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
    <Category />
  </div>
</template>

<script>
import banner from './components/CoccinellaBanner.vue';
import Category from './components/Category.vue';
export default {
  name: 'CoccinellaHome',
  data() {
    return {};
  },
  components: { banner, Category },
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
