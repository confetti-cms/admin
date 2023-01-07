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
const route = useRoute();

let store = usePagesStore();

const { pages, isPagesLoaded, getPageById } = storeToRefs(store);
const currentPage = computed(() => {
  const id = route.params.id;
  return getPageById.value(parseInt(id));
});

const schema = [
  {
    $el: "h1",
    children: "Register",
  },
  {
    $formkit: "group",
    name: "groepname",
    label: "groepnaaaam",
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

const data = [
  {
    parent_key: "",
    key: "footer",
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
    key: "footerGroup",
    type: "group",
    decorations: [],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 6,
      from: 11,
      to: 70,
    },
  },
  {
    parent_key: "footerGroup",
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
    parent_key: "footerGroup",
    key: "footer.socials",
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
    parent_key: "footer",
    key: "headerGroup",
    type: "group",
    decorations: [],
    source: {
      directory: "views",
      file: "home.blade.php",
      line: 6,
      from: 11,
      to: 70,
    },
  },
  {
    parent_key: "headerGroup",
    key: "header",
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
    parent_key: "headerGroup",
    key: "header.image",
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
];

const schema2 = [
  {
    $el: "section",
    children: [
      {
        $formkit: "group",
        name: "chiild1",
        label: "chiild1",
        help: "This will be used for your account.",
        children: [
          {
            $formkit: "text",
            name: "chiild1",
            label: "chiild1",
            help: "This will be used for your account.",
            validation: "required|email",
          },
        ],
      },
    ],
  },
  {
    $formkit: "text",
    name: "email",
    label: "Email",
    help: "This will be used for your account.",
    validation: "required|email",
  },
  {
    $formkit: "password",
    name: "password",
    label: "Password",
    help: "Enter your new password.",
    validation: "required|length:5,16",
  },
  {
    $formkit: "password",
    name: "password_confirm",
    label: "Confirm password",
    help: "Enter your new password again to confirm it.",
    validation: "required|confirm",
    validationLabel: "password confirmation",
  },
  {
    $formkit: "checkbox",
    name: "eu_citizen",
    id: "eu",
    label: "Are you a european citizen?",
  },
  {
    $formkit: "select",
    if: "$get(eu).value", // 👀 Oooo, conditionals!
    name: "cookie_notice",
    label: "Cookie notice frequency",
    options: {
      refresh: "Every page load",
      hourly: "Ever hour",
      daily: "Every day",
    },
    help: "How often should we display a cookie notice?",
  },
];

const formKitSchema = parseFormKitGroepSchema(data);
// get all repeaters for resetting
// bug: https://github.com/formkit/formkit/issues/485
const repeaters = formKitSchema.filter(
  (schema) => schema.$formkit === "repeater"
);
console.log("formKitSchema", formKitSchema);

onBeforeUnmount(() => {
  repeaters.forEach((repeater) => {
    const formNode = getNode(repeater.id);
    console.log("formNode", formNode);
    formNode?.reset();
  });
});
</script>

<template>
  <div v-if="isPagesLoaded && currentPage">
    <pageTemplate :title="currentPage.title">
      <div v-if="formKitSchema">
        <FormKitSchema :schema="formKitSchema" />
      </div>
    </pageTemplate>
  </div>
</template>
