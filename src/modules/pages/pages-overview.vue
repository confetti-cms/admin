<script setup>
import cfiTable from "../../components/cfi-table.vue";
import cfiCard from "../../components/cfi-card.vue";
import pageTemplate from "../../components/structure/page-template.vue";
const pages = [
  {
    id: 1,
    value: "Home pagina",
    date: "test",
    categorieen: "cat1, cat2",
  },
  {
    id: 2,
    value: "Tekst pagina",
    date: "test",
    categorieen: "cat1, cat2",
  },
  {
    id: 3,
    value: "Contact pagina",
    date: "test",
    categorieen: "cat1, cat2",
  },
];
const headers = [
  {
    name: "Pagina",
  },
  {
    name: "Date",
  },
  {
    name: "Categorieën",
  },
  {
    name: "Status",
  },
];
</script>

<template>
  <pageTemplate title="Pagina's">
    <cfi-card> dsdssd </cfi-card>
    <cfi-card noSpace>
      <cfi-table :headers="headers" :data="pages"></cfi-table>
    </cfi-card>
    <li>
      <router-link
        v-for="{ id, title } of pages"
        :to="`pages/edit/${id}`"
        class="p-2 rounded-md inline-block hover:bg-gray-800 text-white"
      >
        pages
      </router-link>
    </li>
    <router-view></router-view>
  </pageTemplate>
</template>
