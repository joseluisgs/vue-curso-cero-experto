<template>
  <div class="flex flex-col h-full dev">
    <div class="flex flex-row items-center justify-center flex-1 dev">
      <h1 class="text-3xl font-bold text-primary">No hay nada seleccionado</h1>
    </div>
    <FavButton class="self-end w-16 h-16 my-10 dev" />
  </div>
</template>

<script setup>
  import FavButton from '@/modules/daybook/components/DayBookFabButton.vue'
</script>

<style lang="scss" scoped></style>

<!-- <template>
  <div class="flex flex-col h-full dev">
    <div class="flex flex-row items-center justify-center flex-1 dev">
      <h1 class="text-3xl font-bold text-primary">No hay nada seleccionado</h1>
    </div>
    <FavButton class="self-end w-16 h-16 my-10 dev" />
  </div>
</template>

<script setup>
  import FavButton from '@/modules/daybook/components/DayBookFabButton.vue'
</script>

<style lang="scss" scoped></style> -->
