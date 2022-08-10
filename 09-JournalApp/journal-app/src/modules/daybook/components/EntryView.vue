<template>
  <!-- Transicciones me pidde un solo div!!! -->
  <transition
    name="fade"
    mode="out-in"
  >
    <div>
      <div class="flex h-20 flex-row items-center justify-between p-2">
        <div>
          <span class="text-lg font-bold text-primary">09</span>
          <span class="mx-2 text-lg font-semibold text-base-content">Agosto</span>
          <span class="mx-1 text-lg font-light text-base-content">2022, </span>
          <span class="mx-1 text-lg font-light text-base-content">martes.</span>
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
          placeholder="¿Qué sucedió hoy?"
          class="ext-base-content textarea textarea-primary my-2 h-full w-full rounded-md bg-base-100"
        ></textarea>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/San_Juans_north_of_Durango.jpg"
        alt="imagen"
        class="fixed right-10 bottom-32 m-2 w-1/5 rounded-lg border-4 border-base-200 object-cover shadow-xl"
      />
      <FavButton
        icon="fa-regular:save"
        class="fixed right-10 bottom-14 h-12 w-12 shadow-md"
      />
    </div>
  </transition>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  import FavButton from '@/components/FabButton.vue'
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
