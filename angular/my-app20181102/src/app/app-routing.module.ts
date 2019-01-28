import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    // component: HeroesComponent
    loadChildren: './heroes/heroes.module#HeroesModule'
  },
  { 
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
    // component: DashboardComponent
  },
  { 
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
