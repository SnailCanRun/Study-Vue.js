<template>
  <div>
    <h2>我是用户{{ userId }}</h2>
    <h2>我是用户{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
};
</script>

<style>
</style>