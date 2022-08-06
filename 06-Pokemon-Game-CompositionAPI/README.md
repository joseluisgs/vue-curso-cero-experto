# Juego de adivina Pokemon Composition API
Proyecto de juego adivina Pokemon con [Composition API](https://vuejs.org/api/composition-api-setup.html#basic-usage)

- [Juego de adivina Pokemon Composition API](#juego-de-adivina-pokemon-composition-api)
  - [Resumen](#resumen)
  - [Composition API](#composition-api)

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