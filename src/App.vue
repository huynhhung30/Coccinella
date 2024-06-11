<template>
  <div id="app">
    <a-layout>
      <a >
        <Navbar />
      </a>
      <a-layout-content>
        <router-view :key="$route.fullPath" />
      </a-layout-content>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
