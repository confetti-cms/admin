<script setup lang="ts">
import cfiTable from "../../components/cfi-table.vue";
import cfiCard from "../../components/cfi-card.vue";
import pageTemplate from "../../components/structure/page-template.vue";
import { usePagesStore } from "../../store/pages";
import { storeToRefs } from "pinia";
const { pages, isPagesLoading } = storeToRefs(usePagesStore());
import { useRoute, onBeforeRouteLeave } from "vue-router";
const route = useRoute();

const service = route.params.service;
console.log('service', service);

</script>

<template>
  <pageTemplate title="Pagina's">
    {{service}}
  </pageTemplate>
</template>
