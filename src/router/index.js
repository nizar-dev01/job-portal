import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { beforeGuard } from './guards'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(beforeGuard)

export default router