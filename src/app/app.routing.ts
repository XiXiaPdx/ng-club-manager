import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonDetailsComponent } from './person-details/person-details.component';


const appRoutes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"people/:name/:id",
    component: PersonDetailsComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
