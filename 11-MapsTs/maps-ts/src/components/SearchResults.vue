<template>
  <div
    class="alert alert-info my-2 shadow-lg"
    v-if="placesStore.getLoading"
  >
    <div>
      <Icon
        icon="material-symbols:search"
        class="h-5 w-5"
      />
      <span>Buscando lugares</span>
    </div>
  </div>
  <ul
    class="divide-y divide-primary-focus p-1"
    v-else-if="placesStore.getPlaces.length > 0"
  >
    <li
      v-for="place in placesStore.getPlaces"
      :key="place.id"
      class="lista-item"
    >
      <h5 class="font-medium">{{ place.text_es }}</h5>
      <p class="text-xs">{{ place.place_name_es }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { usePlacesStore } from '@/stores/places'
  import { Icon } from '@iconify/vue'

  const placesStore = usePlacesStore()
</script>

<style scoped>
  .lista-item {
    @apply cursor-pointer border-primary p-2;
  }
  li.lista-item:active {
    @apply rounded bg-primary-focus text-primary-content;
  }
</style>
