<template>
  <div class="formWrapper">
    <form class="form" @submit.prevent="createRide">
      <LabelAndInput v-model="ride.rideName" label="Name your ride" placeholder="My first ride" />
      <LabelAndInput v-model="ride.goalDistanceMeters" label="Goal distance - meters" placeholder="200" />
      <LabelAndInput v-model="ride.totalDistanceMeters" label="Total distance - meters" placeholder="201" />
      <LabelAndInput v-model="ride.rideDurationMinutes" label="Duration - minutes" placeholder="30" />
      <LabelAndInput v-model="ride.rideDate" label="Date of the ride" type="date" />
      <ButtonComponent class="button-green">Add</ButtonComponent>
    </form>
  </div>
</template>

<script setup lang="ts">
import postRide from '@/data/requests/postRide'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { uuid } from 'vue-uuid'
import ButtonComponent from './ButtonComponent.vue'
import LabelAndInput from './LabelAndInput.vue'
import { useToast } from "vue-toastification";

const router = useRouter()
const toast = useToast();

const ride = reactive({
  id: uuid.v1(),
  rideName: '',
  goalDistanceMeters: null,
  totalDistanceMeters: null,
  rideDurationMinutes: null,
  rideDate: ''
})

const createRide = async () => {
  await postRide(ride)
  toast.success('Ride created!')
  router.push('/')
}
</script>

<style scoped>
.formWrapper {
  width: 100%;
  max-width: 300px;
  background-color: #192a34;
  background-image: url(../assets/bikesBG.png);
  background-repeat: repeat;
  background-size: contain;
  border-radius: 5px;
  padding: 10px;
  border: solid #294656;
  align-self: center;
  margin: 50px 0 50px 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
