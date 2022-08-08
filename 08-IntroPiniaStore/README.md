# Introducción a Pinia y a las Store

Aprenderemos a manejar [Pinia](https://pinia.vuejs.org/), como estore principal para Vue

- [Introducción a Pinia y a las Store](#introducción-a-pinia-y-a-las-store)
  - [Resumen](#resumen)
  - [Stores](#stores)
  - [Pinia](#pinia)
    - [State](#state)
    - [Getters](#getters)
    - [Actions](#actions)
    - [Modulos](#modulos)

## Resumen

Cuando estamos trabajando con distintos compo que comparte información es interesante implementar una store. En este apartado aprenderemos a manejar Pinia, la cual es la store recomendada para Vue.js

## Stores

Las stores son almacenes de datos que se comparten entre los componentes. Con ello nos facilitan el intercambio y acceso de información sin sobrecargar propiedades y eventos cuando el nivel de jeraquía es alto, se comparten numerosas rutas o simplemente simplifica la lógica de nuestros componentes y test.

## Pinia

Pinia es la store recomendada por el equipo de Vue.js, surge como evolución y mejora de Vuex, la cual era la implementación de Redux para Vue.js. Una de las ventajas que tiene es su integración con TypeScript y la simplificación del modelo de Redux.

### State

Es el estado reactivo compartido

```js
state: () => {
    return {
      counter: 0,
      name: 'Pepe',
      isAdmin: true,
    }
  },
```

### Getters

Son las propiedades computadas sobre elementos del estado de la store.

```js
state: () => ({
  counter: 0,
}),
getters: {
  doubleCount: (state) => state.counter * 2,
},
```

### Actions

Son funciones que pueden ser síncronas o asíncrona y que modifican el estado. De esta manera lo encapsulamos.

```js
state: () => ({
  counter: 0,
  userData: null,
}),
actions: {
  increment() {
    this.counter++
  },
  randomizeCounter() {
    this.counter = Math.round(100 * Math.random())
  },
  async registerUser(login, password) {
    try {
      this.userData = await api.post({ login, password })
    } catch (error) {
      return error
    }
  },
},
```

### Modulos

Se puede definir cada store por separado dividiendo su lógica e importase o usarse una dentro de otra o en distintos componentes.

```js
import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useCartStore = defineStore('cart', {
  actions: {
    async orderCart() {
      const user = useUserStore()

      try {
        await apiOrderCart(user.token, this.items)
        this.emptyCart()
      } catch (err) {
        return err
      }
    },
  },
})
```
