<script lang="ts" setup>
import CfiTable from "../ui/cfi-table.vue";
import CfiButton from "../ui/cfi-button.vue";
import { ref } from "vue";
import { useGeneralStore } from "../../store/general";

defineProps({
  structure: {
    type: Object,
    default: {},
  },
});
const generalStore = useGeneralStore();
const selectRows = ref(null);

const edit = (rowId) => {
  console.log("edit", rowId);
};

const deleteRow = (rowId) => {
  generalStore.showModal({
    title: "Weet je het zeker",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales eleifend leo et rhoncus. Quisque elit justo, consectetur at semper quis, aliquam eu sem. Donec imperdiet lacus non risus finibus, id maximus mi feugiat. Praesent et mi semper, tristique nulla non, ornare risus. Donec ullamcorper sollicitudin enim. Donec euismod in magna ut accumsan. Integer gravida quis turpis id lacinia. Mauris vitae augue lacinia, dictum nibh eget, venenatis nibh.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ligula velit. Ut vehicula pellentesque quam, in porta justo lacinia tempus. Ut convallis metus vel elit pharetra, id euismod lacus egestas. Nunc porttitor accumsan lorem, eget vehicula est efficitur nec. Quisque mollis lobortis porta. Nullam bibendum leo ante, ut blandit eros tincidunt ut. Pellentesque feugiat eget est posuere placerat. Morbi consectetur scelerisque finibus. In sit amet neque nec risus pulvinar pellentesque non eget ante. Fusce feugiat, elit nec interdum sodales, justo ipsum ultrices nisl, eu tincidunt arcu metus sit amet massa. Sed enim ligula, suscipit eget magna quis, tempor semper arcu. Ut lacinia magna et neque rutrum, sit amet blandit ipsum elementum.`,
    onClose: () => {
      generalStore.hideModal();
    },
    onCancel: () => {
      console.log("cancel");
      generalStore.hideModal();
    },
    onConfirm: () => {
      console.log("confirm");
      generalStore.hideModal();
    },
  });
};
</script>

<template>
  <cfi-table
    :headers="structure.props.headers"
    :actions="structure.props.actions"
    :data="structure.data"
    multi-select
    @selectRow="selectRows = $event"
  >
    <template #title="{ row }">
      <router-link
        :to="row.id"
        class="rounded-md inline-block hover:text-gray-400"
      >
        {{ row.data.title }}
      </router-link>
    </template>

    <template #collapedContent> acties </template>

    <template #actions="{ row }">
      <cfi-button @click="deleteRow(row.id)">Remove</cfi-button>
      <cfi-button @click="edit(row.id)">Edit</cfi-button>
    </template>
  </cfi-table>
</template>
