// employee-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any = {};
  newTask: any = { name: '', description: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeDetailsService: EmployeeDetailsService
  ) { }

  ngOnInit(): void {
    const employeeId = +this.route.snapshot.paramMap.get('id');

    
    this.employeeDetailsService.getEmployeeById(employeeId).subscribe(
      (employee) => {
        this.employee = employee;
      },
      (error) => {
        console.error('Error fetching employee details', error);
      }
    );
  }

  addTask(): void {
    this.employee.deliverables.push(this.newTask)
    const employeeId = this.employee.id;
    this.employeeDetailsService.addTaskToEmployee(employeeId, this.employee).subscribe(
      (task) => {
        console.log('Task added successfully:', task);
        // Optionally, navigate to another route or update UI
        this.newTask = { name: '', description: '' }; // Clear form fields
      },
      (error) => {
        console.error('Error adding task:', error);
      }
    );
  }
}
