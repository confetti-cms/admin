<script setup lang="ts">
import cfiCard from "../components/cfi-card.vue";
import cfiButton from "../components/cfi-button.vue";
import pageTemplate from "../components/structure/page-template.vue";
</script>

<template>
  <pageTemplate title="Dashboard">
    <div class="flex">
      <cfi-card> dsdsdsdsds </cfi-card>
      <cfi-card> dsdsdsdsds </cfi-card>
    </div>
    <cfi-button icon="far fa-envelope">dssdsd</cfi-button>
    <cfi-button full-width>dssdsd</cfi-button>
    <cfi-button type="ghost">dssdsd</cfi-button>
    <cfi-button type="clear" icon="far fa-envelope">dssdsd</cfi-button>
    <cfi-button disabled>dssdsd</cfi-button>
    <cfi-button
      classes="w-full bg-gray-100"
      icon="far fa-envelope"
      icon-position="right"
      >hierooo</cfi-button
    >
    <cfi-button anchor icon="far fa-envelope">iconjaaa dssdsd</cfi-button>
  </pageTemplate>
</template>

<style scoped></style>
