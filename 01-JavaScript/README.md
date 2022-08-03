## JavaScript avanzado
JavaScript es un lenguaje de programación que se utiliza en el desarrollo de aplicaciones web y Node.js. en esta sección se explicaran algunas características avanzadas de JavaScript.

- [JavaScript avanzado](#javascript-avanzado)
- [const, let y var](#const-let-y-var)
- [Template literals](#template-literals)
- [Objetos literales](#objetos-literales)

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

## Objetos literales
Los objetos literales son una forma de definir un objeto en base a una expresión.
Los objetos se pasan por referencia y para clonarlos

```js
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    pais: 'Estados Unidos'
  }
}
console.log(persona)
console.log(persona.direccion.ciudad)

// Clonando con spread, para copiar un objeto, pero no clona en profundidad
let persona2 = { ...persona }
persona2.nombre = 'Peter'
console.log(persona2)
console.log(persona)

// Clonando objetos con profundidad
persona2 = structuredClone(persona)
persona2.nombre = 'Hulk'
console.log(persona2)
console.log(persona)
```