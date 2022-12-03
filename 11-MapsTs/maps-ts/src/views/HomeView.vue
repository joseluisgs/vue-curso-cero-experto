<template>
  <main>
    <h1>This is a home page</h1>
  </main>
</template>

<script setup lang="ts">
  import { usePlacesStore } from '@/stores/places'

  // creo la store
  const placesStore = usePlacesStore()
  // engancho la posición actual
  if (!placesStore.isUserLocationReady) {
    console.log('Getting user location')
    placesStore.getInitialLocation()
  }
</script>

<style></style>
