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




