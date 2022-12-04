<template>
  <div
    class="search-container fixed top-10 left-10 z-50 max-w-xs rounded-lg bg-primary-content p-3 shadow-lg"
  >
    <input
      type="text"
      placeholder="Buscar"
      class="input-bordered input-primary input max-w-xs bg-primary-content"
      @input="inputText"
      v-model="searchText"
    />
    <SearchResults />
  </div>
</template>

<script setup lang="ts">
  import SearchResults from '@/components/SearchResults.vue'
  import debounce from 'lodash/debounce'
  import { ref } from 'vue'

  const searchText = ref('')
  const inputText = debounce(() => console.log('searchText:', searchText.value), 500)
</script>

<style scoped>
  .lista-item {
    @apply cursor-pointer border-primary p-2;
  }
  li.lista-item:active {
    @apply rounded bg-primary-focus text-primary-content;
  }
</style>
