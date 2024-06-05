// dashboard.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public userData: any;
  public tasks: any[];
  public notifications: any[];

  constructor( private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.dashboardService.getUserData().subscribe(data => this.userData = data);
    this.dashboardService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.dashboardService.getNotifications().subscribe(notifications => this.notifications = notifications);
  }
}
