<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> &nbsp; <RouterLink to="/about">About</RouterLink> &nbsp;
    <!-- Si quiero usar el nombre de las vistas y no su url-->
    <RouterLink :to="{ name: 'home' }">Home Named</RouterLink> &nbsp;
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

<style scoped></style>
