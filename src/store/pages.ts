import { defineStore } from "pinia";
import { mockRequest } from "../api/helpers/mockRequest";

const getPages = mockRequest(
  [
    {
      id: 1,
      title: "Home pagina",
      date: new Date(),
      categories: "cat1, cat2",
      status: "gepubliceerd",
      formSchema: [
        {
          $el: "h1",
          children: "Register",
        },
        {
          $formkit: "text",
          name: "email",
          label: "Email",
          help: "This will be used for your account.",
          validation: "required|email",
        },
      ],
    },
    {
      id: 2,
      title: "Tekst pagina",
      date: new Date(),
      categories: "cat1, cat2",
      status: "gepubliceerd",
      formSchema: [
        {
          $el: "h1",
          children: "Register",
        },
        {
          $formkit: "text",
          name: "email",
          label: "Email",
          help: "This will be used for your account.",
          validation: "required|email",
        },
      ],
    },
    {
      id: 4,
      title: "Blog pagina",
      date: new Date(),
      categories: "cat1, cat2",
      status: "gepubliceerd",
      formSchema: [
        {
          $el: "h1",
          children: "Register",
        },
        {
          $formkit: "text",
          name: "email",
          label: "Email",
          help: "This will be used for your account.",
          validation: "required|email",
        },
      ],
    },
    {
      id: 3,
      title: "Contact pagina",
      date: new Date(),
      categories: "cat1, cat2",
      status: "gepubliceerd",
      formSchema: [
        {
          $el: "h1",
          children: "Register",
        },
        {
          $formkit: "text",
          name: "email",
          label: "Email",
          help: "This will be used for your account.",
          validation: "required|email",
        },
      ],
    },
  ],
  100
);

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
      getPages().then((res: any) => {
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
