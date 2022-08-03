import Indecision from '@/components/Indecision.vue';
<template>
  <img
    src="https://via.placeholder.com/250"
    alt="bg"
  />
  <div class="bg-dark"></div>
  <div class="indecision-container">
    <input
      type="text"
      placeholder="Hazme una pregunta"
      v-model.trim="question"
    />
    <p>Recuerda terminar con un signo de interrogación (?)</p>
    <div>
      <h2>{{ question }}</h2>
      <h1>Si, No, .... pensando</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Indecision',
    // Mi estado
    data() {
      return {
        question: '',
      }
    },
    // Mis watchers
    watch: {
      // Observamos question
      question(newQuestion, oldQuestion) {
        // Si la pregunta cambia
        // console.log(oldQuestion, newQuestion)
        // Si la pregunta termina con un signo de interrogación
        if (newQuestion.endsWith('?')) {
          // Respuesta aleatoria
          console.log('Si tiene el signo de interrogación')
        }
      },
    },
  }
</script>

<style scoped>
  img,
  .bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
  }

  .bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .indecision-container {
    position: relative;
    z-index: 99;
  }

  input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
  }
  input:focus {
    outline: none;
  }

  p {
    color: white;
    font-size: 20px;
    margin-top: 0px;
  }

  h1,
  h2 {
    color: white;
  }

  h2 {
    margin-top: 150px;
  }
</style>
