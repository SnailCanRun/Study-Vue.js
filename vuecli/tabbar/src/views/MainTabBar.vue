<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#f439f0">
      <template v-slot:item-icon>
        <img src="../assets/img/home.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/home-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#f439f0">
      <template v-slot:item-icon>
        <img src="../assets/img/category.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/category-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#f439f0">
      <template v-slot:item-icon>
        <img src="../assets/img/cart.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/cart-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#f439f0">
      <template v-slot:item-icon>
        <img src="../assets/img/profile.svg" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/profile-active.svg" alt="" />
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../components/tab_bar/TabBar";
import TabBarItem from "../components/tab_bar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>