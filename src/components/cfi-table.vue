<script setup lang="ts">
const prop = defineProps({
  headers: {
    type: Array,
  },
  data: {
    type: Array,
  },
});
</script>
<template>
  <table
    class="items-center w-full mb-0 align-top border-gray-200 text-slate-500"
  >
    <tr>
      <td
        class="px-5 py-4 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
        v-for="header in headers"
      >
        {{ header.name }}
      </td>
    </tr>
    <tr v-for="row in data">
      <td
        class="px-5 py-4 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
        v-for="header in headers"
      >
        <slot :name="header.key.replace(' ', '-').toLowerCase()" :value="row">
          {{ row[header.key] }}
        </slot>
      </td>
    </tr>
  </table>
</template>
