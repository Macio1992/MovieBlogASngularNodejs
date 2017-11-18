import { Routes, RouterModule }  from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../globals/auth.guard';

export const routes: Routes = [
    {
      path: 'pages',
      component: PagesComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
        { path: 'reviews', loadChildren: 'app/pages/reviews/reviews.module#ReviewsModule' },
        { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
        { path: 'register', loadChildren: 'app/pages/register/register.module#RegisterModule' },
        { path: 'profile', loadChildren: 'app/pages/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
        { path: 'review/:id', loadChildren: 'app/pages/review-single/review-single.module#ReviewSingleModule' },
        { path: 'add', loadChildren: 'app/pages/add-edit/add-edit.module#AddEditModule', canActivate: [AuthGuard] },
        { path: 'edit/:id', loadChildren: 'app/pages/add-edit/add-edit.module#AddEditModule', canActivate: [AuthGuard] }
      ]
    },
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forChild(routes);