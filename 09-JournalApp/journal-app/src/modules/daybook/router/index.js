// Router local

export default {
  name: 'daybook',
  component: () => import('@/modules/daybook/layouts/DayBookLayout.vue'),
  meta: { title: 'DayBook' },
  children: [],
}
