export const pageService = [
  {
    parent_key: "",
    key: "pages",
    type: "section",
    decorations: [
      {
        type: "menu_left",
        data: {
          method: "direct",
          label: "Pages",
          url: "https://admin.confetti-cms.com/pages",
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
    parent_key: "pages",
    key: "pages.button_new",
    type: "button",
    decorations: [
      {
        type: "label",
        data: {
          value: "Add pages",
        },
      },
      {
        type: "style",
        data: {
          value: "primary",
        },
      },
      {
        type: "url",
        data: {
          target: "self",
          value:
            "https://admin.confetti-cms.com/pages/page/123e4567-e89b-12d3-a456-426614174000",
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
    parent_key: "pages",
    key: "pages.list",
    type: "list",
    decorations: [
      {
        type: "columns",
        data: {
          columns: [
            {
              label: "Active",
              key: "pages.page.active",
            },
            {
              label: "Title",
              key: "pages.page.title",
            },
            {
              label: "Slug",
              key: "pages.page.slug",
            },
          ],
          actions: [
            {
              type: "delete",
              target: "remove",
              url: "https://admin.confetti-cms.com/pages/page/123e4567-e89b-12d3-a456-426614174000",
            },
            {
              type: "edit",
              target: "self",
              url: "https://admin.confetti-cms.com/pages/page/123e4567-e89b-12d3-a456-426614174000",
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
    parent_key: "pages",
    key: "pages.pagination",
    type: "pagination",
    decorations: [
      {
        type: "page",
        data: [
          {
            index: 1,
            label: "1",
            url: "https://admin.confetti-cms.com/pages?page=1",
          },
          {
            index: 2,
            label: "2",
            url: "https://admin.confetti-cms.com/pages?page=2",
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
];
export const bannerService = [
  {
    parent_key: "",
    key: "banner",
    type: "section",
    decorations: [
      {
        type: "menu_left",
        data: {
          method: "direct",
          label: "banner",
          url: "https://admin.confetti-cms.com/banner",
        },
      },
      {
        type: "label",
        data: {
          value: "banner",
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
    parent_key: "banner",
    key: "banner.button_new",
    type: "button",
    decorations: [
      {
        type: "label",
        data: {
          value: "Add banner",
        },
      },
      {
        type: "style",
        data: {
          value: "primary",
        },
      },
      {
        type: "url",
        data: {
          target: "self",
          value:
            "https://admin.confetti-cms.com/pages/page/123e4567-e89b-12d3-a456-426614174000",
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
    parent_key: "banner",
    key: "banner.list",
    type: "list",
    decorations: [
      {
        type: "columns",
        data: {
          columns: [
            {
              label: "Active",
              key: "banner.page.active",
            },
            {
              label: "Title",
              key: "banner.page.title",
            },
            {
              label: "Slug",
              key: "banner.page.slug",
            },
          ],
          actions: [
            {
              type: "delete",
              target: "remove",
              url: "https://admin.confetti-cms.com/banner/page/123e4567-e89b-12d3-a456-426614174000",
            },
            {
              type: "edit",
              target: "self",
              url: "https://admin.confetti-cms.com/banner/page/123e4567-e89b-12d3-a456-426614174000",
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
    parent_key: "banner",
    key: "banner.pagination",
    type: "pagination",
    decorations: [
      {
        type: "page",
        data: [
          {
            index: 1,
            label: "1",
            url: "https://admin.confetti-cms.com/banner?page=1",
          },
          {
            index: 2,
            label: "2",
            url: "https://admin.confetti-cms.com/banner?page=2",
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
];
export const footerService = [
  {
    parent_key: "",
    key: "footer",
    type: "section",
    decorations: [
      {
        type: "menu_left",
        data: {
          method: "direct",
          label: "footer",
          url: "https://admin.confetti-cms.com/pages",
        },
      },
      {
        type: "label",
        data: {
          value: "Footer",
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
    parent_key: "footer",
    key: "footer.tabs",
    type: "tabs",
    decorations: [
      {
        type: "label",
        data: {
          value: "Add pages",
        },
      },
      {
        type: "options",
        data: {
          value: ["kolom links", "kolom midden", "kolom rechts"],
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
];
