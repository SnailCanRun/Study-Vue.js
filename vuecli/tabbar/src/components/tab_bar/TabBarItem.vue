<template>
  <div @click="itemClick" class="tab-bar-item">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: String,
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style>
.tab-bar-item {
  height: 49px;
  font-size: 14px;
  flex: 1;
  text-align: center;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: text-bottom;
  margin-bottom: 2px;
  margin-top: 4px;
}
</style>