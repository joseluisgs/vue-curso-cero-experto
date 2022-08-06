# Juego de adivina Pokemon Composition API

Proyecto de juego adivina Pokemon con [Composition API](https://vuejs.org/api/composition-api-setup.html#basic-usage)

- [Juego de adivina Pokemon Composition API](#juego-de-adivina-pokemon-composition-api)
  - [Resumen](#resumen)
  - [Composition API](#composition-api)
    - [Estructura](#estructura)
    - [Reactividad](#reactividad)
    - [Referencias computadas](#referencias-computadas)
    - [Watcher](#watcher)
    - [Hooks de ciclo de vida](#hooks-de-ciclo-de-vida)
    - [Propiedades](#propiedades)
    - [Eventos](#eventos)
    - [Ejemplo Pokemon v1](#ejemplo-pokemon-v1)

## Resumen

Este juego adapta la Options API a [Composition API](https://vuejs.org/api/composition-api-setup.html#basic-usage) de Vue.js.

## Composition API

La Composition API es la [nueva forma](https://vuejs.org/guide/introduction.html#api-styles) en Vue.js desde la versión 3 para crear nuestros componentes. Es solo cuestión de estilos.

Options API se centra en el concepto de una "instancia de componente", que generalmente se alinea mejor con un modelo mental basado en clases para usuarios que provienen de entornos de lenguaje OOP. También es más amigable para principiantes al abstraer los detalles de reactividad y hacer cumplir la organización del código a través de grupos de opciones.

Composition API se centra en declarar variables de estado reactivas directamente en el ámbito de una función y componer el estado de varias funciones juntas para manejar la complejidad. Tiene una forma más libre y requiere una comprensión de cómo funciona la reactividad en Vue para ser utilizado de manera efectiva. A cambio, su flexibilidad permite patrones más poderosos para organizar y reutilizar la lógica.

Si es nuevo en Vue, te recomiendo:

Para propósitos de aprendizaje, elige el estilo que te parezca más fácil de entender. Una vez más, la mayoría de los conceptos básicos se comparten entre los dos estilos. Siempre puedes elegir el otro estilo más tarde.

Para uso en producción:

- Usa con la API de opciones si no está utilizando herramientas de compilación, o planea usar Vue principalmente en escenarios de baja complejidad.
- Elija Composición API + Componentes de un solo archivo si planea crear aplicaciones completas con Vue.

[Aquí una comparación](https://vuejs.org/guide/extras/composition-api-faq.html#more-flexible-code-organization)

### Estructura

A partir de ahora tenemos una función [setup](https://vuejs.org/api/composition-api-setup.html) que sirve de punto de entrada devolviendo (return) o exponiendo públicamente aquellos elementos que necesitamos en las vistas. Ademas importaremos aquellos elementos que necesitemos en todo momento (más eficiente el código).

```js
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // expose to template and other options API hooks
    return {
      count
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>
```

### Reactividad

Usaremos ref para crear [referencias reactivas](https://vuejs.org/api/reactivity-core.html) a elementos simples y reactive para crear referencias reactivas a elementos más complejos. Si usamos ref accedemos al valor en lectura y escritura bajo .value.

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) //
```

### Referencias computadas

Usaremos [computed](https://vuejs.org/api/reactivity-core.html#computed) para crear referencias computadas de solo lectura. también podemos hacer de escritura.

```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2
```

### Watcher

Tenemos de [distinto tipo](https://vuejs.org/api/reactivity-core.html#watch), permitiéndonos reaccionar mientras observamos cambios a variables de nuestro estado.

```js
const count = ref(0)
watch(count, (count, prevCount) => {
  console.log(count, prevCount)
})
```

### Hooks de ciclo de vida

Usaremos los siguientes [hooks](https://vuejs.org/api/composition-api-lifecycle.html#onmounted)

```js
<script setup>
import { ref, onMounted } from 'vue'

const el = ref()

onMounted(() => {
  el.value // <div>
})
</script>

<template>
  <div ref="el"></div>
</template>
```

### Propiedades

Usaremos las [propiedades](https://vuejs.org/guide/components/props.html), como siempre, para comunicarnos de padre a hijo.

```js
export default {
  props: ['foo'],
  setup(props) {
    // setup() receives props as the first argument.
    console.log(props.foo)
  },
}
```

### Eventos

Usaremos los [eventos](https://vuejs.org/guide/components/events.html#declaring-emitted-events) para comunicarnos de hijo a padre.

```js
export default {
  emits: ['inFocus', 'submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  },
}
```
### Ejemplo Pokemon v1
Puedes ver la aplicación de todos estos elementos en los distintos componentes de manera gradual (commit a commit)
