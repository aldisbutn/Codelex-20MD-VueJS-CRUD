<template>
  <h1>All rides</h1>
  <div v-if="state.rides">
    <div v-for="ride in state.rides" :key="ride.id">
      <RideCard :ride="ride" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RideCard from '@/components/RideCard.vue'
import type { Ride } from '@/data/Ride'
import getRides from '@/data/requests/getRides'
import { onMounted, reactive } from 'vue'

const state = reactive({
  rides: [] as Ride[]
})

const getAllRides = async () => {
  state.rides = await getRides()
}

onMounted(() => {
  getAllRides()
})
</script>

<style scoped></style>
