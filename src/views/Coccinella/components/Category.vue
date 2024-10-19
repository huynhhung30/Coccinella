<template>
  <div class="category">
    <b-container fluid>
      <div class="topic">EXPLORE MORE FROM JORDAN</div>
      <b-row>
        <b-col cols="4" v-for="(item, index) in data" :key="index"
          ><div class="child">
            <div class="image"><img :src="item.image" /></div>
            <div class="contentBottom">
              <div class="title">{{ item.title }}</div>
              <div class="explore">{{ item.explore }}</div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      data: [
        {
          name: 'nike',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_576,c_limit/89d420b9-7e07-4f52-a3cb-e7731450faf3/jordan.jpg',
          title: 'Just do it',
          explore: 'explore',
        },
        {
          name: 'jordan',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_576,c_limit/84089512-9914-4b62-a102-b3d4f32e756a/image.jpg',
          title: 'talk about jump man',
          explore: 'explore',
        },
        {
          name: 'adidas',
          image:
            'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_576,c_limit/75441b08-bcf9-4ced-a192-593aa82ec89c/jordan.jpg',
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
@import '../../../assets/scss/Category.scss';
</style>
