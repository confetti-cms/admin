export const mainMenu = [
  {
    type: "menu_left",
    component_key: "/section/pages",
    data: {
      target: "self",
      label: "Pages",
      url: "/section/pages",
      icon: "fa-solid fa-file-pen",
    },
  },
  {
    type: "menu_left",
    component_key: "/section/banner",
    data: {
      target: "self",
      label: "Banner",
      url: "/section/banner",
      icon: "fa-solid fa-file-pen",
      children: [
        {
          label: "first item",
          url: "/section/footer",
          icon: "fa-solid fa-file-pen",
        },
        {
          label: "second item",
          url: "/section/footer",
          icon: "fa-solid fa-file-pen",
        },
      ],
    },
  },
  {
    type: "menu_left",
    component_key: "/section/footer",
    data: {
      target: "self",
      label: "Footer",
      url: "/section/footer",
      icon: "fa-solid fa-file-pen",
    },
  },
];

export const mainMenuOld = [
  {
    type: "menu_left",
    data: {
      id: 1,
      target: "self",
      label: "Pages",
      icon: "fa-solid fa-file-pen",
      url: "/section/page",
    },
  },
  {
    type: "menu_left",
    data: {
      id: 2,
      target: "self",
      label: "Banner",
      icon: "fa-solid fa-file-pen",
      url: "/section/banner",
    },
  },
  {
    type: "menu_left",
    data: {
      id: 3,
      target: "self",
      label: "Footer",
      icon: "fa-solid fa-file-pen",
      url: "/section/footer",
    },
  },
];
