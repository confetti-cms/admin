import { createApp, watch } from "vue";
import { createPinia, storeToRefs } from "pinia";
import App from "./App.vue";
import "./style.css";
import { plugin, defaultConfig } from "@formkit/vue";
import formKitConfig from "./formkit.config";
import { createRouter, createWebHistory } from "vue-router";
import "@formkit/themes/genesis";
import "@formkit/pro/genesis";
import Dashboard from "./modules/dashboard.vue";
import NotFound from "./modules/not-found.vue";
import Pages from "./modules/pages/pages-overview.vue";
import PageEdit from "./modules/pages/page-edit.vue";
import Services from "./modules/services/services-overview.vue";
import ServicesEdit from "./modules/services/service-edit.vue";
import Posts from "./modules/posts.vue";
import { useMenuStore } from "./store/menu";
import { createProPlugin, inputs } from "@formkit/pro";
import { getMainMenuRequest } from "./mockData/requests";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

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
    path: "/404",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/:service",
    name: "service",
    component: Services,
    async beforeEnter(to, from, next) {
      let store = useMenuStore();
      next();
      const { isMenuLoaded } = storeToRefs(store);
      console.log("isMenuLoaded", isMenuLoaded.value);

      const service = to.params.service;
      // const menuItems: any = await getMainMenuRequest();
      // const hasService = !!menuItems.find((item) => item.module === service);
      // if (hasService) {
      //   next();
      // } else {
      //   next("/404");
      // }

      // store.getMenu();
      // watch(isMenuLoaded, () => {
      //   console.log("some changed", isMenuLoaded.value);
      //   next();
      // });
      if (isMenuLoaded.value) {
        next();
      }
    },
  },
  {
    path: "/:service/edit/:id",
    name: "serviceEdit",
    component: ServicesEdit,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
const pro = createProPlugin("fk-b50da1a3d1", inputs);

const app = createApp(App);
app.use(pinia);
app.use(autoAnimatePlugin);
app.use(router);
// app.use(plugin, defaultConfig(formKitConfig))
app.use(plugin, defaultConfig({ plugins: [pro] }));
app.mount("#app");
