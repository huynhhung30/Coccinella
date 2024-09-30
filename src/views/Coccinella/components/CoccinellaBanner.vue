<template>
  <div class="banner">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      no-animation
      style="text-shadow: 1px 1px 2px #333"
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
          <img class="d-block img" :src="bannerImage" alt="image slot" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img class="d-block img" :src="bannerImageFirst" alt="image slot" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img class="d-block img" :src="bannerImageSecond" alt="image slot" />
        </template>
      </b-carousel-slide>

      <!-- Slides with image only -->
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'CoccinellaBanner',

  data() {
    return {
      slide: 0,
      sliding: null,
      bannerImage:
        'https://images.vans.com/is/image/VansBrand/FA24%5FOmniMTE%2DAugust%5FDotCom%5FSurfHP%2DDesktop?$fullres$',
      bannerImageFirst:
        'https://images.vans.com/is/image/VansBrand/FA24_Rowan_July_HP_d?$fullres$',
      bannerImageSecond:
        'https://images.vans.com/is/image/VansBrand/DESKTOPSNOW%5F1400x600?$fullres$',
      imageFirst2:
        'https://images.vans.com/is/image/Vans/VN0A5FCD_Y04_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
    };
  },
  methods: {
    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../../../assets/scss/CoccinellaBanner.scss';
</style>
