<template>
  <main>
    <MapView />
    <p>
      loading: {{ placesStore.getLoading }} current pos: {{ placesStore.getCurrentLocation }} ready:
      {{ placesStore.isUserLocationReady }}
    </p>
  </main>
</template>

<script setup lang="ts">
  import MapView from '@/components/MapView.vue'
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
