<template>
  <NavBar />
  <div class="flex flex-row py-2 mx-auto my-2 rounded-md shadow-lg">
    <div class="w-4/12">
      <EntryList />
    </div>
    <!-- Columnas, la primera empuja el máximo -->
    <div class="flex flex-col flex-1">
      <!-- Router View que ocupe todo lo que tenemos...-->
      <RouterView class="h-full" />
      <!-- Barra de herramientas con botón de nuevo -->
      <FavButton class="self-end w-12 my-3 shadow-md h12" />
    </div>
  </div>
</template>

<script setup>
  import NavBar from '../components/DayBookNavbar.vue'
  import EntryList from '../components/DayBookEntryList.vue'
  import { RouterView } from 'vue-router'
  import FavButton from '@/modules/daybook/components/DayBookFabButton.vue'
</script>

<style lang="scss" scoped></style>
