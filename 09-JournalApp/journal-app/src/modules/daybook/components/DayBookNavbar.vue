<template>
  <div class="navbar bg-primary text-primary-content rounded-md">
    <div class="navbar-start">
      <button class="btn btn-ghost normal-case text-xl">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="w-10 mr-3 inline-block text-right"
        />
        DayBook
      </button>
    </div>
    <div class="navbar-end">
      <button class="btn btn-secondary btn-outline gap-2 text-center">
        <Icon
          icon="mdi:logout"
          class="h-6 w-6 text-indigo-700 hover:text-indigo-200 cursor-pointer"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped></style>
