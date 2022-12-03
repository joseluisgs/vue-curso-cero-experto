<template>
  <div
    v-if="!placesStore.isUserLocationReady"
    class="loading-map flex-col"
  >
    <h1 class="text-center text-3xl font-bold text-secondary-focus">Espere por favor</h1>
    <h2 class="text text text-center font-bold">Cargando mapa</h2>
  </div>

  <div
    v-show="placesStore.isUserLocationReady"
    class="map-container"
    ref="mapElement"
  ></div>
  <p>
    loading: {{ placesStore.getLoading }} current pos: {{ placesStore.getCurrentLocation }} ready:
    {{ placesStore.isUserLocationReady }}
  </p>
</template>

<script setup lang="ts">
  import { usePlacesStore } from '@/stores/places'
  import { onMounted, ref } from 'vue'

  // creo la store
  const placesStore = usePlacesStore()

  // referencia al elemento del DOM
  const mapElement = ref<HTMLDivElement | null>(null)

  onMounted(() => {
    console.log('Mapa montado: ', mapElement.value)
  })
</script>

<style scoped>
  .loading-map {
    @apply fixed top-0 z-40 flex h-screen w-screen items-center justify-center bg-indigo-50/50 backdrop-blur-sm backdrop-filter;
  }
  .map-container {
    @apply fixed top-0 z-0 h-screen w-screen;
  }
</style>
