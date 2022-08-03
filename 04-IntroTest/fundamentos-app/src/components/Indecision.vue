import Indecision from '@/components/Indecision.vue';
<template>
  <!-- Hacemos binding con image -->
  <img
    v-if="image"
    :src="image"
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
      <h2 v-if="isValidQuestion">{{ question }}</h2>
      <h1>{{ answer }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Indecision',
    // eventos que emito
    emits: ['question-response'],

    // Mi estado
    data() {
      return {
        question: '',
        answer: null,
        image: '',
        isValidQuestion: false,
      }
    },

    // Mis métodos
    methods: {
      async getAnswer() {
        this.answer = 'Pensando...'
        // Obtenemos una respuesta y desestructuramos
        const response = await fetch('https://yesno.wtf/api')
        const { answer, image } = await response.json()
        this.answer = answer === 'yes' ? 'Sí' : 'No'
        this.image = image
        // Mandamos el evento y su parámetro, si lo hay
        this.$emit('question-response', this.answer)
      },
    },

    // Mis watchers
    watch: {
      // Observamos question
      question(newQuestion) {
        // Si la pregunta cambia
        // console.log(oldQuestion, newQuestion)
        // Si la pregunta termina con un signo de interrogación y tiene más que eso :)
        this.isValidQuestion = false
        if (newQuestion.endsWith('?') && newQuestion.length > 1) {
          this.isValidQuestion = true
          this.getAnswer()
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
    margin: 1rem;
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
