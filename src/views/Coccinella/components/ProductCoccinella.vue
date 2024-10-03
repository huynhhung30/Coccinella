<template>
  <div class="product">
    <b-container fluid>
      <b-row>
        <b-col cols="2"> <Sider /></b-col>
        <b-col cols="10">
          <b-row>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst2" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS2" class="hide" />
                  </a>
                  <!-- <zoom-on-hover
                :img-normal="image"
                :img-zoom="bigger - image"
                :scale="1.5"
                :disabled="false"
                @loaded="onload"
                @resized="onresize"
              ></zoom-on-hover> -->
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Yellow</div>
                <div class="child price">$39</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Black</div>
                <div class="child price">$19</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst3" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS3" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Red</div>
                <div class="child price">$29</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst3" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS3" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Red</div>
                <div class="child price">$29</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst3" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS3" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Red</div>
                <div class="child price">$29</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst3" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS3" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Red</div>
                <div class="child price">$29</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst3" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS3" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Red</div>
                <div class="child price">$29</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst3" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS3" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Red</div>
                <div class="child price">$29</div>
              </div>
            </b-col>
            <b-col>
              <div class="item">
                <div class="child image">
                  <a class="hover_image" href="#">
                    <!-- path/to/first/visible/image: -->
                    <img :src="imageFirst3" />

                    <!-- path/to/hover/visible/image: -->
                    <img :src="imageS3" class="hide" />
                  </a>
                </div>
                <div class="child name">Vans</div>
                <div class="child color">Red</div>
                <div class="child price">$29</div>
              </div>
            </b-col></b-row
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { apiMixin } from '../../../mixins';
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';
import Sider from './Sider.vue';
export default {
  name: 'ProductCoccinella',
  components: { Sider },
  data() {
    return {
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

      mainProps: {
        btn_img: `https://images.vans.com/is/image/Vans/VN000CP6_6BT_ALT1?wid=800&hei=1004&fmt=jpeg&qlt=50&resMode=sharp2&op_usm=0.9,1.5,8,0`,
      },
    };
  },
  computed: {
    ...mapState(['items']),
  },
  methods: {
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
