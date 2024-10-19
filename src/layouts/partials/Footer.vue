<template>
  <div class="footer">
    <div class="imageTop">
      <img
        src="https://images.vans.com/is/image/VansBrand/clp-hero-top?$fullres$"
      />
    </div>

    <b-container fluid>
      <b-row class="content-top">
        <b-col cols="2" class="tittle resources">
          <div class="header">Resources</div>
          <div class="text">Find a Store</div>
          <div class="text">Membership</div>
          <div class="text">Nike x NBA</div>
          <div class="text">Nike Journal</div>
        </b-col>
        <b-col cols="2" class="tittle help">
          <div class="header">help</div>
          <div class="text">about us</div>
          <div class="text">Contact Us</div>
          <div class="text">Shipping and Delivery</div>
          <div class="text">Site Feedback</div>
        </b-col>
        <b-col cols="2" class="tittle Company">
          <div class="header">Company</div>
          <div class="text">About Nike</div>
          <div class="text">News</div>
          <div class="text">Investors</div>
          <div class="text">Purpose</div>
          <div class="logo-coccinella"></div>
        </b-col>
        <b-col cols="2" class="tittle PromotionDiscounts">
          <div class="header">Promotions & Discounts</div>
          <div class="text">Student</div>
          <div class="text">Military</div>
          <div class="text">Birthday</div>
        </b-col>
        <b-col cols="2" class="tittle states">
          <div class="header">
            <b-icon icon="globe" font-scale="2"></b-icon>United States
          </div>
        </b-col>
      </b-row>

      <b-row class="content-mid">
        <!-- <b-col cols="2" class="tittle Subscribe">
          <div class="header">Subscribe</div>
          <div class="text">
            Receive product news and updates in your inbox.
          </div>
          <b-input-group class="mt-3">
            <template #append>
              <b-input-group-text
                ><strong class="text-danger">!</strong></b-input-group-text
              >
            </template>
            <b-form-input></b-form-input>
          </b-input-group>
          <div class="text">Nike x NBA</div>
          <div class="text">Nike Journal</div>
        </b-col> -->
        <b-col cols="2" class="tittle follow">
          <div class="header">Follow Shop</div>
          <div class="text">
            <b-icon icon="twitter" font-scale="2"></b-icon>
            <b-icon icon="instagram" font-scale="2"></b-icon>
            <b-icon icon="facebook" font-scale="2"></b-icon>
          </div>
        </b-col>
        <b-col cols="2" class="tittle store-locator">
          <div class="header">Store Locator</div>
          <div class="text">Find a Store for you.</div>
          <div class="button">Find a Store</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
@import '../../assets/scss/Footer.scss';
</style>
