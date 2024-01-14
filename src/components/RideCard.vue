<template>
  <div v-if="props.ride">
    <RouterLink :to="`/ride/${props.ride.id}`">
      <h1>{{ props.ride.rideName }}</h1>
      <h2>{{ props.ride.rideDate }}</h2>
    </RouterLink>
    <hr />
  </div>
</template>

<script setup lang="ts">
import type { Ride } from '@/data/Ride'

const props = defineProps({
  ride: Object as () => Ride
})
</script>

<style scoped></style>
