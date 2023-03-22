<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps({
  headers: {
    type: Array,
    default: [],
  },
  actions: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
  },
  expandRow: {
    type: Boolean,
    default: false,
  },
});

const tableCcolumns = computed(() => {
  const columns = [...props.headers];
  if (props.actions.length) {
    columns.push({ label: "Acties", key: "actions" });
  }
  return columns;
});

const currentOpenRow = ref(null);
const openRow = (index) => {
  if (!props.expandRow) {
    return;
  }
  currentOpenRow.value = index;
  // currentOpenRow.value = currentOpenRow.value === index ? null : index;
};
</script>
<template>
  <div class="table text-slate-500 w-full">
    <div class="table__row border-gray-200 border-b table__head">
      <div
        class="table__row__inner"
        :style="{ gridTemplateColumns: `repeat(${tableCcolumns.length}, 1fr)` }"
      >
        <div class="table__column px-4 py-2" v-for="header of tableCcolumns">
          {{ header.label }}
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
        :style="{ gridTemplateColumns: `repeat(${tableCcolumns.length}, 1fr)` }"
      >
        <div class="table__column px-4 py-2" v-for="header of headers">
          <slot :name="header.key" :row="row">
            {{ row.data[header.key] }}
          </slot>
        </div>
        <div class="table__column px-4 py-2">
          <slot name="actions" :row="row"> acties123 </slot>
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
