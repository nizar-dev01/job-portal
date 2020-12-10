<template>
  <component :is="layout">
      <slot></slot>
  </component>
</template>

<script>
import kebabCase from 'lodash/kebabCase';
const requireModule = require.context(
    './templates',
    true,
    /Layout([\w]?)+\.vue$/
)
const components = {}

requireModule.keys().forEach(filename => {
    if(filename == './index.js') return;
    const l_module = kebabCase(filename.split('/')[1])
    components[l_module] = requireModule(filename).default || requireModule(filename);
})

export default {
    name: 'Layout',
    components,
    computed:{
        layout(){
            const
                r_m = this.$route.meta,
                l = r_m ? r_m.layout : 'app',
                valid = Object.keys(components)
            return l && valid.some(v=>l==v) ? l : 'app'
        }
    }
}
</script>

<style>

</style>