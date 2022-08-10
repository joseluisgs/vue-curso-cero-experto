<template>
  <button class="shadow-lg btn btn-circle btn-primary">
    <Icon
      :icon="props.icon"
      class="w-6 h-6"
    />
  </button>
</template>

<script setup>
  import { Icon } from '@iconify/vue'
  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
  })
  // console.log('props', props.icon)
</script>

<style lang="scss" scoped></style>
