import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthRedirectDirective } from './directives/auth-redirect.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthRedirectDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exercicio-auth';
}
