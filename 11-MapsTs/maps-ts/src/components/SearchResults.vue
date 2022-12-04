<template>
  <ul class="divide-y divide-primary-focus p-1">
    <li class="lista-item">
      <h5 class="font-medium">Nombre</h5>
      <p class="text-xs">Descripción del lugar</p>
    </li>

    <li class="lista-item">
      <h5 class="font-medium">Nombre</h5>
      <p class="text-xs">Descripción del lugar</p>
    </li>

    <li class="lista-item">
      <h5 class="font-medium">Nombre</h5>
      <p class="text-xs">Descripción del lugar</p>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style scoped>
  .lista-item {
    @apply cursor-pointer border-primary p-2;
  }
  li.lista-item:active {
    @apply rounded bg-primary-focus text-primary-content;
  }
</style>
