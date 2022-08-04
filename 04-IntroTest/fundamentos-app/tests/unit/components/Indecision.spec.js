import { describe, test, expect, beforeEach, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'

// Suite para describir
describe('Component -> Indecision', () => {
  let wrapper
  let clgSpy

  beforeEach(() => {
    wrapper = shallowMount(Indecision)
    clgSpy = vi.spyOn(console, 'log') // Vamos a espiar el console.log
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

  test('Escribir en el input no debe disparar nada', async () => {
    // De esta manera espiamos a funciones locales
    const getAnswerSpy = vi.spyOn(wrapper.vm, 'getAnswer')
    const { isValidQuestion } = wrapper.vm

    const input = wrapper.find('input')
    await input.setValue('testing')
    expect(clgSpy).toHaveBeenCalledTimes(1) // Comprobamos que se ha llamado una vez
    expect(getAnswerSpy).not.toHaveBeenCalled() // Comprobamos que no se ha llamado a la funcion getAnswer
    expect(isValidQuestion).toBe(false) // Comprobamos que la pregunta no es valida
  })

  test('Al escribir ? debe disparar el el getAnswer', () => {})

  test('Pruebas getAnswer', () => {})

  test('Pruebas getAnswer - Fallo API', () => {})

  test('Emite el evento question-response', () => {})
})
