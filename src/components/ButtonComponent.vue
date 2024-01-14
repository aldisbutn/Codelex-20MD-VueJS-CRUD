<template>
  <button :type="props.type" @click="props.onClick"><slot></slot></button>
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
  }
})
</script>

<style scoped></style>
