import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import {AttachServiceModule} from "../attach-service/attach-service.module";
import {ContractDetailModule} from "../contract-detail/contract-detail.module";
import { ContractCreateComponent } from './contract-create/contract-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    AttachServiceModule,
    ContractDetailModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
