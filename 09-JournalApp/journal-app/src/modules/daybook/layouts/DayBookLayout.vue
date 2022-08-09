<template>
  <NavBar />
  <div class="container flex mx-auto my-5 py-5 shadow-md rounded-md">
    <div class="w-4/12 dev">
      <EntryList />
    </div>
    <div class="flex-1 text-center dev">
      Router
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import NavBar from '../components/DayBookNavbar.vue'
  import EntryList from '../components/DayBookEntryList.vue'
  import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped></style>
