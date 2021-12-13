import { Component, OnInit } from '@angular/core';
import {ContractDetailService} from "../../service/contract/contract-detail.service";
import {ContractService} from "../../service/contract/contract.service";
import {Router} from "@angular/router";
import {ContractDetail} from "../../model/contract-detail";
import {Employee} from "../../model/Employee";
import {Customer} from "../../model/customer";
import {Service} from "../../model/Service";
import {EmployeeService} from "../../service/employee/employee.service";
import {CustomerService} from "../../service/customer/customer.service";
import {ServiceAppService} from "../../service/serviceApp/service-app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractDetailList: ContractDetail[];
  employeeList: Employee[];
  customerList: Customer[];
  serviceList: Service[];
  contractForm = new FormGroup({
    id: new FormControl('', Validators.required),
    employee: new FormControl('', Validators.required),
    customer: new FormControl('', Validators.required),
    service: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    Deposit: new FormControl('', Validators.required),
    Total: new FormControl('', Validators.required),
  })
  constructor(private contractDetailService: ContractDetailService,
              private contractService: ContractService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private serviceAppService: ServiceAppService,
              private router: Router) { }

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

  createContract() {
    const contract = this.contractForm.value;
    this.contractService.createContract(contract).subscribe();
    this.router.navigateByUrl('contract/list');
  }
}
