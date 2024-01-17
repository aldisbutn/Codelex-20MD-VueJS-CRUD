<template>
  <RouterLink v-if="props.ride" :to="`/ride/${props.ride.id}`" class="cardWrapper">
    <h1 class="cardHeading">{{ props.ride.rideName }}</h1>
    <h2 class="cardDate">Ride date: {{ props.ride.rideDate }}</h2>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Ride } from '@/data/Ride'

const props = defineProps({
  ride: Object as () => Ride
})
</script>

<style scoped>
.cardWrapper {
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 90.5px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background-color: #192a34;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  transition: 0.3s;
  border: solid #294656;
}

.cardWrapper:hover {
  border: solid #fbdc58;
}

.cardHeading {
  color: #58c2fb;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.cardDate {
  color: #035784;
  font-size: 15px;
  text-align: end;
}
</style>
