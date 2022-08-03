## JavaScript avanzado
JavaScript es un lenguaje de programación que se utiliza en el desarrollo de aplicaciones web y Node.js. en esta sección se explicaran algunas características avanzadas de JavaScript.

- [JavaScript avanzado](#javascript-avanzado)
- [const, let y var](#const-let-y-var)
- [Template literals](#template-literals)

## const, let y var
JavaScript tiene dos tipos de definir variables:
- const: las variables constantes no pueden ser modificadas (no tienen set)
- let: pueden ser modificadas (tienen set)
- var: no tienen scope (¡No usar nunca!)

```js
const nombre = 'Tony'
const apellido = 'Stark'
let edad = 45
// nombre = 'Peter' // error porque nombre es una constante
edad = 46 // ok porque edad es una variable
```
## Template literals
Template literals son una forma de escribir strings con interpolación de variables. Dentro de la interpolación se pueden utilizar llaves para llamar a funciones.

```js
const nombre = "Juan";
const apellido = "Perez";
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto)
console.log(`Resultado: ${1 + 1}`)
```