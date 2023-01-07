import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./style.css";
import { plugin, defaultConfig } from "@formkit/vue";
import formKitConfig from "./formkit.config";
import { createRouter, createWebHistory } from "vue-router";
import "@formkit/themes/genesis";
import "@formkit/pro/genesis";
import Dashboard from "./modules/dashboard.vue";
import Pages from "./modules/pages/pages-overview.vue";
import PageEdit from "./modules/pages/page-edit.vue";
import Services from "./modules/services/services-overview.vue";
import ServicesEdit from "./modules/services/service-edit.vue";
import Posts from "./modules/posts.vue";
import { useMenuStore } from "./store/menu";
import { createProPlugin, inputs, repeater } from "@formkit/pro";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

const pinia = createPinia();

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
  },
  {
    path: "/pages",
    name: "Pages",
    component: Pages,
  },
  {
    path: "/pages/edit/:id",
    name: "PageEdit",
    component: PageEdit,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/:service",
    name: "service",
    component: Services,
    async beforeEnter(to, from) {
      let store = useMenuStore();
      console.log('to', to.params.service);
      console.log('store', store.menu);
      const menu = store.menu;
      

      // block navigation
      return false;
    }
  },
  {
    path: "/:service/edit/:id",
    name: "serviceEdit",
    component: ServicesEdit,
  },
];
const router = createRouter({ history: createWebHistory(), routes });

// router.beforeEach((to) => {
//   console.log('jaa');
//   if (to.name !== 'Home') {
//     return '/'
//   }
// })

const pro = createProPlugin("fk-b50da1a3d1", inputs);

const app = createApp(App);
app.use(pinia);
app.use(router);
// app.use(plugin, defaultConfig(formKitConfig))
app.use(plugin, defaultConfig({ plugins: [pro] }));
app.mount("#app");
