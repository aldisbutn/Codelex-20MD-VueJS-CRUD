<template>
  <MovingClouds/>
  <div class="aboutWrapper">
    <h2 class="aboutHeading" style="text-align: center">About Pedal Track App</h2>
    <br>
    <p class="aboutParagraph">
      Welcome to Pedal Track – the ultimate app for effortless bike ride tracking! Developed by
      Aldis Poga using the power of Vue.js, Pedal Track is your companion for achieving biking goals
      and enhancing your cycling experience.
    </p>
    <br>
    <h3 class="aboutHeading">Key Features:</h3>
    <p class="aboutParagraph">
      Track Your Pedals: Seamlessly add your bike rides with just a few taps. Input key details like
      ride name, goal distance, total distance, and ride duration. <br />
      Goal Progress: Set and conquer your biking goals with Pedal Track. Receive timely
      notifications about goal achievements and personalized insights to keep you motivated. <br />
      Average Speed Insight: Curious about your pedal prowess? Pedal Track automatically calculates
      the average speed of your rides, providing a valuable metric for your biking journey.
    </p>
    <br>
    <h3 class="aboutHeading">Why Pedal Track:</h3>
    <p class="aboutParagraph">
      Intuitive Design: Pedal Track is designed with you in mind. The user-friendly interface
      ensures a smooth experience for bikers of all levels. <br> Data-driven Motivation: Gain meaningful
      insights into your biking performance. Whether you're a leisure rider or a fitness enthusiast,
      Pedal Track delivers the data you need. <br> Crafted by Aldis Poga: Developed with expertise using
      Vue.js, Pedal Track reflects a seamless blend of technology and user-centric design.
    </p>
    <br>
    <h3 class="aboutHeading">Get Pedaling:</h3>
    <p class="aboutParagraph">
      Ready to revolutionize your biking routine? <br> Download Pedal Track now and embark on a journey
      of personalized ride tracking and goal attainment!
    </p>
  </div>
</template>

<script setup lang="ts">
import MovingClouds from '@/components/MovingClouds.vue';
</script>

<style scoped>
.aboutWrapper {
  width: 100%;
  max-width: 800px;
  margin: 50px 0 50px 0;
}

.aboutHeading {
  color: #58c2fb;
}

.aboutParagraph {
  color: #035784;
}
</style>
