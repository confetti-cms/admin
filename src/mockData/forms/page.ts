export const page1 = [
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
      //   {
      //     type: "value",
      //     data: {
      //       value: "hallow123",
      //     },
      //   },
      //   {
      //     type: "name",
      //     data: {
      //       value: "brood",
      //     },
      //   },
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
