import { Attribute, Component, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  isManager = false; // Flag to determine if user is admin

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isManager = this.authService.getUserPosition() === 'Product Manager';
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['./auth/login']);
  }




}

