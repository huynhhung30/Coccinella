<template>
  <b-container fluid class="tittle">
    <b-row>
      <b-col cols="6">
        <div class="left">
          <div class="name-item">Shoes</div>
          <div class="total-item">99+</div>
        </div>
      </b-col>

      <b-col cols="6">
        <div class="right">
          <b-dropdown
            toggle-class="btn btn-danger d-flex align-items-center mr-2 justify-content-center circle btn-circle"
            text="Sort"
            variant="light"
          >
            <b-dropdown-item href="#">Rating</b-dropdown-item>
            <b-dropdown-item href="#">lastest</b-dropdown-item>
            <b-dropdown-item href="#">Best seller</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TitlePage',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../assets/scss/TitlePage.scss';
</style>
