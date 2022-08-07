<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <!-- Si quiero usar el nombre de las vistas y no su url-->
    <RouterLink :to="{ name: 'home' }">Home Named</RouterLink>
    <RouterLink :to="{ name: 'pokemon-list' }">Pokemon List</RouterLink>
    <RouterLink to="/pokemon/2">Pokemon 1</RouterLink>
    <RouterLink to="/pokemon/about">About Pokemon</RouterLink>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>

<style scoped>
  nav {
    padding: 0 30px;
  }
  nav a {
    color: #2c3e50;
    font-weight: bold;
    margin: 0 10px;
  }
</style>
