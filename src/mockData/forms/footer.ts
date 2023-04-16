const myfn = () => {
  console.log("dssdsddsdsdssd");
};

export const footerColumn1 = [
  {
    parent_key: "/section",
    key: "footer",
    type: "section",
    decorations: [
      {
        type: "label",
        data: {
          value: "wat is jouw naam?",
        },
      },
      {
        type: "submit-label",
        data: {
          value: "wat is jouw naam?",
        },
      },
      {
        type: "actions",
        data: {
          value: true,
        },
      },
      {
        type: "event",
        spread: true,
        data: {
          value: {
            name: "onSubmit",
            method: "async",
            endpoint: "some-endpoint",
          },
        },
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
        data: {
          value: "Socials",
        },
      },
      {
        type: "min",
        data: {
          value: "2",
        },
      },
      {
        type: "max",
        data: {
          value: "7",
        },
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
        data: {
          value: "Url",
        },
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
        data: {
          value: "Icon",
        },
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
        data: {
          value: "icon",
        },
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
        data: {
          value: "Icon",
        },
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
        data: {
          value: "hooooi",
        },
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
export const footerColumn2 = [
  {
    parent_key: "/section",
    key: "/section/page1",
    type: "text",
    decorations: [
      {
        type: "label",
        data: {
          value: "Title of the intro",
        },
      },
      {
        type: "placeholder",
        data: {
          value: "Design your website",
        },
      },
      {
        type: "default",
        data: {
          value: "Home",
        },
      },
      {
        type: "help",
        data: {
          value: "Type here the title intro title",
        },
      },
      {
        type: "required",
        data: {
          value: true,
        },
      },
      {
        type: "minlength",
        data: {
          value: 10,
        },
      },
      {
        type: "maxlength",
        data: {
          value: 100,
        },
      },
      {
        type: "prefix",
        data: {
          value: ":/object/icons/h1.svg:",
        },
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 43,
      from: 27,
      to: 34,
    },
  },
];
export const footerColumn3 = [
  {
    parent_key: "/section",
    key: "/section/page1",
    type: "text",
    decorations: [
      {
        type: "label",
        data: {
          value: "Een ander invulveld",
        },
      },
      {
        type: "placeholder",
        data: {
          value: "Design your website",
        },
      },
      {
        type: "default",
        data: {
          value: "Home",
        },
      },
      {
        type: "help",
        data: {
          value: "Type here the title intro title",
        },
      },
      {
        type: "required",
        data: {
          value: true,
        },
      },
      {
        type: "minlength",
        data: {
          value: 10,
        },
      },
      {
        type: "maxlength",
        data: {
          value: 100,
        },
      },
      {
        type: "prefix",
        data: {
          value: ":/object/icons/h1.svg:",
        },
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 43,
      from: 27,
      to: 34,
    },
  },
];
