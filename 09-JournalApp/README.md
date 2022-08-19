# Journal App

Aplicación resumen de lo visto

- [Journal App](#journal-app)
  - [Resumen](#resumen)
  - [Estilos](#estilos)
    - [Personalización de Estilos](#personalización-de-estilos)
    - [Organización de código](#organización-de-código)
    - [Keep Alive](#keep-alive)
    - [Alertas](#alertas)

## Resumen

Aplicación resumen usando lo visto como es VueRouter y Pinia.

## Estilos

Puedes añadir cualquier [estilo a tu app](https://dev.to/kevin_odongo35/how-to-add-tailwind-css-bootstrap-vuetify-or-bulma-to-a-vue-project-3on2).

### Personalización de Estilos

- [Sass](https://sass-lang.com/), viene configurado para Vite.

Y ahora elegimos por ejemplo entre:
- [Bootstrap](https://getbootstrap.com/)
- [Bulma](https://bulma.io/)
- [Tailwind](https://tailwindcss.com/)

¡¡Importamos en nuestro main el estilo y personalizamos como queramos!!
- Ejemplo con [Bootstrap](https://github.com/joseluisgs/vue-curso-cero-experto/commit/125b246f79372002ed1276ddf5384cb8a03b14cf)
- Ejemplo con [Bulma](https://github.com/joseluisgs/vue-curso-cero-experto/commit/e7e106b1c69517000e0599156bb9f2dcc724167f)

En este ejemplo vamos a usar Tailwind con [DaisyUI](https://daisyui.com) que nos da una serie de componentes para Tailwind. Se ha usado estilos por defecto y el sistema de cambio de estilo propuesto [aquí](https://github.com/saadeghi/theme-change).

Como iconos usaremos [Iconofy](https://iconify.design/).

### Organización de código
- En los directorios globales tenemos las vistas, componentes, routes y stores genérales para toda la aplicación.
- En cada carpeta modules tienes la parte dedicada a esa sección. 
- No es una organización que comparta en gran medida, pero puedes organizar tu código como quieras, siempre que te deje ampliarlo y cambiarlo de manera poco traumática.

### Keep Alive
Con [Keep Alive](https://vuejs.org/guide/built-ins/keep-alive.html#basic-usage) conseguimos cachear el componente que estamos mostrando agilizando.

### Alertas
Se ha trabajado con dos alertas, una de ellas es un propio toast que se muestra en la parte superior de la pantalla.
La otra opciónes usando la librería [SweetAlerts2](https://sweetalert2.github.io)


