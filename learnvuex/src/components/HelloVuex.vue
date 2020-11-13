<template>
  <div>
    <h1>========HelloVuex========</h1>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.older20StuLength}}</h2>
    <button @click="addCount(mCount)">+</button>
    <br />
    <button @click="addStu(mCount)">新增学生</button>
    <br />
    <button @click="updateInfo">修改信息</button>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data () {
    return {
      mCount: 10
    }
  },
  methods: {
    addCount (count) {
      // // 1.普通的提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStu () {
      const stu = { id: 114, name: '沙雕', age: 20 }
      this.$store.commit('addStu', stu)
    },
    updateInfo () {
      this.$store.commit('updateInfo')
    }
  }
}
</script>

<style>
</style>