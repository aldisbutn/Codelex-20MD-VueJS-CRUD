<template>
  <button class="button" :class="props.class" :type="props.type" @click="props.onClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes, PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'submit'
  },
  onClick: {
    type: Function as PropType<() => void>,
    default: () => {}
  },
  class: {
    type: String,
  }
})
</script>

<style scoped>
.button {
  padding: 6px 14px;
  font-weight: bold;
  border-radius: 5px;
  border: solid #294656;
  transition: 0.3s;
  cursor: pointer;
}

.button:hover {
  border: solid #fbdc58;
}

.button-green {
  background-color: #025202;
  color: #58fb58;
}

.button-red {
  background-color: #520202;
  color: #fb5858;
}

.button-yellow {
  background-color: #525202;
  color: #fbfb58;
}
</style>
