import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPagesRoutingModule } from './main-pages-routing.module';
import { RouterHomeComponent } from './router-home/router-home.component';


@NgModule({
  declarations: [RouterHomeComponent],
  imports: [
    CommonModule,
    MainPagesRoutingModule
  ]
})
export class MainPagesModule { }
