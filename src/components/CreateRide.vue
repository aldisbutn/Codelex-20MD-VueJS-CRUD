<template>
  <form class="inputWrapper" @submit.prevent="createRide">

    <label for="rideName">Ride name</label>
    <input type="text" v-model="ride.rideName" id="rideName" required />
    <label for="goalDistance">Goal distance</label>
    <input type="text" v-model="ride.goalDistanceMeters" id="goalDistance" required />
    <label for="totalDistance">Total distance</label>
    <input type="text" v-model="ride.totalDistanceMeters" id="totalDistance" required />
    <label for="rideDuration">Duration</label>
    <input type="text" v-model="ride.rideDurationMinutes" id="rideDuration" required />
    <label for="rideDate">Date</label>
    <input type="date" v-model="ride.rideDate" id="rideDate" required />
    <ButtonComponent>Add</ButtonComponent>
  </form>
</template>

<script setup lang="ts">
import postRide from '@/data/requests/postRide'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { uuid } from 'vue-uuid'
import ButtonComponent from './ButtonComponent.vue';

const router = useRouter()

const ride = reactive({
  id: uuid.v1(),
  rideName: '',
  goalDistanceMeters: '',
  totalDistanceMeters: '',
  rideDurationMinutes: '',
  rideDate: ''
})

const createRide = async () => {
  await postRide(ride)
  router.push('/')
}
</script>

<style scoped></style>
