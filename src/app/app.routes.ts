import { Routes } from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'avisos',
    pathMatch: 'full',
  },
  {
    path: 'avisos',
    loadComponent: () => import('./pages/avisos/avisos.page').then( m => m.AvisosPage)
  },
  {
    path: 'nuevo-aviso',
    loadComponent: () => import('./pages/nuevo-aviso/nuevo-aviso.page').then( m => m.NuevoAvisoPage)
  },
   { path: '**', redirectTo: 'avisos' }
];
