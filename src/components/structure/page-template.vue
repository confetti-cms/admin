<script setup lang="ts">
const prop = defineProps({
  title: {
    type: String,
  },
  noSpace: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="page-template">
    <div class="page-title text-2xl mb-4" v-if="title">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <slot></slot>
  </div>
</template>
