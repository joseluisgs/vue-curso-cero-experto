<template>
  <div class="navbar rounded-md bg-primary text-primary-content shadow-md">
    <div class="navbar-start">
      <button class="btn btn-ghost text-xl normal-case">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="mr-3 inline-block w-10 text-right"
          @click="goToHome()"
        />
        DayBook
      </button>
    </div>
    <div class="navbar-end">
      <button class="btn btn-primary gap-2">
        <Icon
          icon="material-symbols:exit-to-app-rounded"
          :inline="true"
          class="h-8 w-8"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const goToHome = () => router.push({ name: 'home' })
</script>

<style lang="scss" scoped></style>
