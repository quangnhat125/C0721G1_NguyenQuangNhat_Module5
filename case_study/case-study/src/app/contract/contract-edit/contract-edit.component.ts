import { Component, OnInit } from '@angular/core';
import {ContractDetail} from "../../model/contract-detail";
import {Employee} from "../../model/Employee";
import {Customer} from "../../model/customer";
import {Service} from "../../model/Service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContractDetailService} from "../../service/contract/contract-detail.service";
import {ContractService} from "../../service/contract/contract.service";
import {EmployeeService} from "../../service/employee/employee.service";
import {CustomerService} from "../../service/customer/customer.service";
import {ServiceAppService} from "../../service/serviceApp/service-app.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Contract} from "../../model/contract";
import {CustomerType} from "../../model/CustomerType";

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
  contractDetailList: ContractDetail[];
  employeeList: Employee[];
  customerList: Customer[];
  serviceList: Service[];
  id: number;
  contract: Contract;
  contractForm = new FormGroup({
    id: new FormControl(''),
    employee: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    startDate: new FormControl('', [Validators.required,  Validators.pattern('\\d{4}[-]((([0]{1})([1-9]{1}))|(([1]{1})([0-2]{1})))' +
      '[-]((([0]{1})([1-9]{1}))|(([1-2]{1})([0-9]{1}))|(([3]{1})([0-1]{1})))'), this.validFutureDate]),
    endDate: new FormControl('', [Validators.required,  Validators.pattern('\\d{4}[-]((([0]{1})([1-9]{1}))|(([1]{1})([0-2]{1})))' +
      '[-]((([0]{1})([1-9]{1}))|(([1-2]{1})([0-9]{1}))|(([3]{1})([0-1]{1})))'), this.validFutureDate]),
    deposit: new FormControl('', Validators.required),
    // total: new FormControl('', Validators.required),
  }, this.validEndDateFuture)
  constructor(private contractDetailService: ContractDetailService,
              private contractService: ContractService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private serviceAppService: ServiceAppService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((a: ParamMap) => {
      this.id = +a.get('id');
      this.getContract(this.id); });
  }
  ngOnInit(): void {
    this.getAllServiceList();
    this.getAllContractDetail();
    this.getAllCustomerList();
    this.getAllEmployeeList();
  }
  getAllContractDetail() {
    return this.contractDetailService.getAllContractDetail().subscribe(value => this.contractDetailList = value);
  }
  getAllEmployeeList() {
    return this.employeeService.getEmployeeList().subscribe(value => this.employeeList = value);
  }
  getAllCustomerList() {
    return this.customerService.getCustomerList().subscribe(value => this.customerList = value);
  }
  getAllServiceList() {
    return this.serviceAppService.getServiceList().subscribe(value => this.serviceList = value);
  }
  validFutureDate(abstractControl: AbstractControl) {
    return checkDateFuture(abstractControl.value) ? null : {futureDate : true};
  }
  validEndDateFuture(abstractControl: AbstractControl) {
    return checkEndDateToStartDate(abstractControl.value.startDate, abstractControl.value.endDate) ? null : {endDate : true};
  }

  updateContract() {
    const contractUpdate = Object.assign({}, this.contractForm.value);
    this.contractService.updateContract(contractUpdate).subscribe();
    this.router.navigateByUrl('contract/list');
  }

  private getContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {this.contractForm.setValue(contract); });
  }
  compareEmployee(c1: Employee, c2: Employee): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareCustomer(c1: Customer, c2: Customer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareService(c1: Service, c2: Service): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
function checkDateFuture(date) {
  let currentDate = new Date();
  let dateImport = new Date(date);
  // @ts-ignore
  if (dateImport > currentDate) {
    return true;
  } else {
    return false;
  }
}
function checkEndDateToStartDate(startDate, endDate) {
  let startDateImport = new Date(startDate);
  let endDateImport = new Date(endDate);
  if (endDateImport > startDateImport) {
    return true;
  } else {
    return false;
  }
}
