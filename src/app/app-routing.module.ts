import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './componets/add-employee/add-employee.component';
import { EmployeeListComponent } from './componets/employee-list/employee-list.component';

const routes: Routes = [{ path: 'add', component: AddEmployeeComponent },
{ path: 'list', component: EmployeeListComponent },
{ path: '', redirectTo:'list' , pathMatch:'full'},
  { path: '**', redirectTo: ''},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
