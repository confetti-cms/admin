<script lang="ts" setup>
import { ref, computed } from "vue";

import {
  parseFormKitGroepSchema,
  parseComponentsToFormKitSchema,
} from "../helpers/formkit-parser";

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
});

const parsedFormSchema = computed(() => {
  if (props.formData) {
    console.log("props.formData", props.formData);
    console.log("eens zien", JSON.parse(JSON.stringify(props.formData)));

    return parseFormKitGroepSchema(JSON.parse(JSON.stringify(props.formData)));
  } else return null;
});
</script>

<template>
  <div v-if="parsedFormSchema">
    <FormKitSchema :schema="parsedFormSchema" />
  </div>
</template>
