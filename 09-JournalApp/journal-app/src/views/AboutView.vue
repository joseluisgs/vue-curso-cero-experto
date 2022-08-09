<template>
  <!-- Si quiero poner una cosa en mi tema, solo debo ponerle
data-theme="dark" -->
  <div class="px-3 text-center rounded-lg shadow-md container-md py-4mx-auto shadow-gray-500">
    <article class="max-w-3xl mx-auto prose text-center">
      <h1 class="text-xl font-semibold text-gray-500 cursor-pointer hover:text-indigo-500">
        This is an about page
      </h1>

      <h1>Temas</h1>
      <div class="shadow-xl card card-side bg-base-100">
        <figure>
          <img
            src="https://placeimg.com/200/280/arch"
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Temas de colores</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div class="justify-end card-actions">
            <button class="btn btn-primary">Watch</button>
            <button class="btn btn-secondary">Watch</button>
          </div>
        </div>
      </div>
      <h2>¿Seguro?</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus quam harum ab
        dolorum laudantium perspiciatis dolores corporis commodi, a quidem. Possimus ipsum magnam
        repellendus ipsam laboriosam architecto mollitia consectetur?.
      </p>

      <button
        data-set-theme=""
        class="btn btn-primary btn-outline"
      >
        Default
      </button>
      <button
        data-set-theme="light"
        class="btn btn-primary"
      >
        Light
      </button>
      <button
        data-set-theme="dark"
        class="btn btn-secondary"
      >
        Dark
      </button>
      <button
        data-set-theme="lemonade"
        class="btn btn-warning"
      >
        Lemonade
      </button>
      <button
        data-set-theme="night"
        class="btn btn-accent"
      >
        Night
      </button>
      <button
        data-set-theme="joseluisgs"
        class="btn btn-success btn-outline"
      >
        JoseLuisGS
      </button>
    </article>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { themeChange } from 'theme-change'
  // Para cambiar de tema
  // https://github.com/saadeghi/theme-change
  onMounted(() => {
    themeChange(false)
  })
</script>

<style scooped>
  .btn {
    margin: 10px;
  }
</style>
