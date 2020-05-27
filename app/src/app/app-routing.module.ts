import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../app/helpers/auth.guard'
import { LoginComponent} from './views/login/login.component'
import { HomeComponent } from './views/home/home.component';
import { AddAppointmentComponent } from './views/appointment/addAppointment.component';
import { EditAppointmentComponent } from './views/appointment/editAppointment.component';

const routes: Routes = [
  { path: 'appointment', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'appointment/add', component: AddAppointmentComponent, canActivate: [AuthGuard] },
  { path: 'appointment/:appointment_id', component: EditAppointmentComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
