<template>
  <div class="navbar">
    <div class="nav-top">
      <div class="text logo">
        <div class="logo-top">
          <div class="text-shop">c</div>
          <div class="text-shop"><img src="@/assets/images/cocc.jpg" /></div>
          <div class="text-shop">c</div>
          <div class="text-shop">c</div>
          <div class="text-shop">i</div>
          <div class="text-shop">n</div>
          <div class="text-shop">e</div>
          <div class="text-shop">l</div>
          <div class="text-shop">a</div>
        </div>
        <div class="logo-bot">
          <div class="text-bottom">t</div>
          <div class="text-bottom">h</div>
          <div class="text-bottom">r</div>
          <div class="text-bottom">i</div>
          <div class="text-bottom">f</div>
          <div class="text-bottom">t</div>
          <div class="text-bottom">s</div>
          <div class="text-bottom">h</div>
          <div class="text-bottom">o</div>
          <div class="text-bottom">p</div>
        </div>
      </div>
      <div class="text contract">
        <div class="phone">
          <img src="@/assets/images/ig.svg" />
          coccinella_thriftshop
        </div>
        <div class="email">
          <img src="@/assets/images/gmail.svg" />
          info@gmail.com
        </div>
      </div>
      <div class="picture">
        <img src="@/assets/images/coccinella.jpg" />
      </div>
    </div>
    <div class="nav-bottom">
      <div class="button">home</div>
      <div class="button">about us</div>
      <div class="button">contract</div>
      <div class="button">topics</div>
      <div class="button">reel</div>
      <div class="logo-coccinella"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {
    ...mapGetters(['allProductLength']),
  },
  methods: {
    onSearch(searchTerm) {
      if (!searchTerm) return;

      this.searchTerm = '';
      this.$router.push({ name: 'Search', params: { searchTerm } });
    },
  },
};
</script>

<style>
@import '../../assets/scss/navbar.scss';
</style>
