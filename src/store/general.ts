import { defineStore } from "pinia";
import { mainMenu } from "../mockData";
import { useMenuStore } from "./menu";
import { usePagesStore } from "./pages";

export const useGeneralStore = defineStore("general", {
  state: () => {
    return {
      appLoading: false,
      appLoaded: false,
      activeModal: null,
    };
  },
  actions: {
    async loadApp() {
      this.appLoading = true;
      const menuStore = useMenuStore();
      const pagesStore = usePagesStore();
      await menuStore.getMenu();
      this.appLoaded = true;
      this.appLoading = false;
    },
    showModal(payload) {
      this.activeModal = payload;
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
