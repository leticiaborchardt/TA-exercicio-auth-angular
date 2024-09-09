import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { canDeactivateGuard } from './guards/can-deactivate.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivateChild: [authGuard, roleGuard],
        children: [
            {
                path: 'appointments',
                component: AppointmentsComponent,
                data: { roles: ['admin', 'doctor', 'patient'] }
            },
            {
                path: 'appointments/create',
                component: AddAppointmentComponent,
                data: { roles: ['admin', 'doctor', 'receptionist'] },
                canDeactivate: [canDeactivateGuard]
            }
        ]
    }
];
