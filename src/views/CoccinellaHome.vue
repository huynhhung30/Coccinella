<template>
    <div class="home">
      <CoccinellaBanner />
      <Product />
    </div>
  </template>
  
  <script>
  import CoccinellaBanner from "@/components/CoccinellaBanner.vue";
  import Product from "@/components/Product.vue";
  export default {
    name: "CoccinellaHome",
    components: {
        CoccinellaBanner,
            Product,
    },
  };
  </script>
  
  <style></style>
  