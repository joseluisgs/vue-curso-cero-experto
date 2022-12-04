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
      :class="{ active: place.id === activePlace }"
      @click="onePlaceClick(place)"
    >
      <h5 class="font-medium">{{ place.text_es }}</h5>
      <p class="text-xs">{{ place.place_name_es }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import type { Feature } from '@/interfaces/PlacesResponse'
  import { useMapStore } from '@/stores/map'
  import { usePlacesStore } from '@/stores/places'
  import { Icon } from '@iconify/vue'
  import { ref } from 'vue'

  const placesStore = usePlacesStore()
  const mapStore = useMapStore()

  const activePlace = ref('')

  const onePlaceClick = (place: Feature) => {
    activePlace.value = place.id
    const [lng, lat] = place.center
    mapStore.getMap?.flyTo({
      center: [lng, lat],
      zoom: 15,
    })
  }
</script>

<style scoped>
  .lista-item {
    @apply cursor-pointer border-primary p-2 hover:rounded hover:bg-primary-focus hover:text-primary-content active:rounded active:bg-secondary-focus active:text-secondary-content;
  }
  .active {
    @apply rounded bg-secondary-focus text-secondary-content;
  }
</style>
