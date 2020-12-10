export default {
    namespaced: true,
    state(){
        return {
            layout: 'tst'
        }
    },
    mutations:{

    },
    getters:{
        layout: s => s.layout
    }
}