<template>
  <div
    data-theme="joseluisgs"
    class="container px-3 py-4 mx-auto text-center rounded-lg shadow-xl"
  >
    <h1 class="text-xl font-semibold text-gray-500 cursor-pointer hover:text-indigo-500">
      This is an home page
    </h1>
    <button
      class="btn btn-primary"
      @click="goToDaybook()"
    >
      DayBook
    </button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success btn-outline">Success</button>
    <article class="mx-auto prose text-center">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus quam harum ab
        dolorum laudantium perspiciatis dolores corporis commodi, a quidem. Possimus ipsum magnam
        repellendus ipsam laboriosam architecto mollitia consectetur?.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eveniet magni deleniti
        eius. Nisi ipsa accusantium voluptatem quis unde sunt, ratione itaque eius atque quia odio
        ab aperiam explicabo! Laboriosam!.
      </p>
      <!-- ... -->
    </article>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goToDaybook = () => router.push({ name: 'daybook' })
</script>

<style scooped>
  .btn {
    margin: 10px;
  }
</style>
