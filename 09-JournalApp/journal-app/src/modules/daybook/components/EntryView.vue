<template>
<!-- Transicciones me pidde un solo div!!! -->
  <transition
    name="fade"
    mode="out-in"
  >
    <div>
      <div class="flex flex-row items-center justify-between h-20 p-2 dev">
        <div>
          <span class="text-lg font-bold text-primary">09</span>
          <span class="mx-2 text-lg font-semibold text-base-content">Agosto</span>
          <span class="mx-1 text-lg font-light text-base-content">2022, </span>
          <span class="mx-1 text-lg font-light text-base-content">martes</span>
        </div>
        <div>
          <button class="gap-2 mx-2 btn btn-error">
            <Icon
              icon="fa:trash"
              :inline="true"
              class="w-5 h-5"
            />
            Borrar
          </button>
          <button class="gap-2 mx-2 btn btn-primary">
            <Icon
              icon="fa:upload"
              :inline="true"
              class="w-5 h-5"
            />
            Subir foto
          </button>
        </div>
      </div>
      <hr />
      <div class="flex flex-col h-full px-3 dev">
        <textarea
          placeholder="¿Qué sucedió hoy?"
          class="w-full h-full my-2 rounded-md ext-base-content bg-base-100 textarea textarea-primary"
        ></textarea>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/San_Juans_north_of_Durango.jpg"
        alt="imagen"
        class="fixed object-cover w-1/5 m-2 border-4 rounded-lg shadow-xl border-base-200 right-10 bottom-32"
      />
      <FavButton
        icon="fa-regular:save"
        class="fixed w-12 h-12 shadow-md right-10 bottom-14"
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
