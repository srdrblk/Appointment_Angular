import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from 'src/app/models/appointment';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';

@Component({ 
    templateUrl: 'editAppointment.component.html',
    styleUrls:["editAppointment.component.scss"]
 })
export class EditAppointmentComponent implements OnInit {
    appointmentForm: FormGroup;
    currentUser: User;
    data: Appointment;
    loading : boolean = false;
    appointments : Appointment[] ;
    submitted = false;


    constructor(
    
        private formBuilder: FormBuilder,
        private appointmentService: AppointmentService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        
    }

    ngOnInit() {
        this.data =new Appointment;
        const appointment_id = this.route.snapshot.paramMap.get('appointment_id');
        var id = Number(appointment_id)
        this.appointmentService.get(id)
        .pipe(first())
        .subscribe(
            data => {
              
                this.appointmentForm = this.formBuilder.group({
                    id: [data.id, Validators.nullValidator],
                    detail: [data.detail, Validators.required],
                    withWho: [data.withWho, Validators.required],
                    startDate: [data.startDate, Validators.required],
                    endDate: [data.endDate, Validators.required]
                });
            
            },
            error => {
                this.loading = false;
        });
debugger
        
    }
    get f() { return this.appointmentForm.controls; }

    onSubmit() {
        debugger
        this.submitted = true;
        this.data =new Appointment;
        this.data.id = this.f.id.value;
        this.data.Detail = this.f.detail.value;
        this.data.WithWho = this.f.withWho.value;
        this.data.StartDate =_moment.utc(this.f.startDate.value).format(); 
        this.data.EndDate = _moment.utc(this.f.endDate.value).format();

        debugger
        this.updateUser(this.data);
    }


    updateUser(data: Appointment) {
        const appointment_id = this.route.snapshot.paramMap.get('appointment_id');
        var id = Number(appointment_id)
        this.appointmentService.update(id,data)
            .pipe(first())
            .subscribe(
                data => {
        
                    this.router.navigate(['/appointment']);
                },
                error => {
                    this.loading = false;
            });
    }



}