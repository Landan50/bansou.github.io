import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'

const HelloWorld = () => import('@/pages/HelloWorld.vue')
const HomePage = () => import('@/components/home/homeView.vue')
const aboutPage = () => import('@/components/about/aboutView.vue')
const feedBackPage = () => import('@/components/feedback/feedBackView.vue')
const aboutUsPage = () => import('@/components/aboutUS/aboutUsView.vue')
const memberProblemPage = () => import('@/components/memberProblem/memberProblemView.vue')
const serviceProblemPage = () => import('@/components/serviceProblem/serviceProblemView.vue')
const serviceUsePage = () => import('@/components/serviceUse/serviceUseView.vue')
const memberUsePage = () => import('@/components/memberUse/memberUseView.vue')
const hotViewPage = () => import('@/components/hotView/hotView.vue')
const hotViewListPage = () => import('@/components/hotList/hotListView.vue')
const hotViewDetailsPage = () => import('@/components/hotViewDetails/hotViewDetailsView.vue')


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
    },
    {
        name: 'aboutUs',
        path: '/aboutUs',
        component: aboutUsPage
    },
    {
        name: 'memberProblem',
        path: '/memberProblem',
        component: memberProblemPage
    },
    {
        name: 'serviceProblem',
        path: '/serviceProblem',
        component: serviceProblemPage
    },
    {
        name: 'serviceUse',
        path: '/serviceUse',
        component: serviceUsePage
    },
    {
        name: 'memberUse',
        path: '/memberUse',
        component: memberUsePage
    },
    {
        name: 'hotView',
        path: '/hotView',
        component: hotViewPage,
        redirect: '/hotView/list',
        children: [
            {
                name: 'list',
                path: 'list',
                component: hotViewListPage
            },
            {
                name: 'details',
                path: 'details/:id/:page',
                component: hotViewDetailsPage
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory('/bansou.github.io/'),
    // history: createWebHistory(),
    routes,
    scrollBehavior(to, from, scrollBehavior) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (scrollBehavior) {
                    // 如果有保存的位置且是返回操作，则恢复到原位置
                    resolve(scrollBehavior)
                } else {
                    // 否则滚动到顶部
                    resolve({ left: 0, top: 0 })
                }
            }, 500)
        })
    }
})

export default router;