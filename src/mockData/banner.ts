export const bannerStructureData = [
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
    key: "/section/banner/banner~dsdsds",
    type: "list",
    decorations: [
      {
        type: "columns",
        data: {
          columns: [
            {
              label: "Title",
              key: "title",
            },
            {
              label: "Slug",
              key: "slug",
            },
            {
              label: "Active",
              key: "status",
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

export const bannerData = [
  {
    id: "/section/banner/banner~665627a8-10bd-4fce-be1c-13dc2dc671fd",
    component_key: "/section/banner/banner~",
    data: {
      title: "Banner pagina 1",
      slug: "a-long-title-that-serves-as-slug",
      status: "published",
    },
  },
  {
    id: "/section/banner/banner~665627a8-asds-fdsa-fewe-asdfdsfjhwef",
    component_key: "/section/banner/banner~",
    data: {
      title: "Banner pagina 2",
      slug: "contact",
      status: "published",
    },
  },
];

export const mockBanner = [
  {
    parent_key: "",
    key: "banner~665627a8-10bd-4fce-be1c-13dc2dc671fd",
    type: "text",
    decorations: [
      {
        type: "label",
        data: {
          value: "BANNNER hier",
        },
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 0,
      from: 0,
      to: 0,
    },
  },
  {
    parent_key: "banner~665627a8-10bd-4fce-be1c-13dc2dc671fd",
    key: "banner~665627a8-10bd-4fce-be1c-13dc2dc671fd123",
    type: "text",
    decorations: [
      {
        type: "label",
        data: {
          value: "Title",
        },
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 5,
      from: 9,
      to: 34,
    },
  },
];
