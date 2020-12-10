<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from '@l/Layout'
import { useStore } from 'vuex'
import { ref } from 'vue'
export default {
  name: 'App',
  setup(){
    const
      store = useStore(),
      lval =  ref('test')
    function test(){
      store.dispatch('init/changeLayout',lval.value)
    }
    return {
      test,
      lval
    }
  },
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
