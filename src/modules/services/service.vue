<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import CfiCmsTable from "../../components/cms/cfi-cms-table.vue";
import CfiCmsTabs from "../../components/cms/cfi-cms-tabs.vue";
import CfiButton from "../../components/ui/cfi-button.vue";
import { storeToRefs } from "pinia";
import { useMenuStore } from "../../store/menu";
import { getServiceData, getService } from "../../mockData/requests";
import { ServiceComponents } from "./service-components";

const route = useRoute();
const menuStore = useMenuStore();
const { menu } = storeToRefs(menuStore);

const servicePageStructure = ref(null);

type ComponentDataType = {
  type: string;
  key: string;
  props: Object;
  data: null | Object;
  component: any;
};

watchEffect(() => {
  const serviceId = route.path;
  getService(serviceId)().then(async (service: any) => {
    const [structure] = service;
    const parsed = await structure.reduce(async (promise, component: any) => {
      const list = await promise;
      if (ServiceComponents[component.type]) {
        const parsed = ServiceComponents[component.type].parse(
          component.decorations
        );

        const componentData: ComponentDataType = {
          type: component.type,
          key: component.key,
          component: ServiceComponents[component.type].component,
          props: parsed,
          data: null,
        };

        if (ServiceComponents[component.type].fetchData) {
          const resp: any = await getServiceData(component.key)();
          componentData.data = resp;
        }
        list.push(componentData);
      }
      return list;
    }, Promise.resolve([]));
    console.log("parsed", parsed);
    servicePageStructure.value = parsed;
  });
});
</script>

<template>
  <div v-if="servicePageStructure">
    <div v-for="structure in servicePageStructure">
      <div v-if="structure.type === 'button'">
        <cfi-button v-bind="structure.props"></cfi-button>
      </div>

      <div v-else-if="structure.type === 'list'">
        <cfi-cms-table :structure="structure">
          <template #title="{ row }">
            <router-link
              :to="row.id"
              class="rounded-md inline-block hover:text-gray-400"
            >
              {{ row.data.title }}
            </router-link>
          </template>

          <template #collapedContent> acties </template>

          <template #actions="{ row }"> acties hier</template>
        </cfi-cms-table>
      </div>

      <div v-else-if="structure.type === 'tabs'">
        <cfi-cms-tabs :structure="structure"></cfi-cms-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
