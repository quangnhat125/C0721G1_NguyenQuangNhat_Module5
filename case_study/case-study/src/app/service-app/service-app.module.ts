import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAppRoutingModule } from './service-app-routing.module';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceCreateComponent } from './service-create/service-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceDeleteComponent } from './service-delete/service-delete.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';


@NgModule({
  declarations: [ServiceListComponent, ServiceCreateComponent, ServiceDeleteComponent, ServiceEditComponent],
  imports: [
    CommonModule,
    ServiceAppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ServiceAppModule { }
