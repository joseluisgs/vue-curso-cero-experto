<template>
  <!-- Transicciones me pidde un solo div!!! -->
  <transition
    name="fade"
    mode="out-in"
  >
    <div v-if="myEntry">
      <div class="flex h-20 flex-row items-center justify-between p-2">
        <div>
          <span class="text-lg font-bold text-primary">{{ entryDate.day }}</span>
          <span class="mx-2 text-lg font-semibold text-base-content">{{ entryDate.month }}</span>
          <span class="mx-1 text-lg font-light text-base-content">{{ entryDate.year }}, </span>
          <span class="mx-1 text-lg font-light text-base-content">{{ entryDate.dayOfWeek }}.</span>
        </div>
        <div>
          <button class="btn btn-error mx-2 gap-2">
            <Icon
              icon="fa:trash"
              :inline="true"
              class="h-5 w-5"
            />
            Borrar
          </button>
          <button class="btn btn-primary mx-2 gap-2">
            <Icon
              icon="fa:upload"
              :inline="true"
              class="h-5 w-5"
            />
            Subir foto
          </button>
        </div>
      </div>
      <hr class="border-t border-primary" />
      <div class="flex h-full flex-col px-3">
        <textarea
          v-model.trim="myEntry.text"
          placeholder="¿Qué sucedió hoy?"
          class="ext-base-content textarea textarea-primary my-2 h-full w-full rounded-md bg-base-100"
        ></textarea>
      </div>
      <img
        :src="myEntry.picture"
        alt="imagen"
        class="fixed right-10 bottom-32 m-2 w-48 rounded-lg border-4 border-base-200 object-cover shadow-xl"
      />
      <FavButton
        icon="fa-regular:save"
        class="fixed right-10 bottom-14 h-12 w-12 shadow-md"
        @click="saveEntry()"
      />
    </div>
  </transition>
</template>

<script setup>
  import FavButton from '@/components/FabButton.vue'
  import getDateParsered from '@/helpers/dateparser.js'
  import { Icon } from '@iconify/vue'
  import { computed, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import JournalStore from '../stores/journal'

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })

  const router = useRouter()
  const journalStore = JournalStore()

  const myEntry = ref(null)

  const loadEntry = () => {
    myEntry.value = journalStore.getEntryById(props.id)
    if (!myEntry.value) {
      router.push({ name: 'daybook-no-entry' })
    }
  }

  // Y cargamos la entrada
  loadEntry()

  const saveEntry = async () => {
    console.log('saveEntry')
  }

  // La fecha es computada
  const entryDate = computed(() => {
    return getDateParsered(myEntry.value.date)
  })

  // Compruebo que existe la entrada añado un watcher!!
  watch(
    () => props.id,
    () => {
      loadEntry()
    }
  )

  // Observamos el id y sus cambios
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
