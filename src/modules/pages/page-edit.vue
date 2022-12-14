<script setup lang="ts">
import { computed, ref } from "vue";
import { usePagesStore } from "../../store/pages";
import { storeToRefs } from "pinia";
import pageTemplate from "../../components/structure/page-template.vue";
import { useRoute } from "vue-router";
import { FormKitSchema } from "@formkit/vue";
import { parseFormKitSchema } from "../../helpers/formkit-parser";
const route = useRoute();

let store = usePagesStore();

const { pages, isPagesLoaded, getPageById } = storeToRefs(store);
const currentPage = computed(() => {
  const id = route.params.id;
  return getPageById.value(parseInt(id));
});

const rep = [
  {
    $formkit: "repeater",
    children: [
      {
        $formkit: "select",
        name: "fieldType",
        label: "Field type",
        options: ["Text", "HTML", "Image"],
      },
      {
        $formkit: "text",
        name: "fieldName",
        label: "Field name",
      },
    ],
  },
];

const schema = [
  {
    $el: "h1",
    children: "Register",
  },
  {
    $formkit: "text",
    name: "email",
    label: "Email",
    help: "This will be used for your account.",
    validation: "required|email",
  },
];

const data = [
  {
    parent_key: "pages.intro",
    key: "pages.intro.shape",
    type: "section",
    decorations: [
      {
        type: "label",
        value: "wat is jouw naam?",
      },
    ],
  },
  {
    parent_key: "footer",
    key: "footer.socials",
    type: "repeater",
    decorations: [
      {
        type: "label",
        value: "Socials",
      },
      {
        type: "min",
        value: "2",
      },
      {
        type: "max",
        value: "7",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 6,
      from: 11,
      to: 70,
    },
  },
  {
    parent_key: "footer.socials",
    key: "footer.socials.url",
    type: "url",
    decorations: [
      {
        type: "label",
        value: "Url",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 7,
      from: 15,
      to: 55,
    },
  },
  {
    parent_key: "footer.socials",
    key: "footer.socials.icon",
    type: "image",
    decorations: [
      {
        type: "label",
        value: "Icon",
      },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 8,
      from: 19,
      to: 65,
    },
  },
  {
    parent_key: "pages.intro",
    key: "pages.intro.shape",
    type: "text",
    decorations: [
      {
        type: "label",
        value: "wat is jouw naam?",
      },
      {
        type: "prefix-icon",
        value: "email",
      },
    ],
  },
  {
    parent_key: "pages.intro",
    key: "pages.intro.shape",
    type: "select",
    decorations: [
      {
        type: "label",
        value: "Shape",
      },
      {
        type: "placeholder",
        value: "brood",
      },
      {
        type: "options",
        options: [
          {
            key: "shape1",
            value: "Cycle",
          },
          {
            key: "shape2",
            value: "Square",
          },
        ],
      },
      // {
      //   type: "prefix",
      //   image_url: "https://confetti-cms.com/assets/icon_title.png",
      // },
    ],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 43,
      from: 27,
      to: 34,
    },
  },
];

const schema2 = parseFormKitSchema(data);
console.log("schema2", schema2);
</script>

<template>
  hier: {{ isPagesLoaded }}

  <!-- <FormKit id="repeater" name="users" type="repeater" label="Users">
    <FormKit
      type="email"
      label="Email"
      name="email"
      validation="required|email"
      placeholder="Add email address..."
    />
  </FormKit> -->

  <div v-if="isPagesLoaded && currentPage">
    <pageTemplate :title="currentPage.title">
      <!-- <FormKitSchema :schema="rep" /> -->
      <FormKitSchema :schema="schema2" />
      <!-- <FormKitSchema :schema="currentPage.formSchema" /> -->
    </pageTemplate>
  </div>
</template>
