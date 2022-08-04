import { describe, test, expect, beforeEach } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

// Suite para describir
describe('Component -> Indecision', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Indecision)
  })

  // cada una de las pruebas o test
  test('Debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot() // snapshot es una imagen de la vista y podemos usar .element tambien o html()
  })

  test('Renders properly', () => {
    // Montamos el componente y le pasamos las propiedades
    wrapper = shallowMount(Indecision, { props: { titulo: 'Test' } })
    expect(wrapper.props().titulo).toBe('Test')
    expect(wrapper.text()).toContain('Test') // Comprobamos que el texto contiene el titulo
  })

  test('Escribir en el input no debe disparar nada', async () => {})

  test('Al escribir ? debe disparar el el fetch request', async () => {})

  test('Pruebas getAnswer', async () => {})

  test('Pruebas getAnswer - Fallo API', async () => {})

  test('Emite el evento question-response', async () => {})
})
