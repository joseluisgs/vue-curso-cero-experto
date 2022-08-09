<template>
  <div class="border-r border-primary h-[calc(88vh)]">
    <div class="px-2 pt-2 mr-2">
      <input
        type="text"
        placeholder="Buscar entradas"
        class="w-full rounded-md text-base-content bg-base-100 input input-bordered input-primary"
      />
    </div>
    <div class="mt-3 scrollbar h-[calc(88vh_-_90px)] overflow-y-auto">
      <div>
        <EntryItem
          v-for="item in 200"
          :key="item"
          @click="goToEntry(item)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import EntryItem from '../components/DayBookEntryItem.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goToEntry = (item) => {
    router.push({ name: 'daybook-entry', params: { id: 10 } })
  }
</script>

<style lang="scss" scoped></style>
