<template>
  <div class="child">
    <div>我是子组件</div>
    <button class="button" @click="testProps(msg1)">porps传函数</button>
    <button class="button" @click="testEmit">自定义事件</button>
    <button class="button" @click="Bus">全局事件总线</button>
    <button class="button" @click="publish">消息订阅与发布</button>
    <button class="button" @click="updatemsg">vuex仓库</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'ChildView',

  data() {
    return {
      msg1:'porps传函数',
      msg2:'自定义事件',
      msg3:'全局事件总线',
      msg4:'消息订阅与发布',
      msg5:'vuex仓库'
    };
  },
  props:['testProps'],
  mounted() {
    
  },

  methods: {
    // 通过emit出发自定义事件child
    testEmit(){
      this.$emit('child',this.msg2)
    },
    // 通过emit事件来出发$bus上的事件
    Bus(){
      this.$bus.$emit('testBus',this.msg3)
    },
    // 消息发布函数，当消息发布，订阅的地方就会收到
    publish(){
      pubsub.publish('testPubsub',this.msg4)
    },
    // 通过此函数来更新仓库中的数据，在别的组件都可以调用
    updatemsg(){
      this.$store.commit('updateMsg', this.msg5);
    }
  },
};
</script>

<style scoped>
.child {
  width: 400px;
  height: 100px;
  /* background-color: skyblue; */
}
</style>