// employee.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<any[]> {
    const dummyEmployees = [
      { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', email: 'john.doe@example.com', phone: '+1234567890', hireDate: '2020-01-15', salary: 85000 },
      { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product Management', email: 'jane.smith@example.com', phone: '+1987654321', hireDate: '2018-05-20', salary: 105000 },
      { id: 3, name: 'Michael Johnson', position: 'UI/UX Designer', department: 'Design', email: 'michael.johnson@example.com', phone: '+1654321890', hireDate: '2019-03-10', salary: 90000 },
      { id: 4, name: 'Emily Brown', position: 'Marketing Specialist', department: 'Marketing', email: 'emily.brown@example.com', phone: '+1765432890', hireDate: '2020-08-05', salary: 95000 },
      { id: 5, name: 'David Lee', position: 'HR Manager', department: 'Human Resources', email: 'david.lee@example.com', phone: '+1876543210', hireDate: '2017-09-25', salary: 110000 },
      { id: 6, name: 'Sarah Miller', position: 'Financial Analyst', department: 'Finance', email: 'sarah.miller@example.com', phone: '+1987456321', hireDate: '2021-02-12', salary: 100000 },
      { id: 7, name: 'Kevin Davis', position: 'Operations Manager', department: 'Operations', email: 'kevin.davis@example.com', phone: '+1654321987', hireDate: '2018-11-30', salary: 115000 },
      { id: 8, name: 'Amanda Wilson', position: 'Software Developer', department: 'Engineering', email: 'amanda.wilson@example.com', phone: '+1765987321', hireDate: '2019-06-18', salary: 90000 },
      { id: 9, name: 'Jason Taylor', position: 'Sales Manager', department: 'Sales', email: 'jason.taylor@example.com', phone: '+1654879231', hireDate: '2018-04-03', salary: 105000 },
    ];
    return of(dummyEmployees);
  }
}
