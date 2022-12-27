
export const childRoutes = [
  {
    path: 'calenderView',
    loadChildren: () =>
      import('./calender-view/calender-view.module')
      .then(m => m.CalenderViewModule),
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
