
export const childRoutes = [
  {
    path : 'batch',
    loadChildren: () =>
    import('./batch/batch.module')
    .then(m => m.BatchModule),
     data: { icon: 'details', text: 'Batch' }
  },
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
    data: { icon: 'calendar_today', text: 'Technical Calendar' }
  },
  {
    path : 'projectCalendar',
    loadChildren: () =>
    import('./project-calendar/project-calendar.module')
    .then(m => m.ProjectCalendarModule),
     data: { icon: 'details', text: 'Project Calendar' }
  },
  {
    path : 'trannierAssign',
    loadChildren: () =>
    import('./trannier-assignr/trannier-assignr.module')
    .then(m => m.TrannierAssignrModule),
     data: { icon: 'details', text: 'Trannier Assign' }
  },
  {
    path : 'projectAssignment',
    loadChildren: () =>
    import('./project-assignment/project-assignment.module')
    .then(m => m.ProjectAssignmentModule),
     data: { icon: 'details', text: 'Project Assignment' }
  },
  {
    path : 'Add project',
    loadChildren: () =>
    import('./add-project/add-project.module')
    .then(m => m.AddProjectModule),
     data: { icon: 'details', text: 'Add Project' }
  },
  {
    path : 'Status',
    loadChildren: () =>
    import('./status/status.module')
    .then(m => m.StatusModule),
     data: { icon: 'details', text: 'Status' }
  }

]
