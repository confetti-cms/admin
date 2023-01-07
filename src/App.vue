<script setup lang="ts">
import { mockRequest } from "./api/helpers/mockRequest";
import { usePagesStore } from "./store/pages";
const store = usePagesStore();

store.getPages();

const menuItems = [
  {
    id: 1,
    route: "/",
    label: "Dashboard",
    icon: "fa-solid fa-house",
  },
  {
    id: 2,
    route: "/pages",
    label: "Paginas",
    icon: "fa-solid fa-file-lines",
  },
  {
    id: 3,
    route: "/Berichten",
    label: "Berichten",
    icon: "fa-solid fa-file-pen",
  },
];
</script>

<template>
  <main class="flex h-screen">
    <nav class="bg-gray-50 pt-10 px-4 w-52">
      <div class="logo h-20 mb-4 -mt-[24px]">
        <img class="max-h-full" src="/placeholder-logo.png" />
      </div>
      <ul class="flex flex-col gap-3">
        <li
          v-for="{ id, route, label, icon } in menuItems"
          :key="`main-menu-${id}`"
        >
          <router-link
            :to="route"
            class="flex items-center gap-2 hover:bg-white hover:font-semibold hover:drop-shadow-md rounded-md text-md whitespace-nowrap py-2 ease-in duration-150"
          >
            <div class="flex items-center justify-center w-[40px] h-[40px]">
              <i :class="icon" class="text-xl"></i>
            </div>
            {{ label }}
          </router-link>
        </li>
      </ul>
    </nav>
    <section class="bg-gray-50 flex-grow px-8 pt-10 overflow-y-scroll">
      <router-view></router-view>
    </section>
  </main>
</template>

<style lang="scss">
.router-link-active {
  @apply bg-white drop-shadow-md font-semibold;
}
</style>
