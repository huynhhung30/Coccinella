<template>
    <div class="banner">
      <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
    </div>
  </template>
  
  <script>
  export default {
    name: "CoccinellaBanner",
  };
  </script>
  
  <style lang="scss" scoped>

  @import "~sass-rem";
  @import "../assets/scss/CoccinellaBanner.scss";
</style>