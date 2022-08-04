# Trabajando con SFC

Veremos como crear aplicaciones de mayor envergadura y trabajar con componentes [SFC](https://vuejs.org/api/sfc-spec.html#sfc-syntax-specification) usando Vite para Vue

- [Trabajando con SFC](#trabajando-con-sfc)
  - [Iniciando el proyecto](#iniciando-el-proyecto)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Ejecutando nuestra app](#ejecutando-nuestra-app)
    - [Project Setup](#project-setup)
    - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    - [Compile and Minify for Production](#compile-and-minify-for-production)
    - [Run Unit Tests with Vitest](#run-unit-tests-with-vitest)
    - [Lint with ESLint](#lint-with-eslint)
  - [Estructura de un fichero vue SFC](#estructura-de-un-fichero-vue-sfc)
  - [Primer componente](#primer-componente)
  - [Vue Developer Tools](#vue-developer-tools)
  - [Propiedades computadas](#propiedades-computadas)
  - [Propiedades](#propiedades)
  - [Watchers](#watchers)
  - [Eventos](#eventos)

## Iniciando el proyecto

Vamos a usar la [plantilla oficial](https://vuejs.org/guide/quick-start.html#with-build-tools) basada en [Vite](https://vitejs.dev/)(le da muchas más rapidez que el antiguo Vue CLI). Debemos tener la extensión [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) instalada

```bash
$ npm init vue@latest
```

Nos dará a elegir una plantilla de Vue.js

```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
```

Finalmente:

```bash
> cd <your-project-name>
> npm install
> npm run dev
```

En mi caso vamos a usar JS con Pinia, ESlint y Prettier.

## Estructura del proyecto

La estructura del proyecto es la siguiente:

- src: carpeta donde se encuentra el código de nuestra app
  - assets: carpeta donde se encuentran los assets o recurso estáticos de nuestra app
  - components: carpeta donde se encuentran los componentes de nuestra app. Puede tener recursos propios por cada componente o test de dichos componentes
  - views: carpeta donde se encuentran las vistas de nuestra app (opcional)
  - App.vue: archivo principal de nuestra app (como solo hay uno, no se necesita views)
  - main.js: código de inicialización de nuestra app
- test: carpeta donde se encuentran los tests de nuestra app (opcional)

## Ejecutando nuestra app

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Estructura de un fichero vue SFC

Un SFC o [Single File Component](https://vuejs.org/api/sfc-spec.html#sfc-syntax-specification) es una forma de encapsular los elementos de componente en base a su estructura, lógica y presentación.

- templete: plantilla de la vista con el DOM
- script: código de nuestro componente siguiendo Options API o Composition API
- style: estilo de nuestro componente, puede ser scooped lo cual este estilo solo se aplica al componente en cuestión

## Primer componente

Se crea un componente, es importante indicar su nombre, name. El nombre nos sirve para poder localizarlo con las Vue Developer Tools
Se importa en el destino el componente. Se incluye en el objeto components y se usa según el nombre con el que se ha importado.

```js
<template>
  <p>Init</p>
  <MyCounter />
</template>

<script>
import MyCounter from '@/components/MyCounter.vue'

export default {
  name: 'App',

  components: {
    MyCounter,
  },
}
</script>
```

## Vue Developer Tools

Nos ayudará a depurar nuestra app y cada uno de sus componentes: https://devtools.vuejs.org

## Propiedades computadas

Las [propiedades computadas](https://vuejs.org/guide/essentials/computed.html#computed-properties) son propiedades que se calculan en base a otras propiedades y su valor está cacheado en el componente. Al contrario que los métodos que siempre se ejecutan, las computed properties solo se ejecutan si detectan un cambio en el estado que les afectan, por ejemplo, si se cambia el valor de una propiedad. Muy útil para optimizar el rendimiento de nuestra app.

```js
computed: {
      counterSquare() {
        return this.counter * this.counter
      },
    },
```

## Propiedades

Las [propiedades](https://vuejs.org/guide/components/props.html#props) son las variables que se le pasan al componente. De esta manera podemos parametrizarlo para reutilizarlo. Pueden ser requeridas o no, además podemos tiparlas o darles un valor por defecto. también podemos validarlas.

```js
// Mis propiedades
    // Mis propiedades
    props: {
      // count: Number, podemos definirla en una sola linea o con más opciones...
      titulo: {
        type: String, // Tipo de dato
        default: 'Contador', // valor por defecto (opcional)
        required: true, // es obligatorio pasarselo (opcional)
      },
      started: {
        type: Number,
        default: 0,
        required: true,
        // Validaro es opcional
        validator(value) {
          return value >= 2
        },
      },
    },
```

## Watchers

Los [watchers](https://vuejs.org/guide/essentials/watchers.html) son métodos que se ejecutan cuando se detecta un cambio en el estado de nuestra app. Es decir son observables que reaccionan a los cambios en el estado de nuestra app y con ello mejoran la reactividad.

```js
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
          if (newQuestion.endsWith('?') && newQuestion.length > 1) {
            // Respuesta aleatoria
            console.log('Si tiene el signo de interrogación')
          }
      },
    },
```

## Eventos

De la misma manera que con las propiedades nos sirven para pasarles valores del padre al hijo, los [eventos](https://vuejs.org/guide/components/events.html) nos sirven para pasarles valores del hijo al padre. Usaremos emits

```js
// desde el componente hijo que emite el evento
// eventos que emito hay qeu anunciarlos
emits: ['question-response'],
  //...
  // Mandamos el evento y su parámetro, si lo hay
  this.$emit('question-response', this.answer)
```

````js
// desde el padre lo recogemos, como un evento normal y lo procesamos
<Indecision @question-response="callbackQuestionResponse" />
//...
methods: {
      callbackQuestionResponse(data) {
        console.log('He recibido el evento: ', data)
      },
    },
    ```

````
