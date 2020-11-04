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
};
</script>

<style>
</style>