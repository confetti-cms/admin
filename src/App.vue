<template>
  <div class="container">
    <div class="sample-input">
      <h1>Profile</h1>
      <FormKit type="form" v-model="formData" v-if="schema">
        <FormKitSchema :schema="schema" :data="formData"/>
      </FormKit>

      <h2>Modeled group values</h2>
      <pre class="form-data">{{ formData }}</pre>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import allComponents from '/Users/reindertvetter/dev/confetti-cms/render-blade/components.json'

function mapComponentsToSchema(components, iteration = null) {
  let keySuffix = '';
  if (iteration !== null) {
    keySuffix = keySuffix + '-' + iteration;
  }

  let schema = [];
  components.forEach((component) => {

    let schemaItem;

    if (component.type === 'multiple') {
      for (let i = 0; i < 2; i++) {
        {
          schemaItem = {
            $el: 'fieldset',
            children: mapComponentsToSchema(find(allComponents, component.key), i)
          }
          schema.push(schemaItem)
        }
      }
    } else {
      schemaItem = {
        ...(component.type === 'section') && {$el: getElement(component)},
        ...(component.type !== 'section') && {$formkit: getFormKitType(component)},
        label: component.label,
        name: component.key + keySuffix,
        placeholder: component.placeholder !== '' ? component.placeholder : component.label,
        help: component.help,
        validation: getValidation(component),
        children: [
          component.label,
          ...mapComponentsToSchema(find(allComponents, component.key))
        ],
      };

      schema.push(schemaItem)
    }
  })

  return schema;
}

function find(collection, key) {
  return collection.filter(function (elem) {
    if (elem.parent_key === key) {
      return elem;
    }
  })
}

function getElement(component) {
  if (component.type === 'section') {
    return "div";
  }

  return null;
}
function getValidation(component) {
  let validations = []
  if (component.min_apply) {
    validations.push('min:' + component.min);
  }
  if (component.max_apply) {
    validations.push('max:' + component.max);
  }
  if (component.required) {
    validations.push('required');
  }

  return validations.join('|');
}

function getFormKitType(component) {
  switch (component.type) {
    case 'text':
      return "text";
    case 'number':
      return "number";
    case 'image':
      return "file";
    default:
      console.warn('type: ' + component.type)
      return "text";
  }
}

export default {


  setup() {
    const schema = ref(null);

    let rootComponents = find(allComponents, "")

    schema.value = mapComponentsToSchema(rootComponents);

    console.log(JSON.parse(JSON.stringify(schema.value)))

    const recommendation = ref('10')
    const formData = ref({})

    return {
      recommendation,
      schema,
      formData
    }
  },

}
</script>


<style>
/*noinspection CssUnusedSymbol*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
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
.formkit-actions{
  padding-top: 20px;
}

fieldset {
  display: inline-table;
  border-radius: 4px;
  border-width: 1px;
}
</style>
