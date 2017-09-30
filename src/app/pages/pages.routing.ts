import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
      path: 'pages',
      component: PagesComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
      ]
    },
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forChild(routes);