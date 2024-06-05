// employee.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmployeeDetailsService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }
}
