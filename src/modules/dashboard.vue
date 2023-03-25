<script setup lang="ts">
import cfiCard from "../components/ui/cfi-card.vue";
import CfiButton from "../components/ui/cfi-button.vue";
import pageTemplate from "../components/structure/page-template.vue";
</script>

<template>
  <pageTemplate title="Dashboard">
    <div class="flex gap-4">
      <cfi-card> card left </cfi-card>
      <cfi-card> card right </cfi-card>
    </div>
    <cfi-button icon="far fa-envelope">default button</cfi-button>
    <cfi-button full-width>full width button</cfi-button>
    <cfi-button type="ghost">ghost button</cfi-button>
    <cfi-button type="clear" icon="far fa-envelope">clear button</cfi-button>
    <cfi-button disabled>disabled button</cfi-button>
    <cfi-button
      classes="w-full bg-gray-100"
      icon="far fa-envelope"
      icon-position="right"
    >
      icon right position
    </cfi-button>
    <cfi-button anchor icon="far fa-envelope">anchor button</cfi-button>
  </pageTemplate>
</template>

<style scoped></style>
