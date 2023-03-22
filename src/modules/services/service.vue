<script setup lang="ts">
import { computed, watch, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import cfiTable from "../../components/cfi-table.vue";
import cfiTabs from "../../components/cfi-tabs.vue";
import cfiForm from "../../components/cfi-form.vue";
import dCfiButton from "../../components/dynamics/d-cfi-button.vue";
import { usePagesStore } from "../../store/pages";
import { storeToRefs } from "pinia";
import { useMenuStore } from "../../store/menu";
import { getServiceContent, getService } from "../../mockData/requests";
const { pages, isPagesLoading } = storeToRefs(usePagesStore());
const route = useRoute();
const menuStore = useMenuStore();
const { menu } = storeToRefs(menuStore);

const servicePageStructure = ref(null);
const serviceData = ref(null);

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
    return decorations.reduce((list, decoration) => {
      const { type, data } = decoration;
      const headers = data.columns;
      return {
        ...list,
        headers,
        actions: data.actions,
      };
    }, {});
  },
  tabs: (decorations) => {
    return decorations.reduce((list, decoration) => {
      const { type, data } = decoration;
      const headers = data.columns;
      return {
        ...list,
        headers,
      };
    }, {});
  },
};

watchEffect(() => {
  const serviceId = route.path;
  getService(serviceId)().then((service: any) => {
    const [structure, data] = service;
    console.log("service data", data);
    const parsed: any = structure.reduce((list, s: any) => {
      if (decorationFunctions[s.type]) {
        const parsed = decorationFunctions[s.type](s.decorations);
        list.push({
          type: s.type,
          key: s.key,
          props: parsed,
        });
      }
      return list;
    }, []);
    serviceData.value = data;
    servicePageStructure.value = parsed;
    console.log("parsed", parsed);
  });
});
</script>

<template>
  <div v-if="servicePageStructure">
    <div v-for="structure in servicePageStructure">
      <div v-if="structure.type === 'button'">
        <d-cfi-button v-bind="structure.props"></d-cfi-button>
      </div>

      <div v-else-if="structure.type === 'list'">
        <cfi-table
          :headers="structure.props.headers"
          :actions="structure.props.actions"
          :data="serviceData"
        >
          <template #title="{ row }">
            <router-link
              :to="row.id"
              class="rounded-md inline-block hover:text-gray-400"
            >
              {{ row.data.title }}
            </router-link>
          </template>
          <template #actions="{ row }"> acties hier</template>
        </cfi-table>
      </div>

      <div v-else-if="structure.type === 'tabs'">
        <cfi-tabs :tabs="structure.props.headers" :data="serviceData">
          <template
            v-for="(slot, index) of structure.props.headers"
            :key="index"
            v-slot:[slot.key]="{ tab }"
          >
            <cfi-form :formData="tab"></cfi-form>
            <!-- {{ tab }} -->
          </template>
        </cfi-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
