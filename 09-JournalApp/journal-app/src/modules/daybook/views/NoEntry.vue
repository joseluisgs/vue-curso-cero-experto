<template>
  <!-- Transicciones me pidde un solo div!!! -->
  <transition
    name="fade"
    mode="out-in"
  >
    <div class="flex flex-col items-center justify-center h-full">
      <h1 class="text-3xl font-bold text-primary">No hay nada seleccionado</h1>
      <Icon
        icon="codicon:note"
        class="w-16 h-16 text-primary"
      />
    </div>
  </transition>
  <FavButton
    icon="akar-icons:plus"
    class="self-end w-12 h-12 my-3 shadow-md"
  />
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  import FavButton from '@/components/FabButton.vue'
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<!-- Dieño del curso!!! -->
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
