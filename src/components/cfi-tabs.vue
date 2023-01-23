<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  tabs: {
    type: Array,
    default: [],
  },
});
const activeTab = ref(props.tabs[0]);
</script>

<template>
  <div class="flex confetti-tabs">
    <div
      v-for="tab in tabs"
      class="bg-gray-400 color-dark confetti-tabs__tab"
      @click="activeTab = tab"
      :data-step-active="activeTab === tab"
    >
      {{ tab }}
    </div>
  </div>

  <div class="p-2 bg-gray-300 confetti-tabs__active-content">
    <section v-for="tab in tabs">
      <div v-show="tab === activeTab">
        <slot :name="tab.replace(' ', '-').toLowerCase()">
          {{ tab }}
        </slot>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.confetti-tabs {
  list-style-type: none;
  margin: 0;
  display: flex;
  padding-left: 0;
  background: var(--gray-l);
  border-radius: 0.4em 0.4em 0 0;
  overflow: hidden;
  border-bottom: 1px solid var(--gray);

  &__tab {
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 16px 20px;
    border-right: 1px solid var(--gray);
    color: gray;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
  }

  &:last-child {
    box-shadow: 0.1em -0.1 0.1em 0 rgba(0, 0, 0, 0.33);
  }
  :hover {
    cursor: pointer;
  }

  &__active-content {
  }
}
</style>
