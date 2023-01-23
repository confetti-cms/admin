<script setup lang="ts">
import cfiTable from "../../components/cfi-table.vue";
import cfiCard from "../../components/cfi-card.vue";
import pageTemplate from "../../components/structure/page-template.vue";
import { usePagesStore } from "../../store/pages";
import { storeToRefs } from "pinia";
import { pageHeaders } from "./data/page-headers";
import { ref } from "vue";
const { pages, isPagesLoading } = storeToRefs(usePagesStore());
const show = ref(false);
</script>

<template>
  <pageTemplate title="Pagina's">
    <cfi-card noSpace>
      <!-- <div v-auto-animate>
        <FormKit type="text" v-if="show" placeholder="status"></FormKit>
      </div> -->
      <cfi-table :headers="pageHeaders" :data="pages">
        <template #title="{ value: { id, title } }">
          <router-link
            :to="`pages/edit/${id}`"
            class="rounded-md inline-block hover:text-gray-400"
          >
            {{ title }}
          </router-link>
        </template>
        <template #date> Wo 18 januari </template>
        <template #collapedContent="{ value: { id } }">
          <div class="font-bold">Quick edit:</div>
          <div class="flex gap-3" useAutoAnimate>
            <a>published date</a>
            <a @click="show = true">Status</a>
            <a>Slug</a>
            <a>Author</a>
          </div>
          <div v-auto-animate>
            <div class="flex align-items-center items-center mt-2" v-if="show">
              <FormKit
                type="text"
                outer-class="no-margin"
                placeholder="status"
              ></FormKit>
              <div @click="show = false" class="ml-4">Save</div>
            </div>
          </div>
        </template>
      </cfi-table>
    </cfi-card>
  </pageTemplate>
</template>
