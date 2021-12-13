// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeDeleteComponent} from "./employee-delete/employee-delete.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";


const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent
  },
  {
    path: 'create',
    component: EmployeeCreateComponent
  },
  {
    path: 'delete/:id',
    component: EmployeeDeleteComponent
  },
  {
    path: 'update/:id',
    component: EmployeeEditComponent
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
