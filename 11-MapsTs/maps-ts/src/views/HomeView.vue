<template>
  <main>
    <MapView />
  </main>
</template>

<script setup lang="ts">
  import MapView from '@/components/MapView.vue'
  import { usePlacesStore } from '@/stores/places'

  // creo la store
  const placesStore = usePlacesStore()

  const mapToken = import.meta.env.VITE_MAP_TOKEN

  // engancho la posición actual
  if (!placesStore.isUserLocationReady) {
    console.log('Getting user location')
    placesStore.getInitialLocation()
  }
</script>

<style scoped></style>
