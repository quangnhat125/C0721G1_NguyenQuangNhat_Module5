import { Component, OnInit } from '@angular/core';
import {RentType} from "../../model/rent-type";
import {ServiceAppService} from "../../service/serviceApp/service-app.service";
import {RentTypeService} from "../../service/serviceApp/rent-type.service";
import {Service} from "../../model/Service";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  rentTypeList: RentType[];
  serviceList: Service[];
  constructor(private serviceAppService: ServiceAppService,
              private rentTypeService: RentTypeService) { }

  ngOnInit(): void {
    this.getRentTypeList();
    this.getServiceList();
  }
  getRentTypeList() {
    this.rentTypeService.getRentTypeList().subscribe(value => this.rentTypeList = value);
  }
  getServiceList() {
    this.serviceAppService.getServiceList().subscribe(
      value => {this.serviceList = value; console.log(this.serviceList); });
  }
}
