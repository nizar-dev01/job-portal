import store from '@/store'
function beforeGuard(to,from,next){
    const loggedIn = store.getters['data/loggedIn'];
    // visitor
    const forVisitor = to.matched.some(route => route.meta.visitor);
    // auth
    const requiresAuth = to.matched.some(route => route.meta.user);
    // redirect path
    const redirect = to.meta ? to.meta.redirect || null : null;
    // check
    if(requiresAuth){
        if(!loggedIn){
            // this state is used in App.vue > watch > loggedIn
            if(redirect){
                next({path:redirect});
            }else next({ path:'/login' })
        }else next();
    }
    else if(forVisitor){
        if(loggedIn){
            if(redirect){
                next({path:redirect});
            }else{
                next({ path:'/' });
            }
        }else next();
    }
    else next();
}
export { beforeGuard }