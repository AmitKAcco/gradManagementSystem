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
    data: { icon: 'how_to_reg', text: 'Graduate Details' }
  },
  {
    path: 'clientsRequirements',
    loadChildren: () =>
      import('./clients-requirements/clients-requirements.module').then(m => m.ClientsRequirementsModule),
    data: { icon: 'meeting_room', text: 'Clients Requirements' }
  },
  {
    path: 'scheduleInterview',
    loadChildren: () =>
      import('./schedule-interview/schedule-interview.module').then(m => m.ScheduleInterviewModule),
    data: { icon: 'details', text: 'Schedule Interview' }
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
