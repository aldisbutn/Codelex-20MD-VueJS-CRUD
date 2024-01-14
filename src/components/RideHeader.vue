<template>
  <header>
    <nav class="navWrapper">
      <div class="logoWrapper">
        <h1>LOGO</h1>
      </div>
      <ul class="navLinks">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/create">Create</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
