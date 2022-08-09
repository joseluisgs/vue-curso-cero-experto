<template>
  <div class="rounded-md navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <button class="text-xl normal-case btn btn-ghost">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="inline-block w-10 mr-3 text-right"
        />
        DayBook
      </button>
    </div>
    <div class="navbar-end">
      <button class="gap-2 text-center btn btn-secondary btn-outline">
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
</script>

<style lang="scss" scoped></style>
