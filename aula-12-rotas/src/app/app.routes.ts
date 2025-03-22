import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosPrestadosComponent } from './pages/servicos-prestados/servicos-prestados.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component').then((p) => p.SobreComponent),
  },
  {
    path:'servicos/:id',
    component: ServicosPrestadosComponent
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component'),
  }
];
