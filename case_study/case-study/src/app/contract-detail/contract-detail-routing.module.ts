import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractDetailListComponent} from './contract-detail-list/contract-detail-list.component';
import {ContractDetailCreateComponent} from "./contract-detail-create/contract-detail-create.component";


const routes: Routes = [
  {
    path: 'list',
    component: ContractDetailListComponent
  },
  {
    path: 'create',
    component: ContractDetailCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractDetailRoutingModule { }
