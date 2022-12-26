export const childRoutes = [
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
      data: { icon: 'dashboard', text: 'Dashboard' }
    }
]
