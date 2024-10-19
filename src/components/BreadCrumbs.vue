<template>
  <b-breadcrumb class="breadcrumb">
    <b-breadcrumb v-for="(crumb, index) in breadcrumbs" :key="index">
      <router-link to="/">Home</router-link>
      <span>/</span>
      <router-link :to="crumb.to">{{ crumb.label }}</router-link>
    </b-breadcrumb>
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
      breadcrumbList: [],
    };
  },
  computed: {
    breadcrumbs() {
      const route = this.$route;
      const matchedRoutes = route.matched;
      console.log('route', route);
      console.log('matchedRoutes', matchedRoutes);

      return matchedRoutes.map((routeItem) => ({
        label: routeItem.meta.breadcrumb || routeItem.name,
        to: this.getRoutePath(route, routeItem),
      }));
    },
  },
  methods: {
    getRoutePath(route, routeItem) {
      this.$store.state.isLoading = true;
      const matchedSegments = route.matched.slice(
        0,
        route.matched.indexOf(routeItem) + 1
      );
      return matchedSegments.map((segment) => segment.path).join('/');
    },
  },
  mounted() {
    setTimeout(() => (this.$store.state.isLoading = false), 1000);
  },
};
</script>

<style lang="scss" scoped>
@import '~sass-rem';
@import '../assets/scss/Breadrumbs.scss';
</style>
