export default {
    namespaced: true,
    state(){
        return {
            layout: 'app'
        }
    },
    mutations:{
        changeLayout(state,val){
            state.layout = val
        }
    },
    actions:{
        changeLayout({commit},val){
            commit('changeLayout',val)
        }
    },
    getters:{
        layout: s => s.layout
    }
}