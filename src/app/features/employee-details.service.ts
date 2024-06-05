// src/app/services/employee-details.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../core/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  private apiUrl = 'http://localhost:3000/users'; // URL to JSON server

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  addTaskToEmployee(employeeId: number, employeeData: any): Observable<Employee> {
    const url = `${this.apiUrl}/${employeeId}`;
    return this.http.put<Employee>(url, employeeData);
  }
}
