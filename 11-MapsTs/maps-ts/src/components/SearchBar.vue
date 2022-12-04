<template>
  <div
    class="search-container fixed top-5 left-5 z-50 max-w-xs rounded-lg bg-primary-content p-3 shadow-lg"
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
  import SearchResults from '@/components/SearchResults.vue'
  import { usePlacesStore } from '@/stores/places'
  import debounce from 'lodash/debounce'
  import { ref } from 'vue'

  const placesStore = usePlacesStore()

  const searchText = ref('')
  const inputText = debounce(async () => {
    //console.log('searchText:', searchText.value)
    await placesStore.searchPlacesByTerm(searchText.value)
    console.log('places', placesStore.getPlaces)
  }, 500)
</script>

<style scoped>
  .lista-item {
    @apply cursor-pointer border-primary p-2;
  }
  li.lista-item:active {
    @apply rounded bg-primary-focus text-primary-content;
  }
</style>
