import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'

const HelloWorld = () => import('@/pages/HelloWorld.vue')
const HomePage = () => import('@/components/home/homeView.vue')
const aboutPage = () => import('@/components/about/aboutView.vue')
const feedBackPage = () => import('@/components/feedback/feedBackView.vue')

const routes = [
    {
        name: 'hello',
        // path: '/hello/:id/:title',
        path: '/hello',
        component: HelloWorld
    },
    {
        path: '/',
        alias: '/index',
        component: HomePage
    },
    {
        path: '/about/:id',
        alias: '/about',
        component: aboutPage
    },
    {
        name: 'feedBack',
        path: '/feedBack',
        alias: '/feedBack',
        component: feedBackPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes,
    scrollBehavior(to, from, scrollBehavior) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(scrollBehavior) {
                    // 如果有保存的位置且是返回操作，则恢复到原位置
                    resolve(scrollBehavior)
                }else {
                    // 否则滚动到顶部
                    resolve({ left: 0, top: 0 })
                }
            }, 500)
        })
    }
})

export default router;