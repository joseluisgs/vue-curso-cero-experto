import { beforeEach, describe, expect, test } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

import EntryView from '@/modules/daybook/components/EntryView.vue'

import entries from '../stores/mocks/entries.mocks'
import users from '../stores/mocks/users.mocks'

describe('Daybook Componente -> EntryView con New', () => {
  let wrapper
  const router = createRouterMock()

  beforeEach(() => {
    injectRouterMock(router)
    wrapper = shallowMount(EntryView, {
      props: {
        id: 'new',
      },
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              JournalStore: { entries: entries },
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

  test('El campo de texto debe estar vacío', () => {
    const textinput = wrapper.find('[data-testid="entryview-textinput"]')
    expect(textinput.element.value).toBe('')
  })

  test('El boton borrar no debe estar visible', () => {
    const deleteButton = wrapper.find('[data-testid="entryview-deletebutton"]')
    expect(deleteButton.exists()).toBe(false)
  })

  test('Debe crear una entrada nueva y redirigirnos a ella', async () => {
    const textinput = wrapper.find('[data-testid="entryview-textinput"]')
    textinput.setValue('text-new')
    await textinput.trigger('input')
    const saveButton = wrapper.find('[data-testid="entryview-savebutton"]')
    // pulsamos click
    await saveButton.trigger('click')
    // Nos debe llevar a esta entrada
    expect(router.push).toHaveBeenCalledWith({
      name: 'daybook-entry',
      params: { id: expect.any(String) },
    })
  })
})
