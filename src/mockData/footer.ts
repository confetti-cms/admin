import { footerColumn1, footerColumn2, footerColumn3 } from "./forms/footer";

export const footerStructureData = [
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
    key: "/section/footer/footer~dsdsds",
    type: "tabs",
    decorations: [
      {
        type: "columns",
        data: {
          columns: [
            {
              label: "Colomn 1links",
              key: "column1",
            },
            {
              label: "Colomn midden",
              key: "column2",
            },
            {
              label: "Colomn rechterkant",
              key: "column3",
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
];

export const footerData = {
  id: "/section/footer/footer~665627a8-10bd-4fce-be1c-13dc2dc671fd",
  component_key: "/section/footer/footer~",
  data: {
    column1: footerColumn1,
    // column2: footerColumn2,
    // column3: footerColumn3,
  },
};
