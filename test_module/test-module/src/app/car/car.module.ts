import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CarListComponent, CarEditComponent, CarDeleteComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
