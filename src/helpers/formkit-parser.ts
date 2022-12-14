const decorationValueKeys = {
  options: "options",
  prefix: "image_url",
};

const decorationModifiers = {
  options: (value) => {
    return value.map((option) => {
      return {
        label: option.key,
        value: option.value,
      };
    });
  },
  prefix: (value) => {
    return { children: "$slots.default" };
  },
  repeater: (value) => {
    return { children: "$slots.default" };
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

// end of decorator helpers

const formkitNodeAliases = {
  section: "group",
  image: "file",
};

const formkitNodeTypes = {
  $formkit: ["text", "select", "group", "repeater", "url", "file"],
  $cmp: "[image_url]",
  $el: ["text", "select"],
};

function registerFormKitType(nodeType, name) {
  formkitNodeTypes[nodeType] = [...formkitNodeTypes[nodeType], name];
}

function getFormKitType(component) {
  const currentType = formkitNodeAliases[component.type] || component.type;
  const nodeType = Object.keys(formkitNodeTypes).find((key) => {
    return formkitNodeTypes[key].indexOf(currentType) > -1;
  });
  return { node: nodeType, type: currentType };
}

const formKitModifiers = {
  repeater: (node, data) => {
    const children = data.filter((entry) => {
      return entry.parent_key === node.key;
    });
    const converted = parseFormKitSchema(children);
    return {
      children: converted,
    };
  },
};

export function parseFormKitSchema(data) {
  return data.map((component) => {
    const { node, type } = getFormKitType(component);
    let props = getDecorationOptions(component.decorations);
    if (formKitModifiers[type]) {
      props = { ...props, ...formKitModifiers[type](component, data) };
    }

    return {
      [node]: type,
      ...props,
    };
    return component;
  });
}
