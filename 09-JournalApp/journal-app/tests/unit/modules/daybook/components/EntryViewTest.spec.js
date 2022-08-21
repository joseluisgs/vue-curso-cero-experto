import { beforeEach, describe, expect, test } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

import EntryView from '@/modules/daybook/components/EntryView.vue'

import entries from '../stores/mocks/entries.mocks'
import users from '../stores/mocks/users.mocks'

describe('Daybook Componente -> EntryView', () => {
  let wrapper
  const router = createRouterMock()

  beforeEach(() => {
    injectRouterMock(router)
    wrapper = shallowMount(EntryView, {
      props: {
        id: entries[0].id,
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
})
