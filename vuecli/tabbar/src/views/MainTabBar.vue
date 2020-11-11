<template>
  <tab-bar>
    <tab-bar-item path='/home'
                  activeColor='#E06EFE'>
      <template v-slot:item-icon>
        <img src="../assets/img/home.svg"
             alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/home-active.svg"
             alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/category'
                  activeColor='#E06EFE'>
      <template v-slot:item-icon>
        <img src="../assets/img/category.svg"
             alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/category-active.svg"
             alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/shopcart'
                  activeColor='#E06EFE'>
      <template v-slot:item-icon>
        <img src="../assets/img/shopcart.svg"
             alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/shopcart-active.svg"
             alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path='/profile'
                  activeColor='#E06EFE'>
      <template v-slot:item-icon>
        <img src="../assets/img/profile.svg"
             alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="../assets/img/profile-active.svg"
             alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '../components/tabbar/TabBar'
import TabBarItem from '../components/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>