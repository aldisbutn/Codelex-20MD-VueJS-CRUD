<template>
  <div v-if="state.rides" class="allCardWrapper">
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

<style scoped>
.allCardWrapper {
  width: 100%;
  max-width: 1265px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  margin: 50px 0 50px 0;
  justify-content: center;
}
</style>
