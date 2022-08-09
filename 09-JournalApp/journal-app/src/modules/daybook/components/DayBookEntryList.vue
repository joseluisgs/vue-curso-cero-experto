<template>
  <div class="border-r border-primary h-[calc(88vh)]">
    <div class="px-2 pt-2">
      <input
        type="text"
        placeholder="Buscar entradas"
        class="w-full rounded-md text-base-content bg-base-100"
      />
    </div>
    <div class="mt-3 scrollbar h-[calc(88vh_-_90px)] overflow-y-auto">
      <div>
        <Entry
          v-for="item in 200"
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
