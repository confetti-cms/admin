<script setup lang="ts">
const menuItems = [
  {
    id: 1,
    route: "/",
    label: "Home",
    icon: "",
  },
  {
    id: 2,
    route: "/pages",
    label: "Paginas",
    icon: "",
  },
  {
    id: 3,
    route: "/Berichten",
    label: "Berichten",
    icon: "",
  },
];
</script>

<template>
  <div class="flex h-screen">
    <div class="bg-gray-50 pt-10 px-4">
      <div class="logo h-20 mb-4">
        <img class="max-h-full" src="/placeholder-logo.png" />
      </div>
      <ul class="flex flex-col gap-3">
        <li v-for="{ id, route, label } in menuItems" :key="`main-menu-${id}`">
          <i class="fa fa-envelope"></i>
          <router-link
            :to="route"
            class="py-2.7 text-md ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
          >
            {{ label }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="bg-gray-50 flex-grow px-8 pt-10">
      <router-view></router-view>
    </div>
  </div>
</template>
