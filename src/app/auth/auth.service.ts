// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usersUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(this.usersUrl, user);
  }


  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.usersUrl}?email=${email}&password=${password}`)
       // localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getUserPosition(): string {
    const user = this.getUser();
    console.log(user);
    return user ? user.position : '';
  }

  isAuthenticated(): boolean {
    return this.getUser() !== null;
  }
}
