<script setup lang="ts">
import { RouterView } from 'vue-router'
import RideHeader from './components/RideHeader.vue'
</script>

<template>
  <RideHeader />
  <div class="appWindow">
    <RouterView />
  </div>
</template>

<style scoped>
.appWindow {
  display: flex;
  justify-content: center;
}
</style>
