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
<style
  lang="scss"
  src="~/app.scss"
></style>
