<template>
  <div
    class="search-container fixed top-10 left-10 z-50 max-w-xs rounded-lg bg-primary-content p-3 shadow-lg"
  >
    <input
      type="text"
      placeholder="Buscar"
      class="input-bordered input-primary input max-w-xs bg-primary-content"
      v-model="searchText"
      @input="search"
    />
    <SearchResults />
  </div>
</template>

<script setup lang="ts">
  import SearchResults from '@/components/SearchResults.vue'
  import { ref } from 'vue'

  const searchText = ref('')

  const search = () => {
    console.log(searchText.value)
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
