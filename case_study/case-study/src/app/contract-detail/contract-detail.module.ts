import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDetailRoutingModule } from './contract-detail-routing.module';
import { ContractDetailListComponent } from './contract-detail-list/contract-detail-list.component';
import { ContractDetailCreateComponent } from './contract-detail-create/contract-detail-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ContractDetailListComponent, ContractDetailCreateComponent],
  imports: [
    CommonModule,
    ContractDetailRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractDetailModule { }
