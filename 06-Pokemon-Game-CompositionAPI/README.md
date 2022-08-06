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
  - [Exposición](#exposición)
  - [Testing](#testing)
    - [Ejemplo Pokemon v1](#ejemplo-pokemon-v1)
    - [Consideraciones](#consideraciones)
  - [Script Setup](#script-setup)
  - [Eventos y Propiedades](#eventos-y-propiedades)
  - [Exposición de variables](#exposición-de-variables)

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
Siempre tomamos de setup como parametrosm primero las props, y luego el contexto: setup(props, context)

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

```js
export default {
  setup(props, context) {
    // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs)

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots)

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit)

    // Expose public properties (Function)
    console.log(context.expose)
  }
}
```
```js
export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}
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

## Exposición
Setup es cerrado por defecto, si queremos hacer algo público fuera de los enlaces de la platilla usamos expose
```js
export default {
  // only `publicMethod` will be available on the public instance
  expose: ['publicMethod'],
  methods: {
    publicMethod() {
      // ...
    },
    privateMethod() {
      // ...
    }
  }
}
```

## Testing
A la hora de testear todo cambia un poco, porque si no tenemos data como objeto reactivo debemos acceder a las variables desde otra manera exportándolas o exponiéndolas. De la misma manera para los métodos. Fíjate que donde ante teníamos en el objeto montado Data, ahora debemos acceder a las variables que necesitamos y métodos y por eso los exportamos


### Ejemplo Pokemon v1
Puedes ver la aplicación de todos estos elementos en los distintos componentes de manera gradual (commit a commit)

### Consideraciones
Puedes usar Composition u Option, e incluso en el mismo componente ambos. Puedes ir migrando poco a poco.

## Script Setup
Es la nueva forma [recomendada](https://vuejs.org/api/sfc-script-setup.html) de usar la Composition API y tienes varias ventajas:
- Código más sucinto con menos repetitivo
- Capacidad para declarar propiedades y eventos emitidos usando TypeScript puro
- Variables reactivas y componentes se exponen de manera automática (si no usa private)
- Mejor rendimiento en tiempo de ejecución (la plantilla se compila en una función de representación en el mismo ámbito, sin un proxy intermedio)
- Mejor rendimiento de inferencia de tipo IDE (menos trabajo para que el servidor de idioma extraiga tipos del código)
- Es importante tener Volar como extensión.
- Usar componentes dinámicos

```js
<script setup>
console.log('hello script setup')
</script>
```

## Eventos y Propiedades
Debes usar defineProps y defineEmits para definir las propiedades y eventos emitidos.

```js
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup code
</script>
```
## Exposición de variables
Setup es cerrado por defecto, puedes usar defineExpose para exponer
```js
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```