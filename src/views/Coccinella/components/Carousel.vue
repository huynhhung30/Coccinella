<template>
  <div class="slick">
    <b-container fluid>
      <div class="topic">EXPLORE MORE FROM JORDAN</div>
      <b-row class="carousel">
        <VueSlickCarousel v-bind="settings">
          <b-col cols="4" v-for="(item, index) in data" :key="index">
            <div class="image"><img :src="item.image" /></div>
          </b-col>
        </VueSlickCarousel>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: 'Carousel',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: window.innerWidth <= 500,
        infinite: true,
        initialSlide: 2,
        speed: 500,
        slidesToShow: window.innerWidth > 500 ? 5 : 3,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
      data: [
        {
          name: 'nike',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/f1c1e89f-6b14-41e0-80a6-a1332bf01ccc/nike-just-do-it.png',
          title: 'Just do it',
          explore: 'explore',
        },
        {
          name: 'jordan',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/4150ed95-006a-4e59-9fec-6503c0b1f752/nike-just-do-it.png',
          title: 'talk about jump man',
          explore: 'explore',
        },
        {
          name: 'adidas',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/548ccaf6-1b5f-421c-8234-ef0b56b6aa1b/nike-just-do-it.png',
          title: 'Original Classic Shoes',
          explore: 'explore',
        },
        {
          name: 'nike',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/f42ab353-78a0-4162-85f7-9c6d9cad5afe/nike-just-do-it.png',
          title: 'Just do it',
          explore: 'explore',
        },
        {
          name: 'jordan',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/c8263ba6-42f3-47c8-9580-c362736367ba/nike-just-do-it.png',
          title: 'talk about jump man',
          explore: 'explore',
        },
        {
          name: 'adidas',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/73c4a613-c354-4bd5-9df8-e0cc7705c467/nike-just-do-it.jpg',
          title: 'Original Classic Shoes',
          explore: 'explore',
        },
        {
          name: 'nike',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/f1c1e89f-6b14-41e0-80a6-a1332bf01ccc/nike-just-do-it.png',
          title: 'Just do it',
          explore: 'explore',
        },
        {
          name: 'jordan',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/4150ed95-006a-4e59-9fec-6503c0b1f752/nike-just-do-it.png',
          title: 'talk about jump man',
          explore: 'explore',
        },
        {
          name: 'adidas',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/548ccaf6-1b5f-421c-8234-ef0b56b6aa1b/nike-just-do-it.png',
          title: 'Original Classic Shoes',
          explore: 'explore',
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../../../assets/scss/Carousel.scss';
</style>
