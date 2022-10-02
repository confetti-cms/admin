<template>
  <div class="container">
    <div class="sample-input">
      <h1>Introduction</h1>
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
import allComponents from '/Users/reindertvetter/dev/confetti-cms/render-form/storage/components/views/index.blade.php.json'

function mapComponentsToSchema(components, groupId) {
  let keySuffix = '';
  if (groupId !== null) {
    keySuffix = keySuffix + '-' + groupId;
  }

  let schema = [];
  components.forEach((component) => {

    let schemaItem;

    if (component.type === 'multiple') {
      for (let i = 0; i < 2; i++) {
        {
          let oneOfMultipleGroupId = uuid();
          let belongsTo = {
            $formkit: 'hidden',
            name: component.key + '.belongs_to-' + oneOfMultipleGroupId,
            value: groupId
          };
          schemaItem = {
            $el: 'fieldset',
            children: [
              belongsTo,
              ...mapComponentsToSchema(find(allComponents, component.key), oneOfMultipleGroupId)
            ]
          }
          schema.push(schemaItem)
        }
      }
    } else {
      let label = component.label !== '' ? component.label : component.key;

      let isEl = isElement(component)
      schemaItem = {
        ...isEl && {$el: getElement(component)},
        ...!isEl && {$formkit: getFormKitType(component)},
        label: label,
        name: component.key + keySuffix,
        placeholder: component.placeholder !== '' ? component.placeholder : label,
        help: component.help,
        validation: getValidation(component),
        children: mapComponentsToSchema(find(allComponents, component.key), groupId),
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
  if (component.type === '') {
    return "div";
  }

  return null;
}

function isElement(component) {
  switch (component.type) {
    case 'section':
      return 'dev';
    case 'localFile':
      return 'h1';
    default:
      return false
  }
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
    case 'checkbox':
      return 'checkbox';
    case 'color':
      return 'color';
    case 'date':
      return 'date';
    case 'dateTime':
      return 'datetime-local';
    case 'email':
      return 'email';
    case 'image':
      return "file";
    case 'month':
      return 'month';
    case 'number':
      return "number";
    case 'radio':
      return 'radio';
    case 'range':
      return 'range';
    case 'select':
      return 'select';
    case 'telephone':
      return 'tel';
    case 'text':
      return "text";
    case 'textarea':
      return 'textarea';
    case 'time':
      return 'time';
    case 'url':
      return 'url';
    case 'localFile':
      return 'h1';
    default:
      console.warn('type: ' + component.type)
      return "unknown";
  }
}

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export default {
  setup() {
    const schema = ref(null);

    let rootComponents = find(allComponents, "")

    schema.value = mapComponentsToSchema(rootComponents, uuid());

    console.debug(JSON.parse(JSON.stringify(schema.value)))

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
.formkit-actions {
  padding-top: 20px;
}

fieldset {
  display: inline-table;
  border-radius: 4px;
  border-width: 1px;
}
</style>
