import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent, RegisterComponent } from './acc';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acc/login', component: LoginComponent },
  { path: 'acc/register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
