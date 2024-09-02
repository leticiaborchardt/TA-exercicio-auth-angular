import { Component } from '@angular/core';
import { Login } from '../../models/login.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: Login = {
    login: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    this.authService.login(this.login).subscribe({
      next: (res: any) => {
        this.authService.setAuthToken(res.token);
        this.authService.setIsAuthenticated(true);

        this.router.navigateByUrl('/home');
      },
      error: (error) => alert('Invalid credentials.')
    })
  }
}
