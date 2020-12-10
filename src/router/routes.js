import Home from '@v/Home'
export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta:{
            layout:'blank'
        }
    },
    {
        path: '/',
        redirect: '/home'
    }
]