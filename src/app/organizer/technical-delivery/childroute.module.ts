
export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'curriculumDesign',
    loadChildren: () =>
      import('./curriculum-design/curriculum-design.module')
        .then(m => m.CurriculumDesignModule),
    data: { icon: 'dashboard', text: 'Curriculum Design' }
  },
  {
    path: 'evaluateGrauate',
    loadChildren: () =>
      import('./evaluate-graduate/evaluate-graduate.module')
        .then(m => m.EvaluateGraduateModule),
    data: { icon: 'dashboard', text: 'Evaluate Grauate' }
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-details/graduate-details.module').then(m => m.GraduateDetailsModule),
    data: { icon: 'details', text: 'Graduate Details' }
  },
 

]
