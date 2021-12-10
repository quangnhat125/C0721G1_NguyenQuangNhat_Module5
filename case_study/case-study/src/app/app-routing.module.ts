import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {CustomerDeleteComponent} from './customers/customer-delete/customer-delete.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'customer', component: CustomerListComponent },
      {path: 'customer/create', component: CustomerCreateComponent},
      {path: 'customer/delete/:id', component: CustomerDeleteComponent},
      {path: 'customer/update/:id', component: CustomerEditComponent},
      {path: 'employee', component: EmployeeListComponent}],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
