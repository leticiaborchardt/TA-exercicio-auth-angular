import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { AuthGuard } from './auth.guard';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'unauthorized', 
        component: UnauthorizedComponent 
    },
    {
        path: '',
        component: LayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'appointments',
                component: AppointmentsComponent,
                data: { roles: ['admin', 'doctor', 'patient'] }
            },
            {
                path: 'appointments/create',
                component: AddAppointmentComponent,
                data: { roles: ['admin', 'doctor', 'receptionist'] }
            }
        ]
    }
];
