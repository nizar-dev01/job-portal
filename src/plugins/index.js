import store from '@/store'
import mixin from '@/mixins'
import router from '@/router'

import { VueEditor } from "vue3-editor";
export default {
    install: (app) => {
        app.use(store)
        app.mixin(mixin)
        app.use(router)
        app.component('editor',VueEditor)
    }
  }