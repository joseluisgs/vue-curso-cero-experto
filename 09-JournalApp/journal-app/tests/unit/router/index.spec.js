import { describe, expect, test } from 'vitest'

import daybookRouter from '@/modules/daybook/router'

describe('Router -> Daybook Router', () => {
  test('El router debe tener esta configuración', () => {
    console.log(daybookRouter)
    expect(daybookRouter).toMatchObject({
      name: 'daybook',
      meta: { title: 'DayBook' },
      component: expect.any(Function),
      children: [
        {
          name: 'daybook-no-entry',
          path: '',
          meta: { title: 'DayBook No Entry' },
          component: expect.any(Function),
        },
        {
          name: 'daybook-entry',
          path: ':id',
          meta: { title: 'DayBook Entry' },
          component: expect.any(Function),
          props: expect.any(Function),
        },
      ],
    })
  })
})
