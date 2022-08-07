<template>
  <NavBar />

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
  import { RouterView } from 'vue-router'
  import { defineAsyncComponent } from 'vue'
  //Así lo iomporto normal
  // import NavBar from '@/modules/shared/components/NavBar.vue'
  // Asy lazy con script setup
  const NavBar = defineAsyncComponent(() => import('@/modules/shared/components/NavBar.vue'))
</script>

<style scoped></style>
