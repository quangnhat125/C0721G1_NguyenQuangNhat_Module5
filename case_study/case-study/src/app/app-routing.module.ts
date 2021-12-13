import {LayoutComponent} from './layout/layout.component';
// @ts-ignore
import {NgModule} from '@angular/core';
// @ts-ignore
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {CustomerDeleteComponent} from './customers/customer-delete/customer-delete.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'employee',
  //       // component: EmployeeListComponent,
  //       loadChildren: () => import('./employees/employees.module').then(module => module.EmployeesModule)
  //     }
  //   ]
  // },
  {
    path: 'customer',
    // component: CustomerListComponent,
    loadChildren: () => import('./customers/customers.module').then(module => module.CustomersModule)
  },
  {
    path: 'employee',
    // component: EmployeeListComponent,
    loadChildren: () => import('./employees/employees.module').then(module => module.EmployeesModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./service-app/service-app.module').then(module => module.ServiceAppModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'contract-detail',
    loadChildren: () => import('./contract-detail/contract-detail.module').then(module => module.ContractDetailModule)
  }
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
