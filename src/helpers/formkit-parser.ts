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
  // prefix: (value) => {
  //   return { children: "$slots.default" };
  // },
  repeater: (value) => {
    return { children: "$slots.default" };
  },
  event: (value) => {
    console.log("valueddd", value);

    const axios = {
      post: () => new Promise((r) => setTimeout(r, 2000)),
    };

    async function login(credentials) {
      console.log("credentials", credentials);

      const res = await axios.post(credentials);
      // do some login things now
      alert("Logged in!");
    }

    return {
      onSubmit: (test) => login(test),
    };
  },
};

function getDecorationValueKey(type) {
  return decorationValueKeys[type] || "value";
}

function parseDecorator(decoration) {
  console.log("decoration", decoration);

  const decoratorType = decoration.type;
  const valueKey = getDecorationValueKey(decoratorType);

  const valueType = typeof decoration.data[valueKey];
  console.log("decoration.data", decoration.data);

  // let value =
  //   valueType === "boolean" || valueType === "number"
  //     ? decoration.data[valueKey]
  //     : decoration.data[valueKey] || null;
  console.log("valueKey", valueKey);

  // console.log("decoration.data[valueKey]", decoration.data);
  let value = isValidValue(decoration.data[valueKey])
    ? decoration.data[valueKey]
    : null;

  console.log("jaaaaaa", value);

  if (decorationModifiers[decoratorType]) {
    value = decorationModifiers[decoratorType](value);
  }
  return value;
}

function getDecorationOptions(decorations) {
  return decorations.reduce((list, decoration) => {
    const decorationKey = decoration.type;
    const value = parseDecorator(decoration);
    console.log("finalevalue", value);

    if (decoration.spread) {
      list = { ...list, ...value };
    } else if (isValidValue(value)) {
      list = { ...list, [decorationKey]: value };
    }
    return list;
  }, {});
}

function isValidValue(value) {
  return value !== null && value !== undefined;
}

// end of decorator helpers

const formkitNodeAliases = {
  section: "form",
  image: "file",
};

const formkitNodeTypes = {
  $formkit: [
    "text",
    "select",
    "form",
    "group",
    "repeater",
    "url",
    "file",
    "hippieInput",
  ],
  $cmp: "card",
  $el: ["text", "select", "h1"],
};

function registerFormKitType(nodeType, name) {
  formkitNodeTypes[nodeType] = [...formkitNodeTypes[nodeType], name];
}

registerFormKitType("$formkit", "hippieInput");

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
  console.log("component", component);

  const { node, type } = getFormKitType(component);
  let props = getDecorationOptions(component.decorations);
  console.log("props", props);
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
  }

  return schema;
}

export function parseComponentsToFormKitSchema(data) {
  console.log("data!!!!", data);

  return data.map(parseToFormKitSchema);
}

export function parseFormKitGroepSchema(data) {
  console.log("data2parse", JSON.parse(JSON.stringify(data)));

  // let parent = data.find((e) => !e["parent_key"]);
  let parent = data.find((e) => e["parent_key"] === "/section");
  if (!parent) {
    return [];
  }
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
  console.log("schema", schema);
  if (!schema["name"]) {
    schema["name"] = data.key;
  }
  return [schema];
}
