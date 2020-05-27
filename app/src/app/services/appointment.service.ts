import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import { Appointment } from '../models/appointment';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
    constructor(private api: ApiService) { }

    getAll() {
        return this.api.get(`appointment`);
    }
    get(id: number) {
        return this.api.get(`appointment/${id}`);
    }
    delete(id: number) {
        return this.api.delete(`appointment/${id}`);
    }
    add(data: Appointment)
    {
        return this.api.post(`appointment`,data);
    }
    update(id:number ,data: Appointment)
    {
        return this.api.put(`appointment/${id}`,data);
    }
}