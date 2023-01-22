// import Vue from "vue"
import {createRouter,createWebHashHistory} from "vue-router"
import HomeView from '../views/HomeView'
import UserView from '../views/UserView'
import MainView from '../views/MainView'
import MallView from '../views/MallView'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import LoginView from '../views/LoginView'


const routes=[
    {
        path:'/',
        redirect:"/home",
        name:'MainView',
        component:MainView,
        children:[
            {
                path:'home',
                name:'home',
                component:HomeView  //首页
            },
            {
                path:'user',
                name:'user',
                component:UserView //用户
            },
            {
                path:'mall',
                name:'mall',
                component:MallView  //商品
            },
            {
                path:'pageone',
                name:'pageone',
                component:PageOne  //页面1
            },
            {
                path:'pagetwo',
                name:'pagetwo',
                component:PageTwo //页面2
            }
        ]
    },
    {
        path:'/login',
        name:'LoginView',
        component:LoginView,
    }
   
]


const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export  default router