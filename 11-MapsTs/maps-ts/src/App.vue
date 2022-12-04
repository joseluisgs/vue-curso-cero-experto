<template>
  <img
    alt="Vue logo"
    class="logo"
    src="@/assets/images/logo.png"
    width="50"
    height="50"
  />

  <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->

  <RouterView />
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<style scoped>
  .logo {
    @apply fixed right-5 bottom-5 z-40 h-10 w-10;
  }
</style>
