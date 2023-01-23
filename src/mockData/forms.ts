export const footerMenu = [
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
