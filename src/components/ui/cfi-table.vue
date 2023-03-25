<script setup lang="ts">
import { ref, computed } from "vue";
import { debounce } from "../../helpers/debounce";

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
  multiSelect: {
    type: Boolean,
    default: false,
  },
  expandRow: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["selectRow"]);

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
const selectedRows = ref({});
const allRowsSelected = ref(false);

const update = (isChecked, row) => {
  if (isChecked) {
    selectedRows.value[row.id] = row;
  } else {
    const { [row.id]: id, ...rest } = selectedRows.value;
    selectedRows.value = rest;
  }
  const selectedRowsArray = Object.keys(selectedRows.value).map(
    (key) => selectedRows.value[key]
  );
  emit("selectRow", selectedRowsArray);
};

const selectAllRows = () => {
  allRowsSelected.value = !allRowsSelected.value;
  if (allRowsSelected.value) {
    selectedRows.value = props.data.reduce((list, item) => {
      return {
        ...list,
        [item.id]: item,
      };
    }, {});
  } else {
    selectedRows.value = {};
  }
};
</script>
<template>
  <div class="table text-slate-500 w-full">
    <div
      class="table__row border-gray-200 border-b table__head"
      :class="{ ['has-multi-select']: multiSelect }"
    >
      <FormKit
        v-if="multiSelect"
        type="checkbox"
        :model-value="false"
        @update:model-value="selectAllRows()"
      />
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
      :class="{ ['has-multi-select']: multiSelect }"
      v-for="(row, index) in data"
      :key="`table-row-${index}`"
      @click="openRow(index)"
    >
      <FormKit
        v-if="multiSelect"
        type="checkbox"
        :model-value="!!selectedRows[row.id]"
        @update:model-value="update($event, row)"
        :value="false"
      />
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
</template>

<style lang="scss">
.table {
  &__row {
    padding: 5px 0;

    &.has-multi-select {
      display: flex;
      align-items: center;
      --fk-margin-outer: 0;

      .table__row__inner {
        flex-grow: 1;
      }
    }

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
