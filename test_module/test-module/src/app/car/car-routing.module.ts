import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from "./car-list/car-list.component";
import {CarDeleteComponent} from "./car-delete/car-delete.component";
import {CarEditComponent} from "./car-edit/car-edit.component";


const routes: Routes = [
  {
    path: 'list',
    component: CarListComponent
  },
  {
    path: 'delete/:id',
    component: CarDeleteComponent
  },
  {
    path: 'update/:id',
    component: CarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
