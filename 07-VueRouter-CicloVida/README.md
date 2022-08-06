# Vue Ruter y Ciclos de Vida

Proyecto de juego adivina Pokemon con [Composition API](https://vuejs.org/api/composition-api-setup.html#basic-usage)

- [Vue Ruter y Ciclos de Vida](#vue-ruter-y-ciclos-de-vida)
  - [Resumen](#resumen)
  - [Single Page Application](#single-page-application)

## Resumen

En este apartado veremos cómo usar [Vue Ruter](https://router.vuejs.org/introduction.html) y el maenjo de Hooks y [ciclo de vida de Vue](https://vuejs.org/guide/essentials/lifecycle.html).

## Single Page Application
Una Single-Page Application (SPA) es un tipo de aplicación web que ejecuta todo su contenido en una sola página.

Al ir pasando de una sección a otra, solo necesita cargar el contenido nuevo de forma dinámica si este lo requiere. Esto mejora los tiempos de respuesta y agiliza mucho la navegación, favoreciendo así a la experiencia de usuario. A su vez podemos implementar carga directa o perezosa de contenido.

Respecto a las URLs del navegador, existe la posibilidad de que se vayan modificando en la barra de direcciones a medida que intercambiamos las vistas. Como hemos dicho, no se cambia la página, pero sí el contenido. Otorgar una URL propia a cada pantalla es muy útil de cara a aspectos como la navegabilidad o para compartirla.

