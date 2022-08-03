import { describe, test, expect, beforeEach } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

// Suite para describir
describe('Component -> MyCounter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(MyCounter)
  })

  // cada una de las pruebas o test
  test('Debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot() // snapshot es una imagen de la vista y podemos usar .element tambien o html()
  })

  test('renders properly', () => {
    // Montamos el componente y le pasamos las propiedades
    wrapper = shallowMount(MyCounter, { props: { titulo: 'Hello Vitest', started: '3' } })
    expect(wrapper.text()).toContain('Hello Vitest') // Comprobamos que el texto contiene el titulo
    expect(wrapper.text()).toContain('3') // Comprobamos que el texto contiene el valor
    expect(wrapper.text()).toContain('9') // Comprobamos que el texto contiene el valor del cuadrado
  })

  test('h2 debe tener un valor por defecto', () => {
    expect(wrapper.find('h2').exists()).toBeTruthy() // Comprobamos que el texto contiene el valor
    expect(wrapper.find('h2').text()).toBe('Contador')
  })

  test('los botones tienen las etiquetas que corresponden', () => {
    // encontramos todos los parrafos
    const [bIncrement, bDecrement] = wrapper.findAll('button')
    // expect(wrapper.findAll('button')).toBe(2) // Comprobamos que hay 2 botones
    expect(bIncrement.text()).toContain('+') // Comprobamos que el texto del boton es +
    expect(bDecrement.text()).toContain('-') // Comprobamos que el texto del boton es -
    const increment = wrapper.find('[data-testid="increment"]')
    expect(increment.exists()).toBeTruthy() // Comprobamos que el boton existe
    expect(increment.text()).toContain('+') // Comprobamos que el texto del boton es +
  })

  test('debe incrementar el valor al pulsar +1', async () => {
    const wrapper = shallowMount(MyCounter, { props: { titulo: 'Boton +1', started: '3' } })
    expect(wrapper.text()).toContain('3')
    expect(wrapper.text()).toContain('9')
    const bIncrement = wrapper.find('[data-testid="increment"]')
    await bIncrement.trigger('click')
    expect(wrapper.text()).toContain('4')
    expect(wrapper.text()).toContain('16')
  })

  test('debe decrementar el valor al pulsar -1', async () => {
    const wrapper = shallowMount(MyCounter, { props: { titulo: 'Boton -1', started: '3' } })
    expect(wrapper.text()).toContain('3')
    expect(wrapper.text()).toContain('9')
    const bIncrement = wrapper.find('[data-testid="decrement"]')
    await bIncrement.trigger('click')
    expect(wrapper.text()).toContain('2')
    expect(wrapper.text()).toContain('4')
  })

  test('Debemos poder leer el valor de las propiedades', () => {
    const wrapper = shallowMount(MyCounter, { props: { titulo: 'Titulo', started: '3' } })
    expect(wrapper.props().titulo).toBe('Titulo')
    expect(wrapper.props().started).toBe('3')
    expect(wrapper.find('h2').text()).toBe('Titulo')
     expect(wrapper.find('p').text()).contains('3')
  })
})
