import { createStore } from 'vuex'
import Vue from 'vue'

export default createStore({
  state: {
    counter: 1000,
    students: [{ id: 110, name: '张三', age: 20 },
    { id: 110, name: '李四', age: 30 },
    { id: 110, name: '王五', age: 10 },
    { id: 110, name: '王二麻子', age: 26 }],
    info: {
      name: 'zyq',
      age: 18
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    incrementCount (state, payload) {
      // // 1.普通的提交风格
      // state.counter += count

      // 2.特殊的提交封装
      console.log(payload);
      state.counter += payload.count
    },
    addStu (state, stu) {
      state.students.push(stu)
    },
    updateInfo (state) {
      // state.info['address'] = '南通'  //非响应式，以下方法是响应式的
      Vue.set(state.info, 'address', '南通')
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    powerCounter (state) {
      return state.counter * state.counter
    },
    older20Stu (state) {
      return state.students.filter(s => s.age > 20)
    },
    older20StuLength (state, getters) {
      return getters.older20Stu.length
    },
    olderAgeStu (state) {//如何需要往getters里面传参数，则需要返回一个函数
      return age => state.students.filter(s => s.age > age)
    }
  }
})
