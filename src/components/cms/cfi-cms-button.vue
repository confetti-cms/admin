<script setup lang="ts">
import cfiButton from "../user-interface/cfi-button.vue";
import { computed } from "vue";
const props = defineProps({
  label: {
    type: String,
  },
  color: {
    type: String,
    default: "white",
    validator: function (value: string) {
      return (
        [
          "white",
          "default",
          "primary",
          "error",
          "notification",
          "light",
        ].indexOf(value) !== -1
      );
    },
  },
  alignText: {
    type: String,
    default: "center",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: false,
  },
  fullWidth: {
    type: Boolean,
    required: false,
  },
  iconPosition: {
    type: String,
    default: "left",
    validator: function (value: string) {
      return ["left", "right"].indexOf(value) !== -1;
    },
  },
  anchor: {
    type: Boolean,
    default: false,
  },
  submit: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: "bg-gray-100",
  },
});
</script>

<template>
  <cfi-button>{{ label }}</cfi-button>
</template>
