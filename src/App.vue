<script setup lang="ts">
import cfiModal from "./components/ui/cfi-modal.vue";
import CfiButton from "./components/ui/cfi-button.vue";
import { useGeneralStore } from "./store/general";
import { useMenuStore } from "./store/menu";
import { storeToRefs } from "pinia";
import { reactive } from "vue";
const generalStore = useGeneralStore();
const { activeModal } = storeToRefs(generalStore);
generalStore.loadApp();
const menuStore = useMenuStore();
const { menu } = storeToRefs(menuStore);
const { appLoaded } = storeToRefs(generalStore);

const axios = {
  post: () => new Promise((r) => setTimeout(r, 2000)),
};

async function login(credentials) {
  console.log("credentials", credentials);

  const res = await axios.post(credentials);
  // do some login things now
  alert("Logged in!");
}

// {
//         "type": "label",
//         "data": {
//           "value": "Title of the intro"
//         }
//       },

const events = {
  onSubmit: (test) => login(test),
};

const cmp = {
  type: "event",
  data: {
    value: {
      onSubmit: (test) => login(test),
    },
  },
};

console.log("onSubmit", events["onSubmit"]);

const schema = [
  {
    $formkit: "form",
    label: "dsdsds",
    // events['onSubmit'],

    ...cmp.data.value,
    // onSubmit: (test) => login(test),
    children: [
      {
        $formkit: "text",
        name: "email",
        label: "Email",
        help: "This will be used for your account.",
      },
    ],
  },
];

console.log("schema", schema);

const data = reactive({
  someAttributes: {
    class: "red",
    onSubmit: (test) => login(test),
    "data-fruit": "I like fruit",
  },
});
</script>

<template>
  <main>
    <div class="main-content-wrapper flex h-screen" v-if="appLoaded">
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
              </router-link>
              <!-- <ul class="menu-child-menu bg-white top-0 " v-if="children">
                <li
                  class="p-3"
                  v-for="{ label } in children"
                  :key="`main-menu-child${id}`"
                >
                  {{ label }}
                </li>
              </ul> -->
            </li>
          </ul>
        </nav>
      </div>
      <section class="bg-gray-50 flex-grow px-8 pt-6 overflow-y-scroll">
        <FormKitSchema :schema="schema" />
        <div class="flex w-full items-center justify-end">
          <FormKit
            type="text"
            outer-class="search-bar"
            placeholder="search app"
          />
          <div class="flex items-center">
            <div class="icons mx-4">
              <!-- <cfi-button icon="fa-solid fa-file-lines">
                <i class="fa-solid fa-file-lines"></i>
              </cfi-button> -->
              <i class="fa-solid fa-file-pen"></i>
            </div>
            <div class="rounded-full overflow-hidden bg-gray-100 w-[60px] flex">
              <img src="https://via.placeholder.com/100x100" alt="" />
              <i class="fa-solid fa-file-pen"></i>
            </div>
          </div>
        </div>
        <router-view></router-view>
        <cfi-modal
          v-if="activeModal"
          :title="activeModal.title"
          @close="activeModal.onClose"
        >
          <template #default v-if="activeModal.description">
            {{ activeModal.description }}
          </template>
          <template #footer>
            <div class="flex items-center py-2 gap-3">
              <cfi-button
                @click="activeModal.onCancel"
                type="clear"
                class="p-2 w-1/2"
              >
                Cancel
              </cfi-button>
              <cfi-button
                type="primary"
                @click="activeModal.onConfirm"
                class="p-2 w-1/2"
              >
                Confirm
              </cfi-button>
            </div>
          </template>
        </cfi-modal>
      </section>
    </div>
    <div v-else>Loading app</div>
  </main>
</template>

<style lang="scss">
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
  // position: absolute;
  // right: calc(-100% - 40px);
  z-index: 9;
  border-radius: 8px;
  overflow: hidden;
  // opacity: 0;
  box-shadow: 4px 4px 13px -5px rgb(0 0 0 / 25%);
}

.menu-item {
  transition: all 0.4s ease;
  &:hover,
  &.router-link-active {
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
