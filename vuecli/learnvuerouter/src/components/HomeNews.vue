<template>
  <div>
    <ul>
      <li>我是新闻1</li>
      <li>我是新闻2</li>
      <li>我是新闻3</li>
      <li>我是新闻4</li>
    </ul>
    <h2>{{ $route.query.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
};
</script>

<style>
</style>