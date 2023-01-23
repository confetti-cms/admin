import { defineStore } from "pinia";
import { getPagesRequest } from "../mockData/requests";

export const usePagesStore = defineStore("pages", {
  state: () => {
    return {
      loading: false,
      loaded: false,
      pages: null,
    };
  },
  actions: {
    getPages() {
      this.loading = true;
      this.loaded = false;
      getPagesRequest().then((res: any) => {
        console.log("res", res);

        this.pages = res;
        this.loading = false;
        this.loaded = true;
      });
    },
  },
  getters: {
    isPagesLoading: (state: any) => {
      return state.loading;
    },
    isPagesLoaded: (state: any) => {
      return state.loaded;
    },
    getPageById: (state: any) => {
      return (id: number) => {
        if (!state.pages) {
          return state.pages;
        }
        return state.pages.find((p) => p.id === id);
      };
    },
  },
});
