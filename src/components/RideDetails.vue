<template>
  <main class="detailsWrapper">
    <div v-if="state.ride" class="detailsViewWrapper">
      <h1 class="detailsHeading">{{ state.ride.rideName }}</h1>
      <h2 class="dateHeading">Ride date: {{ state.ride.rideDate }}</h2>

      <div class="distanceWrapper">
        <h2 class="distanceHeading">
          Total distance {{ (state.ride.totalDistanceMeters! / 1000).toFixed(1) }} kilometers
        </h2>
        <h2 class="distanceHeading">|</h2>
        <h2 class="distanceHeading">
          Goal distance {{ (state.ride.goalDistanceMeters! / 1000).toFixed(1) }} kilometers
        </h2>
      </div>

      <h2 v-if="state.distanceGoalAchieved" class="distanceAchievedText">
        Congratulations! You surpassed your goal by
        {{
          calculateDistanceDifferenceInKM(
            state.ride.totalDistanceMeters!,
            state.ride.goalDistanceMeters!
          )
        }}
        kilometers. Woohooo!
      </h2>
      <h2 v-else class="distanceFailedText">
        Oops! It looks like you fell short of your goal by
        {{
          calculateDistanceDifferenceInKM(
            state.ride.totalDistanceMeters!,
            state.ride.goalDistanceMeters!
          )
        }}
        kilometers. <br />
        Get back on the bike!
      </h2>
      <h2 class="speedHeading">
        Average speed
        {{
          calculateAverageSpeedKMH(state.ride.rideDurationMinutes!, state.ride.totalDistanceMeters!)
        }}
        Km/H
      </h2>
      <div class="buttonWrapper">
        <ButtonComponent class="button-red" :onClick="() => handleDeleteRide()"
          >Delete ride</ButtonComponent
        >
        <ButtonComponent class="button-yellow" :onClick="() => (state.editMode = !state.editMode)"
          >Edit ride</ButtonComponent
        >
      </div>
    </div>

    <Transition>
    <template v-if="state.editMode" >
        <EditRide :ride="state.ride" />
      </template>
    </Transition>
  </main>
</template>

<script setup lang="ts">
import type { Ride } from '@/data/Ride'
import deleteRide from '@/data/requests/deleteRide'
import getRide from '@/data/requests/getRide'
import router from '@/router'
import { onMounted, reactive } from 'vue'
import EditRide from './EditRide.vue'
import ButtonComponent from './ButtonComponent.vue'
import { useToast } from "vue-toastification";

const toast = useToast();
const id = String(router.currentRoute.value.params.id)

const state = reactive({
  ride: {} as Ride,
  editMode: false,
  distanceGoalAchieved: false
})

const calculateDistanceDifferenceInKM = (total: number, goal: number) => {
  let difference = null
  difference = total - goal
  if (difference >= 0) {
    state.distanceGoalAchieved = true
  }
  return Math.abs(difference / 1000).toFixed(1)
}

const calculateAverageSpeedKMH = (time: number, distance: number) => {
  const timeInHours = time / 60
  const distanceInKM = distance / 1000
  const averageSpeedKMH = distanceInKM / timeInHours
  return averageSpeedKMH.toFixed(1)
}

const handleGetRide = async () => {
  const response = await getRide(id)
  state.ride = response
}

const handleDeleteRide = async () => {
  if (state.ride?.id) {
    await deleteRide(state.ride.id)
    toast.success('Ride deleted!')
    router.push('/')
  }
}

onMounted(() => {
  handleGetRide()
})
</script>

<style scoped>
.detailsWrapper {
  width: 100%;
  max-width: 800px;
  margin: 50px 0 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detailsViewWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #192a34;
  background-image: url(../assets/bikesBG.png);
  background-repeat: repeat;
  background-size: contain;
  border: solid #294656;
  border-radius: 5px;
  padding: 10px;
  gap: 20px;
}

.distanceWrapper {
  display: flex;
  gap: 10px;
}

.buttonWrapper {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.distanceHeading {
  color: #58c2fb;
}
.distanceFailedText {
  color: #fb5858;
  text-align: center;
}
.distanceAchievedText {
  color: #58fb58;
  text-align: center;
}

.detailsHeading {
  color: #58c2fb;
  font-size: 60px;
}

.dateHeading {
  color: #035784;
  font-size: 15px;
  background-color: #fbdc58;
  padding: 3px;
  border-radius: 0 2.5px 0 5px;
  position: absolute;
  top: 1px;
  right: 1px;
}

.speedHeading {
  color: #58c2fb;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
