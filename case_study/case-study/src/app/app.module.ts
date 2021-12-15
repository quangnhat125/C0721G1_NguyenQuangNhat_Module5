// @ts-ignore
import {ReactiveFormsModule} from '@angular/forms';
// @ts-ignore
import {FormsModule} from '@angular/forms';
// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {LayoutComponent} from './layout/layout.component';
import {CustomersModule} from './customers/customers.module';
// @ts-ignore
import {CommonModule} from '@angular/common';
// @ts-ignore
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import {EmployeesModule} from './employees/employees.module';
import {ServiceAppModule} from './service-app/service-app.module';
import {ContractModule} from './contract/contract.module';
import {ContractDetailModule} from './contract-detail/contract-detail.module';
import {NgxPaginationModule} from 'ngx-pagination';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    LayoutComponent,
    CustomerEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule, ReactiveFormsModule,
    CustomersModule, HttpClientModule, EmployeesModule, ServiceAppModule, ContractModule, ContractDetailModule, NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LayoutComponent]
})
export class AppModule {
}
