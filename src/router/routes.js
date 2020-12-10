import Home from '@v/Home'
import JobView from '@v/JobView'
import JobApplication from '@v/JobApplication'
import JobEdit from '@v/JobEdit'
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
        name: 'job-application',
        component: JobEdit
    }
]