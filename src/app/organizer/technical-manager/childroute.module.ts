
export const childRoutes = [
  
  {
    path: 'buddy',
    loadChildren: () =>
      import('./buddy/buddy.module').then(m => m.BuddyModule),
    data: { icon: 'people_outline', text: 'Buddy' }
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'feedback-received',
    loadChildren: () =>
      import('./feeback-received/feeback-received.module').then(m => m.FeebackReceivedModule),
    data: { icon: 'feedback', text: 'Feedback' }
  },
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-details/graduate-details.module').then(m => m.GraduateDetailsModule),
    data: { icon: 'details', text: 'Graduate Details' }
  },
  {
    path: 'mockInterview',
    loadChildren: () =>
      import('./mock-interview/mock-interview.module').then(m => m.MockInterviewModule),
    data: { icon: 'poll', text: 'Mock Interview' }
  },
  {
    path: 'mentors',
    loadChildren: () =>
      import('./mentors/mentors.module').then(m => m.MentorsModule),
    data: { icon: 'supervised_user_circle', text: 'Mentors' }
  },
  {
    path: 'technicalCalender',
    loadChildren: () =>
      import('./technical-clalender/technical-clalender.module')
      .then(m => m.TechnicalClalenderModule),
    data: { icon: 'calendar_today', text: 'technicalCalender' }
  },
  {
    path : 'projectDetails',
    loadChildren: () =>
    import('./project-details/project-details.module')
    .then(m => m.ProjectDetailsModule),
     data: { icon: 'details', text: 'Project Details' }
  }

]
