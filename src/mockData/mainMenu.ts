export const mainMenu = [
  {
    id: 1,
    route: "/",
    label: "Dashboard",
    icon: "fa-solid fa-house",
    module: "dashboard",
  },
  {
    id: 2,
    route: "/pages",
    label: "Paginas",
    icon: "fa-solid fa-file-lines",
    module: "pages",
    children: [
      {
        id: 13,
        route: "/page",
        label: "page 1",
        icon: "fa-solid fa-file-pen",
        module: "berichten",
      },
      {
        id: 132,
        route: "/page",
        label: "nog een lange pagina naam",
        icon: "fa-solid fa-file-pen",
        module: "berichten",
      },
    ],
  },
  {
    id: 3,
    route: "/berichten",
    label: "Berichten",
    icon: "fa-solid fa-file-pen",
    module: "berichten",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "Footer",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
  {
    id: 4,
    route: "/footer",
    label: "long list",
    icon: "fa-solid fa-file-pen",
    module: "footer",
  },
];

export const mainMenu2 = [
  {
    parent_key: "",
    key: "page",
    type: "section",
    decorations: [
      {
        type: "menu_left",
        method: "direct",
        label: "Pages",
        url: "https://admin.confetti-cms.com/page",
      },
      {
        type: "label",
        value: "Pages",
      },
      {
        type: "primary_action",
        method: "redirect",
        label: "Add page",
        url: "https://admin.confetti-cms.com/page/{self_generated_uuid}",
      },
      {
        type: "bulk_action",
        method: "delete",
        label: "Delete selected pages",
        url: "https://api.confetti-cms.com/page/[uuid]",
      },
      {
        type: "list",
        columns: [
          {
            key: "page.active",
            label: "Active",
          },
          {
            key: "page.title",
            label: "Title",
          },
          {
            key: "page.slug",
            label: "Slug",
          },
        ],
      },
      {
        type: "row_actions",
        actions: [
          {
            type: "remove",
            method: "delete",
            url: "https://api.confetti-cms.com/page/{page.uuid}",
            label: "Remove page",
            icon: "https://assets.confetti-cms.com/icons/remove.svg",
          },
          {
            type: "edit",
            method: "direct",
            url: "https://admin.confetti-cms.com/page/{page.uuid}",
            label: "Edit page",
            icon: "https://assets.confetti-cms.com/icons/edit.svg",
          },
        ],
      },
    ],
    source: {
      directory: "",
      file: "index.blade.php",
      line: 2,
      from: 0,
      to: 0,
    },
  },
  {
    parent_key: "",
    key: "menu",
    type: "section",
    decorations: [
      {
        type: "label",
        value: "Menu",
      },
      {
        type: "menu_left",
        method: "direct",
        label: "Menu",
        url: "https://admin.confetti-cms.com/menu",
        icon: "https://assets.confetti-cms.com/icons/hamburger.svg",
      },
    ],
    source: {
      directory: "menu",
      file: "menu.blade.php",
      line: 2,
      from: 0,
      to: 0,
    },
  },
  {
    parent_key: "",
    key: "footer",
    type: "section",
    decorations: [
      {
        type: "label",
        value: "Footer",
      },
      {
        type: "menu_left",
        method: "direct",
        label: "Footer",
        url: "https://admin.confetti-cms.com/footer",
        icon: "https://assets.confetti-cms.com/icons/horizontal_lines.svg",
      },
    ],
    source: {
      directory: "footer",
      file: "footer.blade.php",
      line: 2,
      from: 0,
      to: 0,
    },
  },
];

export const mainMenu3 = [
  {
    type: "menu_left",
    data: {
      id: 1,
      target: "self",
      label: "Pages",
      icon: "fa-solid fa-file-pen",
      url: "https://admin.confetti-cms.com/page",
    },
  },
  {
    type: "menu_left",
    data: {
      id: 2,
      target: "self",
      label: "Banner",
      icon: "fa-solid fa-file-pen",
      url: "https://admin.confetti-cms.com/banner",
    },
  },
  {
    type: "menu_left",
    data: {
      id: 3,
      target: "self",
      label: "Footer",
      icon: "fa-solid fa-file-pen",
      url: "https://admin.confetti-cms.com/footer",
    },
  },
];
