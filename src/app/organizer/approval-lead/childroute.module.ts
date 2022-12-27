
export const childRoutes = [
 
  {
    path: 'grad-details',
    loadChildren: () =>
      import('./graduate-details/graduate-details.module').then(m => m.GraduateDetailsModule),
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
