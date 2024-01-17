<template>
  <div v-if="props.ride" class="formWrapper">
    <form class="form" @submit.prevent="handleEditRide">
      <LabelAndInput v-model="editedRide.rideName" label="Name your ride" placeholder="My first ride" />
      <LabelAndInput v-model="editedRide.goalDistanceMeters" label="Goal distance - meters" placeholder="200" />
      <LabelAndInput v-model="editedRide.totalDistanceMeters" label="Total distance - meters" placeholder="201" />
      <LabelAndInput v-model="editedRide.rideDurationMinutes" label="Duration - minutes" placeholder="30" />
      <LabelAndInput v-model="editedRide.rideDate" label="Date of the ride" type="date" />
      <ButtonComponent class="button-green">Save</ButtonComponent>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Ride } from '@/data/Ride'
import editRide from '@/data/requests/editRide'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import ButtonComponent from './ButtonComponent.vue'
import LabelAndInput from './LabelAndInput.vue'
import { useToast } from "vue-toastification";

const router = useRouter()
const toast = useToast();

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
  toast.success('Ride edited!')
  if (editedRide) {
    await editRide(editedRide.id, editedRide)
    router.go(0)
  }

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
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px
}
</style>
