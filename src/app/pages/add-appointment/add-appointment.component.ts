import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.scss'
})
export class AddAppointmentComponent implements CanComponentDeactivate {
  appointment: Appointment = {
    description: '',
    dateTime: new Date(),
    doctor: '',
    patient: ''
  };

  constructor(private appointmentService: AppointmentService) { }

  onSubmit(): void {
    this.appointmentService.addAppointment(this.appointment).subscribe({
      next: () => {
        alert('Appointment created successfully!')

        this.appointment = {
          description: '',
          dateTime: new Date(),
          doctor: '',
          patient: ''
        }
      },
      error: () => alert('Could not create appointment, please try again later.')
    })
  }

  canDeactivate(): boolean {
    return confirm('Are you sure you want to leave this page?');
  }
}
