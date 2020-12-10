import store from '@/store'
import mixin from '@/mixins'
import router from '@/router'
import fontAwesome from './fontawesome'
import { VueEditor } from "vue3-editor";
export default {
    install: (app) => {
        app.use(store)
        app.use(router)
        app.use(fontAwesome)
        app.mixin(mixin)
        app.component('editor',VueEditor)
    }
  }