<template>
  <div class="banner">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls 
     
      no-animation
       style="text-shadow: 1px 1px 2px #333;"
           img-width="1024"
      img-height="480"
      label-next=""
      label-prev=""
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img"
            src="../assets/images/banner8.png"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <!-- Slides with custom text -->
      <b-carousel-slide >
        <template #img>
          <img
            class="d-block img"
            src="../assets/images/banner6.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <!-- Slides with image only -->
    </b-carousel>

  </div>
  </template>
  
  <script>
  export default {
    name: "CoccinellaBanner",

    data() {
    return {
      slide: 0,
      sliding: null,
    };
    },
    methods: {
      onSlideStart(slide) {
        console.log(slide)
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide)
      this.sliding = false;
    },
  },

  }
  </script>
  
<style lang="scss" scoped>
@import "~sass-rem";
  @import "../assets/scss/CoccinellaBanner.scss";
</style>