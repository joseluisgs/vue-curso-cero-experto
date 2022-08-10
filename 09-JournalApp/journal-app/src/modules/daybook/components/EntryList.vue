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
        <!-- Animaciones -->
        <transition-group name="list-complete">
          <EntryItem
            v-for="item in 200"
            :key="item"
            @click="goToEntry(item)"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
  import EntryItem from '../components/EntryItem.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goToEntry = (item) => {
    router.push({ name: 'daybook-entry', params: { id: 10 } })
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
