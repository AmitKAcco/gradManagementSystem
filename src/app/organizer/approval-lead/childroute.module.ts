
export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard-al/dashboard-al.module')
        .then(m => m.DashboardAlModule),
    data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'graddetails',
    loadChildren: () =>
      import('./graduate-detail-app-lead/graduate-detail-app-lead.module').then(m => m.GraduateDetailAppLeadModule),
    data: { icon: 'details', text: 'Graduate Details' }
  },
  {
    path: 'calenderApproval',
    loadChildren: () =>
      import('./calender-approval/calender-approval.module').then(m => m.CalenderApprovalModule),
    data: { icon: 'details', text: 'Calender Approval' }
  },
  {
    path: 'Curriculum Approval',
    loadChildren: () =>
      import('./curriculum-approval/curriculum-approval.module').then(m => m.CurriculumApprovalModule),
    data: { icon: 'details', text: 'Curriculum Approval' }
  },
  
  
]
