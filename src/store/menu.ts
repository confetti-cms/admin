import { defineStore } from "pinia";
import { getMainMenuRequest } from "../mockData/requests";

export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      loading: false,
      loaded: false,
      menu: null,
    };
  },
  actions: {
    async getMenu() {
      this.loading = true;
      this.loaded = false;
      const menuResponse: any = await getMainMenuRequest();
      this.menu = parseMenu(menuResponse);
      console.log("this.menu", this.menu);

      this.loading = false;
      this.loaded = true;
    },
  },
  getters: {
    isMenuLoading: (state: any) => {
      return state.loading;
    },
    isMenuLoaded: (state: any) => {
      return state.loaded;
    },
  },
});

function parseMenu(menu) {
  return menu.map((menuItem, index) => {
    const menuData = menuItem.data;
    const slug = menuData.label.toLowerCase();
    const route = `/${slug}`;
    return {
      id: index,
      slug,
      route,
      ...menuItem,
      ...menuData,
    };
  });
}
