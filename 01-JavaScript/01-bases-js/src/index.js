console.log('Hola Mundo JS!!')
const nombre = 'Tony'
const apellido = 'Stark'
let edad = 45

// nombre = 'Peter' // error porque nombre es una constante

console.log(`${nombre} ${apellido} (${edad})`)

if (true) {
  // Variables asociadas a scope
  const nombre = 'Peter'
  edad = 25
  console.log(nombre + ' ' + edad)
}

// Concatenando
let nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

// templete string
nombreCompleto = `${nombre} ${apellido} (${edad})`
console.log(nombreCompleto)

console.log(`Resultado: ${1 + 1}`)

// Objeto literal... dicionarios o expresiones de objetos
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    pais: 'Estados Unidos',
  },
}
console.log(persona)
console.log(persona.nombre)
console.log(persona.direccion.ciudad)

// Clonando con spred, para copiar un objeto, pero no clona en profundidad
let persona2 = { ...persona }

// Clonando objetos con profundidad
persona2 = structuredClone(persona)
persona2.nombre = 'Peter'
console.log(persona2)

// Arrays o listas
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
// foreach
numeros.forEach((numero) => console.log(numero))
// find - busca el primer elemento que cumpla la condicion
const numero = numeros.find((numero) => numero === 3)
console.log(numero)
// Copiar un array
const numeros2 = [...numeros]
// map
const numeros3 = numeros.map((numero) => numero * 2)
// filter
const numeros4 = numeros.filter((numero) => numero > 2)
// reduce
const numeros5 = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
// some - busca algun elemento que cumpla la condicion
const numeros6 = numeros.some((numero) => numero > 2)
// every - busca que todos los elementos cumplan la condicion
const numeros7 = numeros.every((numero) => numero > 2)
// findIndex - busca el indice del primer elemento que cumpla la condicion
const numeros8 = numeros.findIndex((numero) => numero > 2)

// Funciones
function saludar(nombre) {
  return `Hola ${nombre}`
}
console.log(saludar('Tony'))

// funciones flecha (=>)
const saludar2 = (nombre) => `Hola ${nombre}`
console.log(saludar2('Tony'))

const heroes = [
  {
    id: 1,
    nombre: 'Aquaman',
  },
  {
    id: 2,
    nombre: 'Batman',
  },
]

const findById = (id) => heroes.find((heroe) => heroe.id === id)
console.log(findById(2))

// destructuracion de objetos
const heroe = {
  id: 1,
  name: 'Goku',
}
// sin destructuracion
//const id = heroe.id
//const name = heroe.name
//console.log(id, nombre)
// con destructuracion
const { id, name, power = 'No tiene' } = heroe
console.log(id, name)

// Destructuracion de arrays
const numbers = [1, 2, 3, 4, 5]
const [numero1, numero2, ...resto] = numbers
console.log(numero1)
console.log(numero2)
console.log(resto)

// Importaciones y exportaciones
import { heroes as heroesList, owners, getHeroById, heroByOwner } from './data/heroes.js'
console.log(heroesList)
console.log(owners)

// getHeroById
// const getHeroById = (id) => heroesList.find(heroe => heroe.id === id)
// const heroByOwner = (owner) => heroesList.filter(heroe => heroe.owner === owner)
console.log(getHeroById(2))
console.log(heroByOwner('DC'))

// Promesas
console.log('Inicio de la promesa')
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Termino la promesa')
    resolve('Promesa resuelta') // promesa resulta!!! // si le queremos mandar un resultado
  }, 2000)
})
// recibimos el resultado en el parámetro....
promesa.then((res) => console.log('Sí que ha terminado la promesa + ' + res))
console.log('Fin de la promesa')

// Promesas con argumentos
const getHeroByIdPromise = (id) => {
  return new Promise((resolve, reject) => {
    // promesa que devuelve un heroe por id
    setTimeout(() => {
      const heroe = getHeroById(id)
      if (heroe) {
        resolve(heroe)
      } else {
        reject(`No se ha encontrado el heroe con id ${id}`)
      }
    }, 2000)
  })
}
getHeroByIdPromise(2)
  .then((heroe) => console.log(heroe))
  .catch((err) => console.log(err))

getHeroByIdPromise(25)
  .then((heroe) => console.log(heroe))
  .catch((err) => console.log(err))

  // API Fetch
fetch('https://rickandmortyapi.com/api/character/')
  // https://developer.mozilla.org/es/docs/Web/API/Response
  .then((response) => response.json()) // Obtenemos la respuesta, pero esto es una promesa en sí, por eso hay otro then
  .then((data) => console.log(data)) // finalmente obtenemos los datos de la promesa anterior
  .catch((error) => console.log(error))
