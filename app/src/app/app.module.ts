import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddAppointmentComponent } from './views/appointment/addAppointment.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EditAppointmentComponent } from './views/appointment/editAppointment.component';



@NgModule({
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddAppointmentComponent,
    EditAppointmentComponent

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
