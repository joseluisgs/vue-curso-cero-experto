import { describe, test, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue'

// Suite para describir
describe('Component -> MyCounter', () => {
  // cada una de las pruebas o test
  test('Debe hacer match con el snapshot', () => {
    const wrapper = shallowMount(MyCounter)
    expect(wrapper.html()).toMatchSnapshot() // snapshot es una imagen de la vista y podemos usar .element tambien o html()
  })

  test('renders properly', () => {
    // Montamos el componente y le pasamos las propiedades
    const wrapper = shallowMount(MyCounter, { props: { titulo: 'Hello Vitest', started: '3' } })
    expect(wrapper.text()).toContain('Hello Vitest') // Comprobamos que el texto contiene el titulo
    expect(wrapper.text()).toContain('3') // Comprobamos que el texto contiene el valor
    expect(wrapper.text()).toContain('9') // Comprobamos que el texto contiene el valor del cuadrado
  })

  test('h2 debe tener un valor por defecto', () => {
    const wrapper = shallowMount(MyCounter)
    expect(wrapper.find('h2').exists()).toBeTruthy() // Comprobamos que el texto contiene el valor
    expect(wrapper.find('h2').text()).toBe('Contador')
  })
})
