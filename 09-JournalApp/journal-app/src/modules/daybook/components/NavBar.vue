<template>
  <div class="rounded-md shadow-md navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <button class="text-xl normal-case btn btn-ghost">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="inline-block w-10 mr-3 text-right"
          @click="goToHome()"
        />
        DayBook
      </button>
    </div>
    <div class="navbar-end">
      <button class="gap-2 btn btn-primary">
        <Icon
          icon="material-symbols:exit-to-app-rounded"
          :inline="true"
          class="w-8 h-8"
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
