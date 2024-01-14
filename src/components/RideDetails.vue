<template>
  <div v-if="state.ride && !state.editMode">
    <h1>{{ state.ride.id }}</h1>
    <ButtonComponent :onClick="() => handleDeleteRide()">Delete ride</ButtonComponent>
    <ButtonComponent :onClick="() => state.editMode = true">Edit ride</ButtonComponent>
  </div>
  <div v-else>
    <EditRide :ride="state.ride" />
  </div>
</template>

<script setup lang="ts">
import type { Ride } from '@/data/Ride'
import deleteRide from '@/data/requests/deleteRide'
import getRide from '@/data/requests/getRide'
import router from '@/router'
import { onMounted, reactive } from 'vue'
import EditRide from './EditRide.vue'
import ButtonComponent from './ButtonComponent.vue';

const id = String(router.currentRoute.value.params.id)

const state = reactive({
  ride: {} as Ride,
  editMode: false
})

const handleGetRide = async () => {
  const response = await getRide(id)
  state.ride = response
}

const handleDeleteRide = async () => {
  if (state.ride?.id) {
    await deleteRide(state.ride.id)
    router.push('/')
  }
}

onMounted(() => {
  handleGetRide()
})
</script>

<style scoped></style>
