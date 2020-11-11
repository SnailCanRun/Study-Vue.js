<template>
  <div id="app">
    <!-- <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/' + userIds" tag="button">用户</router-link>
    <router-link
      :to="{
        path: '/profile',
        query: { name: '周逸秋', age: 18, height: 180 },
      }"
      >档案</router-link
    >

    <keep-alive enclude="Profile,User"><router-view></router-view></keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userIds: "lisi",
    };
  },
  methods: {
    homeClick() {
      this.$router.push("/home").catch((err) => err);
    },
    aboutClick() {
      this.$router.push("/about").catch((err) => err);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
