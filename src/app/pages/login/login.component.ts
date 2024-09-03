import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  login: Login = {
    login: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  onLogin(): void {
    this.authService.login(this.login).subscribe({
      next: (user: User) => {
        this.authService.setCurrentUser(user);
        this.authService.setAuthToken(user.token);

        this.router.navigateByUrl('/home');
      },
      error: (error) => alert('Invalid credentials.')
    })
  }
}
