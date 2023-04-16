<script setup lang="ts">
import CfiButton from "./cfi-button.vue";
const prop = defineProps({
  title: {
    type: String,
  },
  overlay: {
    type: String,
  },
  canClose: {
    type: String,
  },
});
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
</script>

<template>
  <div class="confetti-modal fixed">
    <div class="confetti-modal__inner">
      <div
        class="confetti-modal__header flex items-center justify-center relative"
      >
        <slot name="title">
          {{ title }}
        </slot>
        <cfi-button
          @click="close()"
          type="clear"
          round-button
          class="absolute w-[35px] h-[35px] right-[10px] padding-[5px] top-[5px]"
        >
          <i class="fa-solid fa-xmark"></i>
        </cfi-button>
      </div>
      <div class="confetti-modal__body px-4 pb-4">
        <slot></slot>
      </div>
      <div class="confetti-modal__footer px-4">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.confetti-modal {
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  &__inner {
    background: white;
    width: 500px;
    height: 500px;
    border-radius: 6px;
    display: grid;
    grid-template-rows: 50px 1fr auto;
  }

  &__header {
    font-weight: bold;
  }

  &__body {
    overflow-y: scroll;
  }

  &__footer {
    border-top: 1px solid #efefef;
  }
}
</style>
