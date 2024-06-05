import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './features/employee/employee.component';
import { EmployeeDetailsComponent } from './features/employee-details/employee-details.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'employees', component: EmployeeComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent }, // Dynamic segment for employee ID
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
