<template>
  <div class="sider-bar">
    <div class="item1">1</div>
    <div class="item1">2</div>
    <div class="item1">3</div>
    <div class="item1">4</div>
    <div class="item1">5</div>
    <div class="item1">6</div>
  </div>
</template>

<script>
export default {
  name: 'Sider',
  data() {
    return {
      searchTerm: '',
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../../../assets/scss/Sider.scss';
</style>
