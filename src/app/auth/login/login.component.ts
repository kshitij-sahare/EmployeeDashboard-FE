// src/app/auth/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }
  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(this.email, this.password).subscribe(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user[0]))
        if (user[0].position === 'Product Manager') {
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 1000);
        } else {
          this.router.navigate(['/tasks']);
        }
      } else {
        this.error = 'Invalid email or password';
      }
    });
  }
}
