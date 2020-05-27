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
    templateUrl: 'addAppointment.component.html',
    styleUrls:["addAppointment.component.scss"]
 })
export class AddAppointmentComponent implements OnInit {
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
        this.appointmentForm = this.formBuilder.group({
            detail: ['', Validators.required],
            withWho: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });
    }
    get f() { return this.appointmentForm.controls; }

    onSubmit() {
        debugger
        this.submitted = true;
        this.data =new Appointment;
        this.data.Detail = this.f.detail.value;
        this.data.WithWho = this.f.withWho.value;
        this.data.StartDate =_moment.utc(this.f.startDate.value).format(); 
        this.data.EndDate = _moment.utc(this.f.endDate.value).format();

debugger
        this.addUser(this.data);
    }


    addUser(data: Appointment) {
      
        this.appointmentService.add(data)
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