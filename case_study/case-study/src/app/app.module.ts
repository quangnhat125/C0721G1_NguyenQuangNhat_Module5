import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {LayoutComponent} from './layout/layout.component';
import {CustomersModule} from './customers/customers.module';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import {EmployeesModule} from './employees/employees.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    LayoutComponent,
    CustomerEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule, ReactiveFormsModule,
    CustomersModule, HttpClientModule, EmployeesModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
