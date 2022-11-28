<script setup lang="ts">
const prop = defineProps({
  title: {
    type: String,
  },
  type: {
    type: String,
    default: "primary",
    validator: function (value: string) {
      return (
        [
          "primary",
          "default",
          "success",
          "error",
          "error-clear",
          "light",
          "dark",
          "clear",
        ].indexOf(value) !== -1
      );
    },
  },
  noSpace: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button class="cfi-button p-3 bg-gray-400 rounded-md :hover-bg-gray-500">
    <slot></slot>
  </button>
</template>

<style lang="scss"></style>
