<script setup lang="ts">
import cfiTable from "../../components/cfi-table.vue";
import cfiCard from "../../components/cfi-card.vue";
import pageTemplate from "../../components/structure/page-template.vue";
import { usePagesStore } from "../../store/pages";
import { storeToRefs } from "pinia";
import { pageHeaders } from "./data/page-headers";
const { pages, isPagesLoading } = storeToRefs(usePagesStore());
</script>

<template>
  <pageTemplate title="Pagina's">
    hieeeer: {{ isPagesLoading }}
    <cfi-card noSpace>
      <cfi-table :headers="pageHeaders" :data="pages">
        <template #title="{ value: { id, title } }">
          <router-link
            :to="`pages/edit/${id}`"
            class="p-2 rounded-md inline-block hover:text-gray-400"
          >
            {{ title }}
          </router-link>
        </template>
      </cfi-table>
    </cfi-card>
  </pageTemplate>
</template>
