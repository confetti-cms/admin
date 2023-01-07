import { defineStore } from "pinia";
import { mockRequest } from "../api/helpers/mockRequest";

export const useMenuStore = defineStore("menu", {
  state: () => {
    return {
      loading: false,
      loaded: false,
      menu: [
        {
          id: 1,
          route: "/",
          label: "Dashboard",
          icon: "fa-solid fa-house",
        },
        {
          id: 2,
          route: "/pages",
          label: "Paginas",
          icon: "fa-solid fa-file-lines",
        },
        {
          id: 3,
          route: "/Berichten",
          label: "Berichten",
          icon: "fa-solid fa-file-pen",
        },
      ],
    };
  },
  actions: {
    getMenu() {
        console.log('ddd');
    },
  },
  getters: {
  },
});
