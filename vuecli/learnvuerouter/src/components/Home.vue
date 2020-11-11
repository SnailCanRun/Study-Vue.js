<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/Home/msgs">消息</router-link>
    <router-link
      :to="{
        path: '/Home/news',
        query: { name: '周逸秋', age: 18, height: 180 },
      }"
      >新闻</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/msgs",
    };
  },
  created() {
    // document.title = "首页";
    console.log("home created");
  },
  destroyde() {
    console.log("home destoryed");
  },
  activated() {
    console.log("home activated");
    this.$router.push(this.path);
  },
  deactivated() {
    console.log("home deactivated");
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path, "home beforeRouteLeave");
    this.path = this.$route.path;
    next();
  },
};
</script>

<style>
</style>