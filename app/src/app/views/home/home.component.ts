import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from 'src/app/models/appointment';

import { MatDialog } from '@angular/material/dialog';
@Component({ 
    templateUrl: 'home.component.html',
    styleUrls:["home.component.scss"]
 })
export class HomeComponent implements OnInit {
    currentUser: User;
    loading : boolean = true;
     appointments : Appointment[] ;

    constructor(
        private appointmentService: AppointmentService,
        private dialog: MatDialog 
    ) {
        
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteAppointment(id: number) {
        this.appointmentService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.appointmentService.getAll()
            .pipe(first())
            .subscribe( 
                response => {
                   this.appointments = response;
                },
                error => {
                    this.loading = false;
                }
                )
               
                
    }

}