<template>
  <div class="news">
    <b-container fluid>
      <div class="topic">Topic</div>
      <div class="image">
        <img :src="img" />
      </div>
      <div class="date">Original content published: 12 September 2023</div>
      <div class="content">
        The first instalment in its partnership with professional skateboarder
        Leo Baker, Nike SB has unveiled the Nike SB React Leo, a gender-neutral
        shoe that blends durability with modern technology. "I wanted the shoe
        to be utilitarian with elevated moments and fashiony vibes, but
        ultimately to be a great skate shoe", said Baker.
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Topic',
  components: {},
  data() {
    return {
      img: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_945,c_limit/61016c0a-8db1-4a20-b3ab-3aaa5e8940ba/nike-sb-reveals-its-first-shoe-in-leo-barker-partnership.jpg',
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.news {
  .image {
    text-align: center;
    img {
      height: 92%;
    }
  }
  .date {
    margin-left: 26px;
    width: 80%;
    text-transform: inherit;
  }
  .content {
    margin-left: 26px;
    width: 80%;
    font-size: 26px;
    font-weight: 500;
  }
  .topic {
    margin: 60px 0 30px;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 800;
  }
}
</style>
