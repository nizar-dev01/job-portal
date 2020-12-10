import store from '@/store'
import mixin from '@/mixins'
import router from '@/router'
export default {
    install: (app) => {
        app.use(store)
        app.mixin(mixin)
        app.use(router)
    }
  }