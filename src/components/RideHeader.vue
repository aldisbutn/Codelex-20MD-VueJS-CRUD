<template>
  <header class="header">
    <nav class="navWrapper">
      <img src="../assets/logo.svg" alt="" />
      <ul class="navLinks">
        <RouterLink to="/" class="navLink"><h4>Home</h4></RouterLink>
        <RouterLink to="/about" class="navLink"><h4>About</h4></RouterLink>
        <RouterLink to="/create" class="navLink"><h4>Create</h4></RouterLink>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  background-color: #524302;
  width: 100%;
  padding: 10px 15px;
  position: sticky;
  top: 0;
  z-index: 9999;
}

.navWrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.navLinks {
  display: flex;
  gap: 25px;
}

.navLink {
  color: #fbdc58;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
}

.navLink:hover, .router-link-active {
  color: #846c03;
}
</style>
