import { parse } from "@vue/compiler-dom";

const decorationValueKeys = {
  options: "options",
  prefix: "image_url",
  primary_action: "label",
};

const decorationModifiers = {
  label: (value) => {
    return { label: value, route: `/${value.toLowerCase()}` };
  },
};

function getDecorationValueKey(type) {
  return decorationValueKeys[type] || "value";
}

function parseDecorator(decoration) {
  const decoratorType = decoration.type;
  const valueKey = getDecorationValueKey(decoratorType);

  let value = decoration[valueKey] || null;
  if (decorationModifiers[decoratorType]) {
    value = decorationModifiers[decoratorType](value);
  }
  return value;
}

function getDecorationOptions(decorations) {
  return decorations.reduce((list, decoration) => {
    const decorationKey = decoration.type;
    const value = parseDecorator(decoration);

    if (value) {
      list = { ...list, [decorationKey]: value };
    }
    return list;
  }, {});
}

export function parseMenu(menu) {
  console.log("menu", menu);
  const test = menu.map((menuItem) => {
    const parsedDecorations = getDecorationOptions(menuItem.decorations);
    console.log("parsedDecorations", parsedDecorations);
    return parsedDecorations;
  });
  console.log("test", test);

  return test;
}

const menu = [
  {
    name: "page",
    label: "Pages",
    route: "/pages",
  },
];
