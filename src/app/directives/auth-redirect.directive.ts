import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appAuthRedirect]',
  standalone: true
})
export class AuthRedirectDirective {

  constructor(private authService: AuthService, private router: Router) { }

  @HostListener('click') onClick() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }
}
