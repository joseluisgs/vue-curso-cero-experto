<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> &nbsp; <RouterLink to="/about">About</RouterLink> &nbsp;
    <!-- Si quiero usar el nombre de las vistas y no su url-->
    <RouterLink :to="{ name: 'home' }">Home Named</RouterLink> &nbsp;
  </nav>
  <h1>Pokemon</h1>
  <nav>
    <RouterLink :to="{ name: 'pokemon-list' }">List</RouterLink> &nbsp;
    <RouterLink to="/pokemon/about">About Pokemon</RouterLink> &nbsp;
    <RouterLink to="/pokemon/2">Pokemon 1</RouterLink> &nbsp;
  </nav>
  <!-- Si quiero cachear las vistas usar keep alive 
  <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
-->
  <RouterView />
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
