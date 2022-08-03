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
    pais: 'Estados Unidos'
  }
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


