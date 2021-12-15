import { Component, OnInit } from '@angular/core';
import {RentType} from "../../model/rent-type";
import {Service} from "../../model/Service";
import {ServiceAppService} from "../../service/serviceApp/service-app.service";
import {RentTypeService} from "../../service/serviceApp/rent-type.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  rentTypeList: RentType[];
  service: Service;
  id: number;
  serviceForm = new FormGroup({
    id: new FormControl(''),
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
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((a: ParamMap) => {
      this.id = +a.get('id');
      this.getService(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllRentTypeList();
  }
  getAllRentTypeList() {
    return this.rentTypeService.getRentTypeList().subscribe(value => this.rentTypeList = value);
  }
  getService(id: number) {
    return this.serviceAppService.findById(id).subscribe(service => {this.serviceForm.setValue(service);});
  }
  compareRentType(c1: RentType, c2: RentType): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  updateService() {
    const employeeUpdate = Object.assign({}, this.serviceForm.value);
    return this.serviceAppService.updateService(employeeUpdate).subscribe(value => this.router.navigateByUrl('service/list'));

  }
}

