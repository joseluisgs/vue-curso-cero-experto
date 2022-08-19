import { describe, expect, test, vi } from 'vitest'

import HomeView from '@/views/HomeView.vue'
import { mount, shallowMount } from '@vue/test-utils'

import { useRouter } from 'vue-router'

describe('View -> HomeView', () => {
  test('Debe hacer match con el snapshot', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.html()).toMatchSnapshot() // snapshot es una imagen de la vista y podemos usar .element tambien o html()
  })

  test('Hacer click en el botón debe redireccionar a daybook-no-entry', async () => {
    vi.mock('vue-router', () => ({
      useRoute: vi.fn(),
      useRouter: vi.fn(() => ({
        push: () => {},
      })),
    }))

    const push = vi.fn()
    useRouter.mockImplementationOnce(() => ({
      push,
    }))

    const wrapper = mount(HomeView)

    // Mock del metodo goToDayBook
    wrapper.vm.goToDaybook = vi.fn()

    // Trabajamos con el boton
    const dayButton = wrapper.find('[data-testid="DayButton"]')
    expect(dayButton.exists()).toBe(true)
    // texto de boton es daybook
    expect(dayButton.text()).toBe('DayBook')
    await dayButton.trigger('click')
    // Cone sto ya sabemos que lo ha llamado!!!
    expect(wrapper.vm.goToDaybook).toHaveBeenCalledTimes(1)
    // Router push ha sido llamado
    expect(push).toHaveBeenCalled()
  })
})
