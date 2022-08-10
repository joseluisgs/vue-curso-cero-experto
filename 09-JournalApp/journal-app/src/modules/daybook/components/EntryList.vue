<template>
  <div class="h-[calc(88vh)] border-r border-primary">
    <div class="mr-2 px-2 pt-2">
      <input
        v-model.trim="searchTerm"
        type="text"
        placeholder="Buscar entradas"
        class="input input-bordered input-primary w-full rounded-md bg-base-100 text-base-content"
      />
    </div>
    <div class="scrollbar mt-3 h-[calc(88vh_-_90px)] overflow-y-auto">
      <div>
        <!-- Animaciones -->
        <transition-group name="list-complete">
          <EntryItem
            v-for="entry in entriesByTerm"
            :key="entry.id"
            :entry="entry"
            @click="goToEntry(entry)"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
  import EntryItem from '../components/EntryItem.vue'
  import { useRouter } from 'vue-router'
  import JournalStore from '../stores/journal'
  import { ref, computed } from 'vue'

  const router = useRouter()
  const journalStore = JournalStore()

  const searchTerm = ref('')

  const entriesByTerm = computed(() => journalStore.getEntriesByTerm(searchTerm.value))

  const goToEntry = (entry) => {
    router.push({ name: 'daybook-entry', params: { id: entry.id } })
  }
</script>

<style lang="scss" scoped>
  // https://vuejs.org/guide/built-ins/transition-group.html
  .list-complete-item {
    transition: all 0.8s ease;
  }
  .list-complete-enter-from,
  .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: relative;
  }
</style>
