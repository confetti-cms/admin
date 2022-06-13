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


function getElement(component) {
  if (component.type === 'section') {
    return "fieldset";
  }

  return null;
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

function mapComponentsToSchema(components) {

  let schema = [];
  components.forEach((component) => {

    let schemaItem = {
      ...(component.type === 'section') && {$el: getElement(component)},
      ...(component.type !== 'section') && {$formkit: getFormKitType(component)},
      label: component.label,
      name: component.key,
      children: [
        component.label,
        ...mapComponentsToSchema(find(allComponents, component.key))
      ],
    };

    schema.push(schemaItem)
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin: auto;
  display: flex;
  justify-content: center;
}

.side-by-side {
  display: flex;
  align-items: flex-start;
}

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
</style>
