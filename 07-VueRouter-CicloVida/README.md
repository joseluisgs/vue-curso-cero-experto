# Vue Ruter y Ciclos de Vida

Proyecto de juego adivina Pokemon con [Composition API](https://vuejs.org/api/composition-api-setup.html#basic-usage)

- [Vue Ruter y Ciclos de Vida](#vue-ruter-y-ciclos-de-vida)
  - [Resumen](#resumen)
  - [Single Page Application](#single-page-application)
  - [Vue Router](#vue-router)
    - [Router Link](#router-link)
    - [Router View](#router-view)
  - [Ciclo de Vida y Hooks](#ciclo-de-vida-y-hooks)

## Resumen

En este apartado veremos cómo usar [Vue Ruter](https://router.vuejs.org/introduction.html) y el maenjo de Hooks y [ciclo de vida de Vue](https://vuejs.org/guide/essentials/lifecycle.html).

## Single Page Application

Una Single-Page Application (SPA) es un tipo de aplicación web que ejecuta todo su contenido en una sola página.

Al ir pasando de una sección a otra, solo necesita cargar el contenido nuevo de forma dinámica si este lo requiere. Esto mejora los tiempos de respuesta y agiliza mucho la navegación, favoreciendo así a la experiencia de usuario. A su vez podemos implementar carga directa o perezosa de contenido.

Respecto a las URLs del navegador, existe la posibilidad de que se vayan modificando en la barra de direcciones a medida que intercambiamos las vistas. Como hemos dicho, no se cambia la página, pero sí el contenido. Otorgar una URL propia a cada pantalla es muy útil de cara a aspectos como la navegabilidad o para compartirla.

## Vue Router

[Vue Router](https://router.vuejs.org/api/interfaces/routeroptions.html#history) es el componente de Vue que nos permite navegar entre páginas o vistas. Se define en un fichero con las rutas.
```js
const router = createRouter({
  // Hacemos el history para la URL y sin #, si no es crteateHashHistory
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Exportación directa
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Lazy loading, solo cuando quiere...
    {
      path: '/about',
      name: 'about',
     // Lazy loading
      component: () => import('@/views/AboutView.vue'),
    },
    // Vamos a hacer la de pokemon directa
    // Página con parametros
    {
      path: '/student/:id',
      name: 'student-detail',
      component: studentPage,
      meta: { title: 'Pokemon Details' },
    },
    // 404
    {
      // Cualquier cosa que no coicida con las rutas anteriores
      path: '/:pathMatch(.*)*', // Cualquier otra cosa
      name: '404',
      component: () => import('@/views/404View.vue'), // Lazy loading
    },
  ],
})

export default router
```

### Router Link

Nos permite crear enlaces a los componentes de Vue como si fueran etiquetas <a href="http://...">...</a>." 

```html
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <!-- Si quiero usar el nombre de las vistas o de componente y no su url-->
  <RouterLink :to="{ name: 'home' }">Home Named</RouterLink>

</nav>
```

### Router View
Renderiza el componente indicado por el router en el layout donde se pone. Todos los componentes se renderizarán ahí.
```html
<template>
  <NavBar />

  <!-- Si quiero cachear las vistas usar keep alive 
  <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
-->

  <RouterView />
</template>
```

## Ciclo de Vida y Hooks
El [ciclo de vida de un componente](https://vuejs.org/guide/essentials/lifecycle.html) usando Composition API, los hooks más importantes son:
![hooks](https://vuejs.org/assets/lifecycle.16e4c08e.png)
- onBeforeMount(): Antes de que el componente se monte.
- onMounted(): Una vez montado.
- onBeforeUpdate(): Antes de que el componente se actualice.
- onUpdate(): Cuando se actualiza
- onBeforeUnmount(): Antes de que el componente se desmonte.
- onUnmounted(): una vez desmontado.

