import { EnsureInputGuard } from './ensure-input.guard';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';

import { LoginGuard } from './login.guard';

import { ClassicComponent } from './forms/classic/classic.component';
import { Classic2Component } from "app/forms/classic2/classic2.component";

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent },
      { path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        canActivate: [LoginGuard]
      },
      { path: 'forms/classic', component: ClassicComponent },
      { path: 'forms/classic2', component: Classic2Component }
    ]
  },
  { path: 'login', component: LoginComponent, canDeactivate: [EnsureInputGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
