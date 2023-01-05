export const childRoutes = [ 
  {
    path : 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: ' Dashboard' }
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-detail-grad-mang/graduate-detail-grad-mang.module').then(m => m.GraduateDetailGradMangModule),
    data: { icon: 'details', text: 'Graduate Details' }
  },
  {
    path: 'clientsRequirements',
    loadChildren: () =>
      import('./clients-requirements/clients-requirements.module').then(m => m.ClientsRequirementsModule),
    data: { icon: 'details', text: 'Clients Rquirements' }
  },
  {
    path: 'Graduate Onboarding',
    loadChildren: () =>
      import('./clients-onboarding/clients-onboarding.module').then(m => m.ClientsOnboardingModule),
    data: { icon: 'details', text: 'Graduate Onboarding' }
  },
  {
    path: 'Jobs',
    loadChildren: () =>
      import('./job/job.module').then(m => m.JobModule),
    data: { icon: 'details', text: 'Jobs' }
  },
  {
    path : 'blocked',
    loadChildren: () =>
      import('./blocked/blocked.module').then(m => m.BlockedModule),
    data: { icon: 'details', text: 'Blocked' }
  }
]
