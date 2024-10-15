import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import AdminPage from './pages/AdminPage.vue'
import LoginPage from './pages/LoginPage.vue'


const routes = [
    {   path: '/',component: LoginPage},
    {   path: '/admin',component: AdminPage}
]
const router = createRouter({
    history:createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
