// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import {NgxPaginationModule} from 'ngx-pagination';


// @ts-ignore
@NgModule({
  declarations: [CustomerDeleteComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgxPaginationModule
  ]
})
export class CustomersModule { }
