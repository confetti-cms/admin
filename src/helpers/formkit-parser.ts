import { FormKitSchema } from "@formkit/vue";

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
  section: "form",
  image: "file",
};

const formkitNodeTypes = {
  $formkit: ["text", "select", "form", "group", "repeater", "url", "file", 'hippieInput'],
  $cmp: "card",
  $el: ["text", "select", 'h1'],
};

function registerFormKitType(nodeType, name) {
  formkitNodeTypes[nodeType] = [...formkitNodeTypes[nodeType], name];
}

registerFormKitType('$formkit', 'hippieInput');

function getFormKitType(component) {
  const currentType = formkitNodeAliases[component.type] || component.type;
  const nodeType = Object.keys(formkitNodeTypes).find((key) => {
    return formkitNodeTypes[key].indexOf(currentType) > -1;
  });
  return { node: nodeType, type: currentType };
}

function generateUuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const nodeModifiers = {
  group: (_, schema) => {
    return {
      $el: "section",
      children: [
        {
          $el: "hr",
        },
        schema,
      ],
    };
  },
};

function parseToFormKitSchema(component) {
  const { node, type } = getFormKitType(component);
  let props = getDecorationOptions(component.decorations);
  let schema = {
    [node]: type,
    id: generateUuid(),
    ...props,
  };

  if (component.children) {
    schema["children"] = component.children;
  }

  if (nodeModifiers[type]) {
    schema = nodeModifiers[type](component, schema);
    console.log("schema", schema);
  }

  return schema;
}

export function parseComponentsToFormKitSchema(data) {
  return data.map(parseToFormKitSchema);
}

export function parseFormKitGroepSchema(data) {
  let parent = data.find((e) => !e["parent_key"]);

  function getChildren(parent) {
    const children = data.filter((entry) => {
      return entry.parent_key === parent.key;
    });
    if (children.length > 0) {
      children.forEach((child) => {
        getChildren(child);
      });
      const converted = parseComponentsToFormKitSchema(children);
      parent["children"] = converted;
    }
    return parent;
  }
  getChildren(parent);
  const schema = parseToFormKitSchema(parent);
  return [schema];
}
