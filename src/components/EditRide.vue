<template>
  <div v-if="props.ride">
    <form class="inputWrapper" @submit.prevent="handleEditRide">
      <label for="rideName">Ride name</label>
      <input type="text" v-model="editedRide.rideName" id="rideName" required />
      <label for="goalDistance">Goal distance</label>
      <input type="text" v-model="editedRide.goalDistanceMeters" id="goalDistance" required />
      <label for="totalDistance">Total distance</label>
      <input type="text" v-model="editedRide.totalDistanceMeters" id="totalDistance" required />
      <label for="rideDuration">Duration</label>
      <input type="text" v-model="editedRide.rideDurationMinutes" id="rideDuration" required />
      <label for="rideDate">Date</label>
      <input type="date" v-model="editedRide.rideDate" id="rideDate" required />
      <ButtonComponent>Save</ButtonComponent>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Ride } from '@/data/Ride'
import editRide from '@/data/requests/editRide'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from './ButtonComponent.vue';

const router = useRouter()

const props = defineProps({
  ride: Object as () => Ride
})

const editedRide = reactive({
  id: props.ride!.id,
  rideName: props.ride!.rideName,
  goalDistanceMeters: props.ride!.goalDistanceMeters,
  totalDistanceMeters: props.ride!.totalDistanceMeters,
  rideDurationMinutes: props.ride!.rideDurationMinutes,
  rideDate: props.ride!.rideDate
})

const handleEditRide = async () => {
  if (editedRide) {
    await editRide(editedRide.id, editedRide)
    router.push(`/`)
  }
}
</script>

<style scoped></style>
