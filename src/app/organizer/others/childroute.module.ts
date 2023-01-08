
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
      import('./graduate-details-others/graduate-details-others.module')
      .then(m => m.GraduateDetailsOthersModule),
    data: { icon: 'details', text: 'Graduate Details' }
  },
  {
    path : 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    data: { icon: 'details', text: 'Dashboard' }
  }
]
