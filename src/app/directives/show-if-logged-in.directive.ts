import { Directive, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appShowIfLoggedIn]',
  standalone: true
})
export class ShowIfLoggedInDirective {
  constructor(private el: ElementRef, private authService: AuthService) {
    if (!this.authService.isLoggedIn()) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
