<template>
    <header-component></header-component>
    <div class="spacer">
        <slot></slot>
    </div>
</template>

<script>
import headerComponent from './header-component'
export default {
    name: 'layout',
    components:{
        headerComponent
    }
}
</script>

<style
  lang="scss"
  src="./style/layout.scss"
  scoped
></style>