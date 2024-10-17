<template>
  <div class="loading">
    <b-spinner style="width: 3rem; height: 3rem"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'loading',
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
.loading {
  position: absolute;
  height: 33px;
  width: 33px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
  background-size: 100%;
  z-index: 1000;
}
</style>
