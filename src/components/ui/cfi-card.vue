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
  <div
    class="flex flex-col w-full drop-shadow-lg bg-white rounded-2xl"
    :class="{ 'p-4': !noSpace }"
  >
    <div class="title" v-if="title">
      <slot name="title">
        <div>{{ title }}</div>
      </slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>
