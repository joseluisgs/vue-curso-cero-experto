 # Introducción a Vue.js
[Vue.js](https://vuejs.org/) es un framework progresivo que te permite desde usarlo con CDN como sustituto a jQuery, hasta usarlo con una aplicación completa, usando reactividad, sus propias stores modularizada en componentes.

En esta sección veremos las bases de Vue.js y como usarlo como sustituto a jQuery o para dar interactividad a nuestra web.
- [Introducción a Vue.js](#introducción-a-vuejs)
  - [Puntos interesantes](#puntos-interesantes)
  - [Instalación y montaje](#instalación-y-montaje)
  - [Representación declarativa](#representación-declarativa)
  - [Estilos de uso: Options vs Composition](#estilos-de-uso-options-vs-composition)
  - [Representación del estado: data](#representación-del-estado-data)
  - [Introducción a los eventos: métodos y v-on](#introducción-a-los-eventos-métodos-y-v-on)
  - [Renderizado de listas o repeticiones: v-for](#renderizado-de-listas-o-repeticiones-v-for)
  - [Enlazando reactividad con formularios: v-model](#enlazando-reactividad-con-formularios-v-model)

## Puntos interesantes
Algunos puntos de interes que podemos observar en Vue.js son:
- fácil de iniciar 
- versátil y escalable 
- rendimiento en el DOM (más rápido que React y Angular)
- ecosistema: vite, pinia, vue router, vitest, cypres, vue utils, quasar...
- progresiva: lo tienes todo y lo agregas según te haga falta.

## Instalación y montaje
Podemos usar Vue.js desde el CDN https://unpkg.com/vue@next. A partir de aquí, creamos nuestro script app.js, y en la web decimos que parte de la web (div) queremos que controle.

## Representación declarativa
Podemos hacer [interpolación de texto](https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation) mediante sintaxis moustache. Todo tendrá efecto en en el DIV que controlamos.
```html
  <h1>{{ title }}</h1>
  <p>{{ message }}</p>
```

## Estilos de uso: Options vs Composition
Cuando usamos Vue.js tenemos [dos estilos](https://vuejs.org/guide/introduction.html#api-styles), Options API y Composition API. Cada una será más adecuada según el proyecto. Comenzaremos con Options API y poco a poco iremos al Composition API.

## Representación del estado: data
Podemos representado un estado y reaccionar reactivamente bajo el objeto [data](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state)
```js
  data() {
    return {
      message: "Hola Vue :)"
    }
  },
```

## Introducción a los eventos: métodos y v-on 
Podemos usar [eventos](https://vuejs.org/guide/essentials/event-handling.html)  y reaccionar reactivamente.
Los eventos se manejan con la directiva v-on:evento, pero se puede simplificar usando @evento
```js
  methods: {
    onClick() {
      this.message = "Has pulsado el botón :)"
    }
  }
```
```html
  <button v-on:click="handleClick">Click me!</button>
  <button @click="handleClick">Click me!</button>
```

## Renderizado de listas o repeticiones: v-for
Podemos renderizar una lista de elementos con la directiva [v-for](https://vuejs.org/api/built-in-directives.html#v-for):
```html
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
```
## Enlazando reactividad con formularios: v-model 
Podemos enlazar reactividad con formularios con la directiva [v-model](https://vuejs.org/api/built-in-directives.html#v-model).
```html
  <input type="text" v-model="message">
```