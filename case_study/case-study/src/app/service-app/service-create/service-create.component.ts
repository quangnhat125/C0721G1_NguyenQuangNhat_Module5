import { Component, OnInit } from '@angular/core';
import {RentType} from "../../model/rent-type";
import {ServiceAppService} from "../../service/serviceApp/service-app.service";
import {RentTypeService} from "../../service/serviceApp/rent-type.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent implements OnInit {
  rentTypeList: RentType[];
  serviceForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('[D][V][-]\\d{4}')]),
    name: new FormControl('', Validators.required),
    area: new FormControl('', [Validators.required, Validators.min(0)]),
    numberFloor: new FormControl('', [Validators.required, Validators.min(0)]),
    maxPeople: new FormControl('', [Validators.required, Validators.min(0)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    rentType: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  })
  constructor(private serviceAppService: ServiceAppService,
              private rentTypeService: RentTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getRentTypeList();
  }
  getRentTypeList() {
    this.rentTypeService.getRentTypeList().subscribe(value => this.rentTypeList = value);
  }
  createService() {
    const service = this.serviceForm.value;
    this.serviceAppService.createService(service).subscribe();
    this.router.navigateByUrl('service/list');
  }

}
