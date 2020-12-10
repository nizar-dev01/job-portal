import store from '@/store'
import mixin from '@/mixins'
import router from '@/router'
import fontAwesome from './fontawesome'
import { VueEditor } from "vue3-editor"
import loader from '@/directives/loader'
import preLoader from '@c/loader'
export default {
    install: (app) => {
        app.use(store)
        app.use(router)
        app.use(fontAwesome)
        app.mixin(mixin)
        app.directive('loader',loader)
        app.component('editor',VueEditor)
        app.component('loader',preLoader)
    }
  }