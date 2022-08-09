<template>
  <div class="border-r border-indigo-500 h-[calc(100vh_-_56px)]">
    <div class="px-2 pt-2">
      <input
        type="text"
        placeholder="Buscar entradas"
        class="text-indigo-900 rounded-md"
      />
    </div>
    <div class="mt-3 scrollbar h-[calc(100vh_-_120px)] overflow-y-auto dev">
      <div>
        <Entry
          v-for="item in 20"
          :key="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Entry from '../components/DayBookEntry.vue'
</script>

<style lang="scss" scoped></style>
