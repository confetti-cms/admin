export const pagesData = [
  {
    id: "/section/pages/page~665627a8-10bd-4fce-be1c-13dc2dc671fd",
    component_id: "/section/pages/page~",
    data: {
      title: "Home page",
      slug: "a-long-title-that-serves-as-slug",
      status: "published",
    },
  },
  {
    id: "/section/pages/page~665627a8-asds-fdsa-fewe-asdfdsfjhwef",
    component_id: "/section/pages/page~",
    data: {
      title: "Contact page",
      slug: "contact",
      status: "published",
    },
  },
  {
    id: "/section/pages/page~1234567890",
    component_id: "/section/pages/page~",
    data: {
      title: "Oude formulier data structuur",
      slug: "old-form-page",
      status: "published",
    },
  },
];

export const pagesStructure = [
  {
    parent_key: "/section",
    key: "/section/pages",
    type: "section",
    decorations: [
      {
        type: "menu_left",
        component_key: "/section/pages",
        data: {
          method: "direct",
          label: "Pages",
          url: "/section/pages",
        },
      },
      {
        type: "label",
        data: {
          value: "Pages",
        },
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
    parent_key: "/section/pages",
    key: "/section/pages/add_page",
    type: "button",
    decorations: [
      {
        type: "label",
        component_key: "/section/pages/add_page",
        data: {
          value: "Add pages",
        },
      },
      {
        type: "url",
        data: {
          target: "self",
          value: "/section/pages/page~",
        },
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
    parent_key: "/section/pages",
    key: "/section/pages/page~",
    type: "list",
    decorations: [
      {
        type: "columns",
        component_key: "/section/pages/page~",
        data: {
          columns: [
            {
              label: "Title",
              key: "title",
            },
            {
              label: "Status",
              key: "status",
            },
            {
              label: "Slug",
              key: "slug",
            },
          ],
          actions: [
            {
              type: "delete",
              target: "remove",
              url: "/section/pages/page~",
            },
            {
              type: "edit",
              target: "self",
              url: "/section/pages/page~",
            },
          ],
        },
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
    parent_key: "/section/pages/page~",
    key: "/section/pages/page~/description",
    component_key: "/section/pages/page~/description",
    type: "text",
    decorations: [
      {
        type: "label",
        data: {
          value: "Description",
        },
      },
    ],
    source: {
      directory: "/views/templates",
      file: "home.blade.php",
      line: 1,
      from: 1,
      to: 34,
    },
  },
];

export const oldMockform = [
  {
    parent_key: "",
    key: "footer",
    type: "section",
    decorations: [
      {
        type: "label",
        value: "wat is jouw naam?",
      },
    ],
  },
  {
    parent_key: "footer",
    key: "footerGroup",
    type: "group",
    decorations: [],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 6,
      from: 11,
      to: 70,
    },
  },
  {
    parent_key: "footerGroup",
    key: "footer.socials",
    type: "repeater",
    decorations: [
      {
        type: "label",
        value: "Socials",
      },
      {
        type: "min",
        value: "2",
      },
      {
        type: "max",
        value: "7",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 6,
      from: 11,
      to: 70,
    },
  },
  {
    parent_key: "footer.socials",
    key: "footer.socials.url",
    type: "url",
    decorations: [
      {
        type: "label",
        value: "Url",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 7,
      from: 15,
      to: 55,
    },
  },
  {
    parent_key: "footer.socials",
    key: "footer.socials.icon",
    type: "image",
    decorations: [
      {
        type: "label",
        value: "Icon",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 8,
      from: 19,
      to: 65,
    },
  },
  {
    parent_key: "footerGroup",
    key: "footer.socials",
    type: "image",
    decorations: [
      {
        type: "label",
        value: "Icon",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 8,
      from: 19,
      to: 65,
    },
  },
  {
    parent_key: "footer",
    key: "headerGroup",
    type: "group",
    decorations: [],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 6,
      from: 11,
      to: 70,
    },
  },
  {
    parent_key: "headerGroup",
    key: "header",
    type: "image",
    decorations: [
      {
        type: "label",
        value: "Icon",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 8,
      from: 19,
      to: 65,
    },
  },
  {
    parent_key: "headerGroup",
    key: "header.image",
    type: "image",
    decorations: [
      {
        type: "label",
        value: "Icon",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 8,
      from: 19,
      to: 65,
    },
  },
];
