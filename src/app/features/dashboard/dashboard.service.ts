// dashboard.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() {}

  getUserData(): Observable<any> {
    const dummyUserData = {
      name: 'John Doe',
      position: 'Manager',
      email: 'john.doe@example.com',
      lastLogin: '2024-05-21'
    };
    return of(dummyUserData);
  }

  getTasks(): Observable<any[]> {
    const dummyTasks = [
      { id: 1, title: 'Complete project report', status: 'Pending' },
      { id: 2, title: 'Review team performance', status: 'In-Progress' },
      { id: 3, title: 'Update client on project status', status: 'Completed' },
      { id: 4, title: 'Organize team meeting', status: 'Pending' },
      { id: 5, title: 'Prepare budget proposal', status: 'Pending' }
    ];
    return of(dummyTasks);
  }

  getNotifications(): Observable<any[]> {
    const dummyNotifications = [
      { id: 1, message: 'New employee joined', date: '2024-05-20' },
      { id: 2, message: 'Server maintenance scheduled', date: '2024-05-22' },
      { id: 3, message: 'New policy update', date: '2024-05-19' },
      { id: 4, message: 'Team outing planned', date: '2024-05-18' }
    ];
    return of(dummyNotifications);
  }
}
