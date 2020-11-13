<template>
  <div>
    <h1>========App========</h1>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>{{$store.getters.powerCounter}}</h2>
    <div>{{$store.getters.olderAgeStu(18)}}</div>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'
export default {
  name: 'App',
  methods: {
    add () {
      this.$store.commit('increment')
    },
    sub () {
      this.$store.commit('decrement')
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>
</style>