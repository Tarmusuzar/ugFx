import {createRouter,createWebHistory} from 'vue-router'
import MainProducts from './components/MainProducts'
import GetStarted from './components/GetStarted'
import LearnMore from './components/LearnMore'
import LogIn from './components/LogIn'
import TradeHistory from './components/TradeHistory'
export default createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:MainProducts},
        {path:'/signup',component:GetStarted},
        {path:'/learn-more',component:LearnMore},
        {path:'/login',component:LogIn},
        {path:'/history',component:TradeHistory},
    ]
})