import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment, NewAppointment } from '../models/appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private url = "http://localhost:8080/appointment";

  constructor(private httpClient: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.url);
  }

  addAppointment(appointment: NewAppointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.url, appointment);
  }
}
