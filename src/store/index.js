import { createStore } from 'vuex'
import modules from './modules.js'

const store = createStore({ modules })

// Store Initialization when the app loads
for(let module in modules){
  for(let action in modules[module].actions){
    const pass = /^S_/.test(action)
    if(pass){
      store.dispatch('data/'+action)
    }
  }
}

export default store