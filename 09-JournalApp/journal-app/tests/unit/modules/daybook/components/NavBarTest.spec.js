import { beforeEach, describe, expect, test } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

import NavBar from '@/modules/daybook/components/NavBar.vue'

import users from '../stores/mocks/users.mocks'

describe('Daybook Componente -> NavBar', () => {
  let wrapper
  const router = createRouterMock()

  beforeEach(() => {
    injectRouterMock(router)
    wrapper = shallowMount(NavBar, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              UserStore: { user: users[0] },
            },
          }),
        ],
      },
    })
  })

  test('Debe hacer match con el snapshot', () => {
    expect(wrapper.text()).toMatchSnapshot()
  })

  test('Debe mostrar el nombre del usuario', () => {
    const button = wrapper.find('[data-testid="navbar-button-logout"]')
    expect(button.text()).toBe(users[0].username)
  })

  test('Debe llevar a home al pulsar el boton', async () => {
    const button = wrapper.find('[data-testid="navbar-button-home"]')
    expect(button.text()).toBe('DayBook')
    await button.trigger('click')
    expect(router.push).toHaveBeenCalledWith({ name: 'home' })
  })
})
