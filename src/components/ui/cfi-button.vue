<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "primary",
    validator: function (value: string) {
      return (
        [
          "primary",
          "default",
          "error",
          "light",
          "dark",
          "ghost",
          "clear",
        ].indexOf(value) !== -1
      );
    },
  },
  color: {
    type: String,
    default: "white",
    validator: function (value: string) {
      return (
        [
          "white",
          "default",
          "primary",
          "error",
          "notification",
          "light",
        ].indexOf(value) !== -1
      );
    },
  },
  alignText: {
    type: String,
    default: "center",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: false,
  },
  fullWidth: {
    type: Boolean,
    required: false,
  },
  iconPosition: {
    type: String,
    default: "left",
    validator: function (value: string) {
      return ["left", "right"].indexOf(value) !== -1;
    },
  },
  anchor: {
    type: Boolean,
    default: false,
  },
  submit: {
    type: Boolean,
    default: false,
  },
  classes: {
    type: String,
    default: "bg-gray-100",
  },
  label: {
    type: String,
    default: "",
  },
});

const classes = computed(() => {
  return {
    [`cfi-button--${props.type}`]: true,
    [`cfi-button--align-${props.alignText}`]: true,
    [`cfi-button--icon-align-${props.iconPosition}`]: props.icon,
    [`cfi-button--full`]: props.fullWidth,
    [`cfi-button--disabled`]: props.disabled,
    [`cfi-button--anchor`]: props.anchor,
    [`${props.classes}`]: true,
  };
});
</script>

<template>
  <button class="cfi-button" :class="classes" v-if="!anchor">
    <div class="cfi-button__inner flex items-center">
      <template v-if="icon">
        <slot name="icon">
          <i :class="icon" class="cfi-button__icon"></i>
        </slot>
      </template>
      <slot>
        {{ label }}
      </slot>
    </div>
  </button>
  <a v-else class="cfi-button" :class="classes">
    <div class="cfi-button__inner flex items-center">
      <template v-if="icon">
        <slot name="icon">
          <i :class="icon" class="cfi-button__icon"></i>
        </slot>
      </template>
      <slot></slot>
    </div>
  </a>
</template>

<style lang="scss">
.cfi-button {
  @apply p-3 rounded-md;
  transition: opacity 0.3s ease;
  border: 2px solid transparent;

  &__inner {
    gap: 16px;
  }

  &__icon {
    font-size: 20px;
  }

  &:hover {
    opacity: 0.7;
  }

  &--primary {
    background: var(--color-primary);
    // color: white;
  }

  &--anchor {
    display: inline-block;
    cursor: pointer;
  }

  &--align {
    &-left {
      .cfi-button__inner {
        justify-content: start;
      }
    }

    &-center {
      .cfi-button__inner {
        justify-content: center;
      }
    }

    &-right {
      .cfi-button__inner {
        justify-content: end;
      }
    }
  }

  &--icon-align-right {
    .cfi-button__icon {
      order: 2;
    }
  }

  &--ghost {
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }

  &--disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &--full {
    @apply w-full;
  }
}
</style>
