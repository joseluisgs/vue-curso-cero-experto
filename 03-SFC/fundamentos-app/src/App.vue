<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- Utilizamos un componente y le pasamos datos en base a propiedades -->
      <HelloWorld msg="Hola Vue!" />
    </div>
  </header>
</template>

<!-- lo pasamos a Options API -->
<script>
  import HelloWorld from '@/components/HelloWorld'
  export default {
    // Mi nombre
    name: 'App',

    // Los componentes que uso
    components: {
      HelloWorld,
    },
  }
</script>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
