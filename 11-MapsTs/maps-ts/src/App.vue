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
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    @apply fixed right-10 bottom-10 w-10 h-10;
  }

  nav {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    @apply text-primary;
  }

  nav a.router-link-exact-active:hover {
    @apply text-primary;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
  }

  nav a:first-of-type {
    border: 0;
  }
</style>
