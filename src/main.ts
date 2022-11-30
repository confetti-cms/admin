import { createApp } from 'vue'
import App from './App.vue';
import './style.css';
import { plugin, defaultConfig } from '@formkit/vue'
import formKitConfig from './formkit.config';
import { createRouter, createWebHistory } from 'vue-router';
import '@formkit/themes/genesis'
import Dashboard from './modules/dashboard.vue';
import Pages from './modules/pages/pages-overview.vue';
import PageEdit from './modules/pages/page-edit.vue';
import Posts from './modules/posts.vue';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Dashboard,
    },
    {
        path: '/pages',
        name: 'Pages',
        component: Pages,
    },
    {
        path: '/pages/edit/:id',
        name: 'PageEdit',
        component: PageEdit
    },
    {
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
];
const router = createRouter({ history: createWebHistory(), routes })

const app = createApp(App)
app.use(router);
app.use(plugin, defaultConfig(formKitConfig))
app.mount('#app')