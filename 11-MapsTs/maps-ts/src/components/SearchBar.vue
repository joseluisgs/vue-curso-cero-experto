<template>
  <div
    class="search-container fixed top-10 left-10 z-50 max-w-xs rounded-lg bg-primary-content p-3 shadow-lg"
  >
    <input
      type="text"
      placeholder="Buscar"
      class="input-bordered input-primary input max-w-xs bg-primary-content"
      @input.prevent="inputText"
      v-model.trim="searchText"
    />
    <SearchResults />
  </div>
</template>

<script setup lang="ts">
  import { searchApi } from '@/apis'
  import SearchResults from '@/components/SearchResults.vue'
  import type { PlacesResponse } from '@/interfaces/PlacesResponse'
  import { usePlacesStore } from '@/stores/places'
  import debounce from 'lodash/debounce'
  import { ref } from 'vue'
  import type { Feature } from '../interfaces/PlacesResponse'

  const placesStore = usePlacesStore()

  const searchText = ref('')
  const inputText = debounce(() => {
    //console.log('searchText:', searchText.value)
    console.log('searchText:', searchText.value)
    searchPlacesByTerm()
  }, 500)

  const searchPlacesByTerm = async () => {
    const places: Feature[] = []
    if (searchText.value.length > 0) {
      const response = await searchApi.get<PlacesResponse>(`/${searchText.value}.json`, {
        params: {
          proximity: placesStore.getCurrentLocation?.join(','),
        },
      })
      response.data.features.forEach((place) => {
        places.push(place)
      })
    }
    console.log('places:', places)
  }
</script>

<style scoped>
  .lista-item {
    @apply cursor-pointer border-primary p-2;
  }
  li.lista-item:active {
    @apply rounded bg-primary-focus text-primary-content;
  }
</style>
