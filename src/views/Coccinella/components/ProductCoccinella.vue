<template>
  <div class="product">
    <TitlePage />
    <b-container fluid>
      <b-row>
        <b-col cols="2"> <Sider /></b-col>
        <b-col cols="10">
          <b-row>
            <b-col cols="4" v-for="(item, index) in data" :key="index">
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <img :src="item.image" />
                    <img :src="item.theSecondImage" class="hide" />
                  </a>
                </div>
                <div class="child name">{{ item.name }}</div>

                <div class="child price">{{ item.price }}$</div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { apiMixin } from '../../../mixins';
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';
import Sider from './Sider.vue';
import TitlePage from '../../../components/TitlePage.vue';
export default {
  name: 'ProductCoccinella',
  components: { Sider, TitlePage },
  data() {
    return {
      data: [
        {
          name: 'Knu Skool Shoe',
          image:
            'https://images.vans.com/is/image/Vans/VN0A2Z34_B5P_ALT4?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
          theSecondImage:
            'https://images.vans.com/is/image/Vans/VN0A2Z34_B5P_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
          price: '50',
        },
        {
          name: 'MTE Crosspath Together As Ourselves Shoe',
          image:
            'https://images.vans.com/is/image/Vans/VN0A2Z34_B5P_ALT2?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
          theSecondImage:
            'https://images.vans.com/is/image/Vans/VN0A5FCD_Y04_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
          price: '50',
        },
        {
          name: 'Knu Skool Shoe',
          image:
            'https://images.vans.com/is/image/Vans/VN0A5FCD_Y52_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
          theSecondImage:
            'https://images.vans.com/is/image/Vans/VN0A5FCD_Y52_ALT4?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
          price: '50',
        },
        {
          name: 'Upland Shoe',
          image:
            'https://images.vans.com/is/image/Vans/VN000CVP_448_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
          theSecondImage:
            'https://images.vans.com/is/image/Vans/VN000CVP_448_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
          price: '50',
        },
        {
          name: 'MTE Crestline GORE-TEX Together As Ourselves Shoe',
          image:
            'https://images.vans.com/is/image/Vans/VN000CVV_448_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
          theSecondImage:
            'https://images.vans.com/is/image/Vans/VN000CVV_448_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
          price: '50',
        },
        {
          name: 'Dia De Muertos Sk8-Hi Shoe',
          image:
            'https://images.vans.com/is/image/Vans/VN0A32QG_BER_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
          theSecondImage:
            'https://images.vans.com/is/image/Vans/VN0A32QG_BER_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&quot;',
          price: '50',
        },
      ],
      mainProps: {
        btn_img: `https://images.vans.com/is/image/Vans/VN000CP6_6BT_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0`,
      },
      image:
        'https://images.vans.com/is/image/Vans/VN0A2Z34_B5P_ALT4?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
      imageFirst:
        'https://images.vans.com/is/image/Vans/VN0A2Z34_B5P_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
      imageS:
        'https://images.vans.com/is/image/Vans/VN0A2Z34_B5P_ALT2?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',

      imageFirst2:
        'https://images.vans.com/is/image/Vans/VN0A5FCD_Y04_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
      imageS2:
        'https://images.vans.com/is/image/Vans/VN0A5FCD_Y04_ALT4?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',

      imageFirst3:
        'https://images.vans.com/is/image/Vans/VN0A5FCD_Y52_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
      imageS3:
        'https://images.vans.com/is/image/Vans/VN0A5FCD_Y52_ALT4?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0',
      imageFirst4:
        'https://images.vans.com/is/image/Vans/VN000CVP_448_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
      imageS4:
        'https://images.vans.com/is/image/Vans/VN000CVP_448_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
      imageFirst5:
        'https://images.vans.com/is/image/Vans/VN000CVV_448_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
      imageS5:
        'https://images.vans.com/is/image/Vans/VN000CVV_448_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
      imageFirst6:
        'https://images.vans.com/is/image/Vans/VN0A32QG_BER_HERO?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0&quot;',
      imageS6:
        'https://images.vans.com/is/image/Vans/VN0A32QG_BER_ALT1?wid=1600&hei=1984&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0&quot;',
    };
  },
  computed: {
    ...mapState(['items']),
  },
  methods: {
    async getB2BBanner() {
      this.$store.state.isLoading = true;
      let response = this.data;
      console.log('b2b = ', response);
      // this.$store.state.isLoading = false;
    },
    getImageUrl() {
      const { width, height } = this.mainProps;
      return `https://images.vans.com/is/image/Vans/VN0A2Z34_B5P_ALT4?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0/${width}/${height}`;
    },
    ...mapMutations([
      'setItems',
      'sortAscendingAction',
      'sortDescendingAction',
    ]),
    // setItemInStore(data) {},
    async getAllProducts() {
      const { data } = await axios(`https://dummyjson.com/products`);
      // this.items = data;

      this.setItems(data.products);
      console.log('=-=-=-=-=-=-=-=', data.products);
    },
    async getProductByCategory(cat) {
      if (cat === 'all') {
        await this.getAllProducts();
        return;
      }
      let d = await fetch(`https://dummyjson.com/products/category/${cat}`);
      let da = await d.json();
      // this.items = da;
      this.setItems(da.products);

      // this.$router.push('/');
    },

    openThisProduct(item) {
      this.$router.push({ name: 'productDetails', params: { id: item.id } });
    },
  },
  mounted() {
    // setTimeout(() => (this.$store.state.isLoading = false), 1000);
  },
  mixins: [apiMixin],
  props: {
    searchTerm: String,
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../../../assets/scss/ProductCoccinella.scss';
</style>
