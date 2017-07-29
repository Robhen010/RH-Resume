
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
// Route Configuration
export const routes: Routes = [
  { path: 'Home', component: AppComponent },
  { path: 'Resume', component: ResumeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);