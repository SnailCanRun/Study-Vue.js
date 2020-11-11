<template>
  <div>
    <h2>{{ $route.query.name }}</h2>
    <h2>{{ $route.query.age }}</h2>
    <h2>{{ $route.query.height }}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  beforeRouteEnter(to, from, next) {
    console.log("profile  vue");
    next();
  },
};
</script>

<style>
</style>