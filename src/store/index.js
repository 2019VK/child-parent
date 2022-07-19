// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 在vue身上使用vuex
Vue.use(Vuex)

// 新建一个store仓库，并将其暴露出去
export default new Vuex.Store({
  // vuex存储数据的地方
  state: {
    msg:'',
  },
  // 可以理解成vuex的computed？
  getters: {
  },
  // 对state中的数据修改
  mutations: {
    updateMsg(state,msg){
      state.msg = msg
    }
  },
  // 对数据进行预处理，或者是异步处理？
  actions: {
  },
  // 可以将仓库分解成小仓库
  modules: {
  }
})