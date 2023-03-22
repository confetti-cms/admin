<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from "vue";
import { usePagesStore } from "../../store/pages";
import { storeToRefs } from "pinia";
import pageTemplate from "../../components/structure/page-template.vue";
import { FormKitSchema } from "@formkit/vue";
import { getNode } from "@formkit/core";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import {
  parseFormKitGroepSchema,
  parseComponentsToFormKitSchema,
} from "../../helpers/formkit-parser";

import { mockPage } from "../../mockData/pages";
import { getServiceDetailData } from "../../mockData/requests";

const route = useRoute();
const serviceName = route.params.id;
const serviceDetailStructure: any = ref(null);
const serviceId = window.location.pathname;
const formKitSchema: any = ref(null);

getServiceDetailData(serviceId)().then((data) => {
  serviceDetailStructure.value = data;
  formKitSchema.value = parseFormKitGroepSchema(data);
  console.log("formKitSchema", formKitSchema.value);
});
</script>

<template>
  <div>
    <pageTemplate>
      <div v-if="formKitSchema">
        {{ formKitSchema }}
        <FormKitSchema :schema="formKitSchema" />
      </div>
    </pageTemplate>
  </div>
</template>
