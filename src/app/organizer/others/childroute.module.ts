
export const childRoutes = [
  {
    path: 'calendarView',
    loadChildren: () =>
      import('./calendar-view/calendar-view.module')
      .then(m => m.CalendarViewModule),
    data: { icon: 'dashboard', text: 'Calender View'}
  },
  {
    path: 'curriculumView',
    loadChildren: () =>
      import('./curriculum-view/curriculum-view-routing.module')
      .then(m => m.CurriculumViewRoutingModule),
    data: { icon: 'dashboard', text: 'Calender View'}
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-details/graduate-details.module').then(m => m.GraduateDetailsModule),
    data: { icon: 'details', text: 'Graduate Details' }
  },
]
