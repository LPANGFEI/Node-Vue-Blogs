import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)



const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 全局守卫
router.beforeEach((to, from, next) => {
    //  判断是否有token登陆
    const isLogin = localStorage.jwtToken ? true : false
    // meta标识的路由需要登陆token
    if (to.meta.requireAuth) {
        // 是否登陆有token
        if (isLogin) {
            next()
        } else {
            alert('请先登陆！')
            // 返回登陆
            next({
                path: '/login',
                // 将跳转的路由path作为参数，登录成功后重定向到该路由
                query: {
                    redirect: to.fullPath
                }
            })
        }
        // 其他可登录
    } else {
        next()
    }
})

export default router
