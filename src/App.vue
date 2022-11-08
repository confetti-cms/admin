<template>
  <div class="admin-panel">
    <div class="admin-panel__sidebar admin-sidebar">
      <div class="admin-sidebar__logo">
        <img src="/placeholder-logo.png" alt="" />
      </div>
      <nav class="admin-sidebar__navigation">
        <ul>
          <li><a href="#" class="is-active">Home</a></li>
          <li><a href="#">Pagina's</a></li>
          <li><a href="#">Berichten</a></li>
          <li><a href="#">Projecten</a></li>
          <li><a href="#">Weergave</a></li>
          <li><a href="#">Instellingen</a></li>
        </ul>
      </nav>
      <div class="admin-sidebar__hamburger-menu" @click="">
        <span></span>
      </div>
      <div class="admin-sidebar__mobile-navigation"></div>
    </div>
    <div class="admin-panel__content">
      <FormKit type="form" v-model="formData" v-if="schema">
        <FormKitSchema :schema="schema" :data="formData" />
      </FormKit>
    </div>
  </div>
  <div class="container">
    <!-- <div class="sample-input">
      <FormKit type="form" v-model="formData" v-if="schema">
        <FormKitSchema :schema="schema" :data="formData" />
      </FormKit>

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import allComponents from "../storage/components/views/home.blade.php.json";

function mapComponentsToSchema(components, groupId) {
  let keySuffix = "";
  if (groupId !== null) {
    keySuffix = keySuffix + "-" + groupId;
  }

  let schema = [];
  components.forEach((component) => {
    let schemaItem;

    if (component.type === "multiple") {
      schema.push({
        $el: "h3",
        children: component.label,
      });
      for (let i = 0; i < 3; i++) {
        {
          let oneOfMultipleGroupId = uuid();
          let belongsTo = {
            $formkit: "hidden",
            name: component.key + ".belongs_to-" + oneOfMultipleGroupId,
            value: groupId,
          };
          schemaItem = {
            $el: "fieldset",
            children: [
              belongsTo,
              ...mapComponentsToSchema(
                find(allComponents, component.key),
                oneOfMultipleGroupId
              ),
            ],
          };
          schema.push(schemaItem);
        }
      }
    } else {
      let label = component.label !== "" ? component.label : component.key;
      let isEl = isElement(component);
      let hasChildren = component.type != "select";

      if (component.type == "select" && component.default == "") {
        component.default = component.options[0];
      }

      if (isEl) {
        if (component.type == "section") {
          schema.push({
            $el: "hr",
            attrs: {
              style: {
                "margin-top": "30px",
                border: "1px solid gray",
              },
            },
          });
        }
        schema.push({
          $el: getElement(component),
          children: [component.label],
        });
        schema.push({
          $el: "div",
          children: mapComponentsToSchema(
            find(allComponents, component.key),
            groupId
          ),
        });
      } else {
        schema.push({
          $formkit: getFormKitType(component),
          label: label,
          value: component.default,
          name: component.key + keySuffix,
          placeholder:
            component.placeholder !== "" ? component.placeholder : label,
          options: component.options,
          help: component.help,
          validation: getValidation(component),
          ...(hasChildren && {
            children: mapComponentsToSchema(
              find(allComponents, component.key),
              groupId
            ),
          }),
          validationVisibility: "live",
        });
      }
    }
  });

  return schema;
}

function find(collection, key) {
  return collection.filter(function (elem) {
    if (elem.parent_key === key) {
      return elem;
    }
  });
}

function isElement(component) {
  switch (component.type) {
    case "section":
      return true;
    case "localFile":
      return true;
    default:
      return false;
  }
}

function getElement(component) {
  switch (component.type) {
    case "localFile":
      return "h1";
    case "section":
      return "h2";
    default:
      return false;
  }
}

function getValidation(component) {
  let validations = [];

  if (component.type == "text" || component.type == "textarea") {
    if (component.min_apply) {
      validations.push("minlength:" + component.min);
    }
    if (component.max_apply) {
      validations.push("maxlength:" + component.max);
    }
  } else {
    if (component.min_apply) {
      validations.push("min:" + component.min);
    }
    if (component.max_apply) {
      validations.push("max:" + component.max);
    }
  }
  if (component.required) {
    validations.push("required");
  }

  return validations.join("|");
}

function getFormKitType(component) {
  switch (component.type) {
    case "checkbox":
      return "checkbox";
    case "color":
      return "color";
    case "date":
      return "date";
    case "dateTime":
      return "datetime-local";
    case "email":
      return "email";
    case "image":
      return "file";
    case "month":
      return "month";
    case "number":
      return "number";
    case "radio":
      return "radio";
    case "range":
      return "range";
    case "select":
      return "select";
    case "telephone":
      return "tel";
    case "text":
      return "text";
    case "textarea":
      return "textarea";
    case "time":
      return "time";
    case "url":
      return "url";
    case "localFile":
      return "h1";
    default:
      console.warn("type: " + component.type);
      return "unknown";
  }
}

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default {
  setup() {
    const schema = ref(null);

    let rootComponents = find(allComponents, "");

    schema.value = mapComponentsToSchema(rootComponents, uuid());

    const recommendation = ref("10");
    const formData = ref({});

    return {
      recommendation,
      schema,
      formData,
    };
  },
};
</script>

<style>
.admin-panel {
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 20px;
}
.admin-panel__sidebar {
  background: #f1f1f1;
  padding: 20px;
  position: sticky;
  top: 0;
  height: 100vh;
}
.admin-panel__content {
  background: #f1f1f1;
  padding: 20px;
}

.admin-sidebar__hamburger-menu {
  display: none;
  width: 28px;
  height: 20px;
  position: absolute;
  right: 20px;
}

.admin-sidebar__hamburger-menu:before,
.admin-sidebar__hamburger-menu:after,
.admin-sidebar__hamburger-menu span {
  display: block;
  content: "";
  height: 2px;
  background: white;
  width: 100%;
  position: absolute;
  z-index: 12;
}

.admin-sidebar__hamburger-menu:after {
  bottom: 0;
}

.admin-sidebar__hamburger-menu span {
  top: 50%;
  transform: translateY(-50%);
}

.admin-sidebar__mobile-navigation {
  width: 90%;
  position: fixed;
  right: 0;
  right: -100%;
  height: 100vh;
  top: 0;
  z-index: 10;
  background: white;
  transition: right 0.4s ease;
}

.admin-sidebar__navigation {
  margin-top: 20px;
}

.admin-sidebar__navigation ul {
  padding: 0;
  margin: 0;
}
.admin-sidebar__navigation ul li {
  list-style-type: none;
}
.admin-sidebar__navigation ul li + li {
  margin-top: 10px;
}
.admin-sidebar__navigation ul li a {
  text-decoration: none;
  padding: 8px 10px;
  transition: background 0.4s ease;
  border-radius: 6px;
  display: inline-block;
  color: #1d1d1d;
  font-weight: 500;
}
.admin-sidebar__navigation ul li a:hover,
.admin-sidebar__navigation ul li a.is-active {
  background: #ccc;
}

@media only screen and (max-width: 600px) {
  .admin-panel {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
    gap: 0;
  }
  .admin-panel__sidebar {
    background: #333;
    position: sticky;
    top: 0;
    z-index: 10;
    padding-top: 0;
    padding-bottom: 0;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .admin-sidebar__logo {
    height: 50px;
  }
  .admin-sidebar__logo img {
    max-height: 100%;
  }
  .admin-sidebar__navigation {
    display: none;
  }
  .admin-sidebar__hamburger-menu {
    display: block;
  }
  .admin-panel__content {
    padding-top: 0;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
}
/*noinspection CssUnusedSymbol*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  margin: auto;
  width: 80%;
  justify-content: center;
}

/*noinspection CssUnusedSymbol*/
.side-by-side {
  display: flex;
  align-items: flex-start;
}

/*noinspection CssUnusedSymbol*/
pre.range-output {
  background: #eee;
  border-radius: 0.5em;
  text-align: center;
  margin-left: 1em;
  margin-top: 1.5em;
  font-weight: bold;
  padding: 0.5em;
  line-height: 1;
  width: 1.5em;
}

pre.form-data {
  box-sizing: border-box;
  background: #eee;
  border: 1px solid #ccc;
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;
}

/*noinspection CssUnusedSymbol*/
.formkit-actions {
  padding-top: 20px;
}

fieldset {
  display: inline-table;
  border-radius: 4px;
  border-width: 1px;
}
</style>
