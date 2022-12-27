
export const childRoutes = [
  // {
  //   path: 'dashboard',
  //   pathMatch : 'full',
  //   loadChildren: () =>
  //     import('./dashboard/dashboard.module')
  //     .then(m => m.DashboardModule),
  //   data: { icon: 'dashboard', text: 'Dashboard' }
  // },
  // {
  //   path: 'buddy',
  //   loadChildren: () =>
  //     import('./buddy/buddy.module').then(m => m.BuddyModule),
  //   data: { icon: 'buddy', text: 'buddy' }
  // },
  // {
  //   path: 'feedback-received',
  //   loadChildren: () =>
  //     import('./feedback-received/feedback-received.module').then(m => m.FeedbackReceivedModule),
  //   data: { icon: 'feedback', text: 'feedback' }
  // },
  // {
  //   path: 'grad-details',
  //   loadChildren: () =>
  //     import('./grad-details/grad-details.module').then(m => m.GradDetailsModule),
  //   data: { icon: 'gradDetails', text: 'gradDetails' }
  // },
  // {
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },

  {
    path: 'mockInterview',
    loadChildren: () =>
      import('./layout/mock-interviews/mock-interviews.module').then(m => m.MockInterviewsModule),
    data: { icon: 'buddy', text: 'Mock Interview' }
  },
  {
    path: 'mentors',
    loadChildren: () =>
      import('./mentor/mentor.module').then(m => m.MentorModule),
    data: { icon: 'buddy', text: 'Mentors' }
  },
]
