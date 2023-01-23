<script setup lang="ts">
import { mockRequest } from "./api/helpers/mockRequest";
import cfiModal from "./components/cfi-modal.vue";
import { usePagesStore } from "./store/pages";
import { useGeneralStore } from "./store/general";
import { useMenuStore } from "./store/menu";
import { storeToRefs } from "pinia";
import { mainMenu2 } from "./mockData/mainMenu";
import { parseMenu } from "./helpers/menu-parser";
const generalStore = useGeneralStore();
const { activeModal } = storeToRefs(generalStore);
generalStore.loadApp();
const menuStore = useMenuStore();
const { menu } = storeToRefs(menuStore);

setTimeout(() => {
  console.log("menu!!", menu.value);
}, 2000);
</script>

<template>
  <main class="flex h-screen">
    <div class="app-sidebar pt-4">
      <div class="logo h-20">
        <img class="max-h-full" src="/placeholder-logo.png" />
      </div>
      <nav class="overflow-x-hidden overflow-y-scroll px-4 w-52">
        <ul class="flex flex-col gap-3">
          <li
            v-for="{ id = null, label, icon, route, children = null } in menu"
            :key="`main-menu-${id}`"
          >
            <router-link
              :to="route"
              class="menu-item relative flex items-center gap-2 rounded-md text-md whitespace-nowrap py-2"
            >
              <div class="flex items-center justify-center w-[40px] h-[40px]">
                <i :class="icon" class="text-xl"></i>
              </div>
              {{ label }}
              <ul class="menu-child-menu bg-white top-0" v-if="children">
                <li
                  class="p-3"
                  v-for="{ label } in children"
                  :key="`main-menu-child${id}`"
                >
                  {{ label }}
                </li>
              </ul>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <section class="bg-gray-50 flex-grow px-8 pt-6 overflow-y-scroll">
      <div class="flex w-full items-center justify-end">
        <FormKit
          type="text"
          outer-class="search-bar"
          placeholder="search app"
        />
        <div class="flex items-center">
          <div class="icons mx-4">
            <cfi-button icon="fa-solid fa-file-lines">
              <i class="fa-solid fa-file-lines"></i>
            </cfi-button>
            <i class="fa-solid fa-file-pen"></i>
          </div>
          <div class="rounded-full overflow-hidden bg-gray-100 w-[60px] flex">
            <img src="https://via.placeholder.com/100x100" alt="" />
            <i class="fa-solid fa-file-pen"></i>
          </div>
        </div>
      </div>
      <router-view></router-view>
      <cfi-modal v-if="activeModal" :title="activeModal.title"> </cfi-modal>
    </section>
  </main>
</template>

<style lang="scss">
.no-margin {
  margin: 0 !important;
}
.router-link-active {
  // @apply bg-white drop-shadow-md font-semibold;
}

.formkit-outer.search-bar {
  margin-bottom: 0;
}

.app-sidebar {
  display: grid;
  grid-template-rows: 80px 1fr;
}

.menu-child-menu {
  // visibility: hidden;
  position: absolute;
  right: calc(-100% - 40px);
  z-index: 9;
  border-radius: 8px;
  overflow: hidden;
  // opacity: 0;
  box-shadow: 4px 4px 13px -5px rgb(0 0 0 / 25%);
}

.menu-item {
  transition: all 0.4s ease;
  &:hover {
    box-shadow: 4px 4px 13px -5px rgb(0 0 0 / 25%);
    background: white;
  }
}

.menu-item:hover .menu-child-menu {
  display: block;
  transition: all 0.3s ease;
  visibility: visible;
  opacity: 1;

  li:hover {
    background: #efefef;
  }
}
</style>
