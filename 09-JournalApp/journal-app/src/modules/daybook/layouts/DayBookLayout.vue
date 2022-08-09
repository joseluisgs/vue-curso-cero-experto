<template>
  <NavBar />
  <div class="container flex flex-row py-2 mx-auto my-2 rounded-md shadow-md">
    <div class="w-4/12">
      <EntryList />
    </div>
    <div class="flex-1 text-center">
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
