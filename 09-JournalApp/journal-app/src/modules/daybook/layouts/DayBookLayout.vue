<template>
  <NavBar />
  <div class="flex flex-row py-2 mx-auto my-2 rounded-md shadow-lg">
    <div class="w-4/12">
      <EntryList />
    </div>
    <!-- Columnas, la primera empuja el máximo -->
    <div class="flex flex-col flex-1">
      <!-- Router View que ocupe todo lo que tenemos...-->
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
