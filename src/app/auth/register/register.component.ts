// src/app/auth/register/register.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  error: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      position: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    // console.log("hiii");
    const otherFields ={
      "projects": [],
      "deliverables": []
    }
    const myForm = {...this.registerForm.value,...otherFields }
    // console.log(this.registerForm.value);
    // console.log(myForm);
    this.authService.register(myForm).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/auth/login']);
        } else {
          this.error = 'Registration failed. Please try again.';
        }
      },
      error => {
        this.error = 'An error occurred during registration.';
      }
    );
  }
}
