import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/hom-page/home-page').then(c => c.HomePage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/welcome-page/welcome-page').then(c => c.WelcomePage)
      },
      {
        path: 'state-store',
        loadComponent: () => import('./pages/state-store-page/state-store-page').then(c => c.StateStorePage)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
