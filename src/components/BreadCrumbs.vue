<template>
  <b-breadcrumb class="breadcrumb">
    <b-breadcrumb :items="items"> </b-breadcrumb>
  </b-breadcrumb>
</template>

<script>
export default {
  name: 'Breadrumbs',
  data() {
    return {
      items: [
        {
          text: 'Home',
          href: '#',
        },
        {
          text: 'Item',
          active: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../assets/scss/Breadrumbs.scss';
</style>
