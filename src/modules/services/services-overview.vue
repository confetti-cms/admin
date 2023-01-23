<script setup lang="ts">
import cfiTable from "../../components/cfi-table.vue";
import cfiCard from "../../components/cfi-card.vue";
import cfiTabs from "../../components/cfi-tabs.vue";
import pageTemplate from "../../components/structure/page-template.vue";
import { usePagesStore } from "../../store/pages";
import { storeToRefs } from "pinia";
const { pages, isPagesLoading } = storeToRefs(usePagesStore());
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { useMenuStore } from "../../store/menu";
import { computed, watch, ref, watchEffect } from "vue";
import { getServiceContent, getService } from "../../mockData/requests";
const route = useRoute();
const menuStore = useMenuStore();
const { menu } = storeToRefs(menuStore);

const currentService = computed(() => {
  const routeService = route.params.service;
  if (!menu.value) {
    return null;
  } else {
    return menu.value.find((menuService) => {
      return menuService.slug === routeService;
    });
  }
});

watchEffect(() => {
  // target result
  const pageactions = [
    {
      type: "button",
      props: {
        type: "primary",
        label: "some button",
        color: "default",
        icon: "fa fa-pencil",
      },
      action: "",
    },
    {
      type: "list",
      actions: ["delete", "edit"],
      columns: ["title", "active", "slug", "date"],
    },
  ];

  const decorationFunctions = {
    button: (decorations) => {
      return decorations.reduce((list, decoration) => {
        const { type, data } = decoration;
        return {
          ...list,
          [type]: data.value,
        };
      }, {});
    },
    list: (decorations) => {
      return decorations;
    },
  };

  const routeService = route.params.service;
  getService(routeService)().then((service: any) => {
    const [structure, data] = service;
    console.log("service", service);
    const parsed: any = structure.reduce((list, s: any) => {
      if (decorationFunctions[s.type]) {
        const parsed = decorationFunctions[s.type](s.decorations);
        list[s.key] = parsed;
      }
      return list;
    }, []);
    console.log("parsed", parsed);
  });
});

const tabs = ["Logo", "Bedrijfsinformatie", "Footer menu"];
</script>

<template>
  {{ currentService }}
  <pageTemplate :title="currentService?.label"> welkom </pageTemplate>

  <cfi-tabs :tabs="tabs">
    <template #logo> hier komt alle logo instellingen </template>
    <template #bedrijfsinformatie>
      halle bedrijfsinformatie instellingen
    </template>
    <template #footer-menu> footer menu hier nu </template>
  </cfi-tabs>
</template>
