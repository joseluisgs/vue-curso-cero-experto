// Objeto de VUE!!!
// console.log(Vue)

const app = Vue.createApp({
  // podemos crear el template a mostrar
  template: `
    <h1>Hola mundo</h1>
    <p>Desde app.js</p>
    `,
})

app.mount('#myApp')
