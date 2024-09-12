<template>
  <div id="app">
    <a-layout>
      <a>
        <Navbar class="nav" :class="{ sticky: active }">
          <!-- <div id="nav-container" :class="toggleNavClass()"></div> -->
        </Navbar>
      </a>

      <a-layout-content>
        <router-view :key="$route.fullPath" />
      </a-layout-content>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {},
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
    // window.document.onscroll = () => {
    //   let navBar = document.getElementById('nav');
    //   if (window.scrollY > navBar.offsetTop) {
    //     this.active = true;
    //   } else {
    //     this.active = false;
    //   }
    // };
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import './assets/scss/app.scss';
</style>
