export const pages = [
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
];
