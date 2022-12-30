
export const childRoutes = [
  {
    path: 'calendarView',
    loadChildren: () =>
      import('./calendar-view/calendar-view.module')
      .then(m => m.CalendarViewModule),
    data: { icon: 'dashboard', text: 'Calendar View'}
  },
  {
    path: 'curriculumView',
    loadChildren: () =>
      import('./curriculum-view/curriculum-view.module')
      .then(m => m.CurriculumViewModule),
    data: { icon: 'dashboard', text: 'Curriculum View'}
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-details/graduate-details.module')
      .then(m => m.GraduateDetailsModule),
    data: { icon: 'details', text: 'Graduate Details' }
  },
]
