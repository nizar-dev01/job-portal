import Home from '@v/Home'
import JobView from '@v/JobView'
import JobApplication from '@v/JobApplication'
import JobEdit from '@v/JobEdit'
import JobCreate from '@v/JobCreate'
import Login from '@v/Login'
import Account from '@v/Account'
export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta:{
            layout:'app'
        }
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/job/:slug',
        name: 'job-view',
        component: JobView
    },
    {
        path: '/job/:slug/application',
        name: 'job-application',
        component: JobApplication
    },
    {
        path: '/job/:slug/edit',
        name: 'job-edit',
        component: JobEdit
    },
    {
        path: '/job/create',
        name: 'job-create',
        component: JobCreate
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    }
]