// Router local

export default {
  name: 'daybook',
  component: () => import('@/modules/daybook/layouts/DayBookLayout.vue'),
  meta: { title: 'DayBook' },
  children: [
    {
      name: 'daybook-no-entry',
      path: '',
      component: () => import('@/modules/daybook/views/NoEntry.vue'),
      meta: { title: 'DayBook No Entry' },
    },
    {
      name: 'daybook-entry',
      path: ':id',
      component: () => import('@/modules/daybook/components/EntryView.vue'),
      meta: { title: 'DayBook Entry' },
      // Le pasamos props
    },
  ],
}
