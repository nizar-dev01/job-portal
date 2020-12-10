<template>
    <header-component></header-component>
    <slot></slot>
    <footer-component></footer-component>
</template>

<script>
import headerComponent from './header-component'
import footerComponent from './footer-component'
export default {
    name: 'layout',
    components:{
        headerComponent,
        footerComponent
    }
}
</script>