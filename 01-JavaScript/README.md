## JavaScript avanzado
JavaScript es un lenguaje de programación que se utiliza en el desarrollo de aplicaciones web y Node.js. en esta sección se explicaran algunas características avanzadas de JavaScript.

- [JavaScript avanzado](#javascript-avanzado)
- [const, let y var](#const-let-y-var)
- [Template literals](#template-literals)
- [Objetos literales](#objetos-literales)
- [Arrays](#arrays)
- [Funciones](#funciones)
- [Desestructurar objetos](#desestructurar-objetos)
- [Desestructurar arrays](#desestructurar-arrays)
- [Importaciones y exportaciones](#importaciones-y-exportaciones)
- [Promesas](#promesas)
- [Api Fetch](#api-fetch)

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

## Arrays
Los arrays son una forma de definir una lista de elementos cuyo acceso queda referenciado por un índice.

```js
const numeros = [1, 2, 3, 4, 5] // o new Array(1, 2, 3, 4, 5)
numeros.push(6)
console.log(numeros)
console.log(numeros[0])

// Operaciones con colecciones
// for
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}
// for in
for (const key in numeros) {
  console.log(numeros[key])
}

// API FUNCIONAL

// foreach
numeros.forEach(numero => console.log(numero))
// find - busca el primer elemento que cumpla la condicion
const numero = numeros.find(numero => numero === 3)
console.log(numero)
// Copiar un array
const numeros2 = [...numeros]
// map
const numeros3 = numeros.map(numero => numero * 2)
// filter
const numeros4 = numeros.filter(numero => numero > 2)
// reduce
const numeros5 = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// some - busca algun elemento que cumpla la condicion
const numeros6 = numeros.some(numero => numero > 2)
// every - busca que todos los elementos cumplan la condicion
const numeros7 = numeros.every(numero => numero > 2)
// findIndex - busca el indice del primer elemento que cumpla la condicion
const numeros8 = numeros.findIndex(numero => numero > 2)
```

## Funciones
Las funciones nos permiten definir fragmentos de código que podemos reutilizar.

En JS las funciones son ciudadanos de primera clase, es decir, son un tipo.

Las funciones flecha (arrow functions) Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional. No vinculan su this con el del contexto en el que se invocan, , el objeto al que hace referencia el this en una función flecha siempre va a ser el mismo independientemente del lugar desde el que se invoque.

```js
// Funciones
function saludar(nombre) {
  return `Hola ${nombre}`
}
console.log(saludar('Tony'))

// funciones flecha (=>)
const saludar2 = (nombre) => `Hola ${nombre}`
console.log(saludar2('Tony'))
```

## Desestructurar objetos 
Desestructurar objetos es una forma de extraer valores de un objeto.

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
const { nombre, apellido, edad, power= 'No tiene' } = persona
console.log(nombre) 
console.log(apellido)
```  

## Desestructurar arrays
Desestructurar arrays es una forma de extraer valores de un array.

```js
const numeros = [1, 2, 3, 4, 5]
const [numero1, numero2, ...resto] = numeros
console.log(numero1)
console.log(numero2)
console.log(resto)
```

## Importaciones y exportaciones
Importaciones y exportaciones son una forma de importar y exportar funciones, clases, variables, etc.
Podemos exportar varias funciones o clases en un solo archivo con export y usar import para importar lo que queremos.
Podemos tener una exportación por defecto con export default.

```js
// Exportar
const nombre = 'Tony'
const apellido = 'Stark'
const lista = [1, 2, 3, 4, 5]
export { nombre, apellido }
export default lista
// Importaciones
import { nombre, apellido } from './persona.js'
import lista from './persona.js'
console.log(nombre)
console.log(apellido)
console.log(lista)
```

## Promesas
Las promesas son una forma de definir una tarea que se va a realizar en el futuro (y nos sirven para gestionar código asíncrono).

```js
const promesa = new Promise((resolve, reject) => {
  // Tarea asíncrona
  if (true) {
    resolve('Tarea finalizada')
  } else {
    reject('Tarea fallida')
  }
})
promesa.then(resultado => console.log(resultado))
promesa.catch(error => console.log(error))
```

## Api Fetch
Api fetch es una libreria que nos permite hacer peticiones a una api web.

```js
fetch('https://rickandmortyapi.com/api/character/')
    // https://developer.mozilla.org/es/docs/Web/API/Response
    .then((response) => response.json()) // Obtenemos la respuesta, pero esto es una promesa en sí, por eso hay otro then
    .then((data) => console.log(data)) // finalmente obtenemos los datos de la promesa anterior
    .catch((error) => console.log(error))

```
