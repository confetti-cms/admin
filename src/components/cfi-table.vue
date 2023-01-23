<script setup lang="ts">
import { ref } from "vue";

const prop = defineProps({
  headers: {
    type: Array,
  },
  data: {
    type: Array,
  },
});

const currentOpenRow = ref(null);
const openRow = (index) => {
  currentOpenRow.value = index;
  // currentOpenRow.value = currentOpenRow.value === index ? null : index;
};
</script>
<template>
  <div class="table text-slate-500 w-full">
    <div class="table__row border-gray-200 border-b table__head">
      <div
        class="table__row__inner"
        :style="{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }"
      >
        <div class="table__column px-4 py-2" v-for="header of headers">
          {{ header.name }}
        </div>
      </div>
    </div>
    <div
      v-auto-animate
      class="table__row border-b border-gray-200"
      v-for="(row, index) in data"
      :key="`table-row-${index}`"
      @click="openRow(index)"
    >
      <div
        class="table__row__inner"
        :style="{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }"
      >
        <div class="table__column px-4 py-2" v-for="header of headers">
          <slot :name="header.key.replace(' ', '-').toLowerCase()" :value="row">
            {{ row[header.key] }}
          </slot>
        </div>
      </div>
      <div
        v-if="currentOpenRow === index"
        class="table__row__collapsed-content px-4 py-2"
      >
        <div>
          <slot name="collapedContent" :value="row"></slot>
        </div>
      </div>
    </div>
  </div>

  <!-- <table
    class="items-center w-full mb-0 align-top border-gray-200 text-slate-500"
  >
    <tr>
      <td>
        <tr>
          <td
            class="px-5 py-4 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent"
            v-for="header in headers"
          >
            {{ header.name }}
          </td>
        </tr>
      </td>
    </tr>
    <tr v-for="(row, index) in data" class="border-b">
      <td>
        <tr @click="openRow = index">
          <td
            class="px-5 py-4 align-middle bg-transparent whitespace-nowrap shadow-transparent"
            v-for="header in headers"
          >
            <slot
              :name="header.key.replace(' ', '-').toLowerCase()"
              :value="row"
            >
              {{ row[header.key] }}
            </slot>
          </td>
        </tr>
        <tr v-if="openRow === index" useAutoAnimate>
          <td>hallooooo</td>
        </tr>
      </td>
    </tr>
  </table> -->
</template>

<style lang="scss">
.table {
  &__row {
    padding: 5px 0;
    &__inner {
      display: grid;
      gap: 16px;
    }
    &__collapsed-content {
      // padding: 5px;
    }
  }

  &__column {
    // padding: 5px;
  }
}
</style>
