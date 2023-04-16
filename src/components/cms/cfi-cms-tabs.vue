<script lang="ts" setup>
import CfiTabs from "../ui/cfi-tabs.vue";
import CfiForm from "../cfi-form.vue";

defineProps({
  structure: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <cfi-tabs :tabs="structure.props.headers" :data="structure.data">
    <template
      v-for="(slot, index) of structure.props.headers"
      :key="index"
      v-slot:[slot.key]="{ tab }"
    >
      <cfi-form :formData="tab"></cfi-form>
    </template>
  </cfi-tabs>
</template>
