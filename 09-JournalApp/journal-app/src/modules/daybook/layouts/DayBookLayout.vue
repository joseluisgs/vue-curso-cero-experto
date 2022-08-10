<template>
  <NavBar />
  <div class="mx-auto my-2 flex flex-row rounded-md py-2 shadow-lg">
    <div class="w-4/12">
      <EntryList />
    </div>
    <!-- Columnas, la primera empuja el máximo -->
    <div class="flex flex-1 flex-col">
      <!-- Router View que ocupe todo lo que tenemos...-->
      <RouterView />
    </div>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import EntryList from '../components/EntryList.vue'
  import NavBar from '../components/NavBar.vue'
</script>

<style lang="scss" scoped></style>
