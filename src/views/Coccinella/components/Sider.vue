<template>
  <div class="sider-bar">
    <div class="item shoes">shoes</div>
    <div class="item clothing">clothing</div>
    <div class="item new">New</div>
    <div class="item sale">sale</div>
    <div class="item shoes">jacket</div>
    <div class="item clothing">jew</div>
    <div class="item new">deck</div>
    <div class="item sale">wheel</div>
    <div class="item shoes">bearing</div>
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
