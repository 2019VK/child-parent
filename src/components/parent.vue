<template>
  <div class="parent">
    <div>我是父组件</div>
    <div>我收到的消息为：<span class="msg">{{msgP}}</span></div>
    <div>仓库里的msg: <span class="msg">{{this.$store.state.msg}}</span></div>
    <Child :testProps='testProps' @child='handlerChild'/>
  </div>
</template>

<script>
import Child from './child.vue'
import pubsub from 'pubsub-js'
export default {
  name: 'ParentView',

  data() {
    return {
      msgP:'',
    };
  },

  components:{
    Child
  },

  mounted() {
    // 全局事件总线，将事件绑定在vue原型链的$bus上
    this.$bus.$on('testBus',(msg) =>{
      this.msgP = msg
    })
    // 消息订阅，订阅testpubsub发布的消息
    this.pubId = pubsub.subscribe('testPubsub',(msgName, data) => {
      this.msgP = data
    })
  },

  methods: {
    // 测试将函数用props传给子组件，通过子组件调用
    testProps(msg){
      this.msgP = msg
    },
    // 自定义事件，在child事件触发的时候调用
    handlerChild(msg){
      this.msgP = msg
    }
  },

  // 解绑订阅和全局事件总线
  beforeDestroy(){
    this.$bus.$off('testBus')
    pubsub.unsubscribe(this.pubId)
  }
};
</script>

<style scoped>
.parent {
  width: 400px;
  height: 100px;
  /* background: pink; */
}
.msg {
  color: red;
}
</style>