// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/model/customer';
import {CustomerType} from '../../model/CustomerType';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

// @ts-ignore
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[];
  customerSearch: Customer;
  idDelete: number;
  page = 1;
  customerSearchForm = new FormGroup({
    name: new FormControl(''),
    customerType: new FormControl('')
  })

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService
  ) {
  }

  ngOnInit(): void {
    this.getCustomerList();
    this.customerTypeService.getCustomerTypeList().subscribe(typeList => {
      this.customerTypeList = typeList;
    });
  }
  getCustomerList() {
    this.customerService.getCustomerList().subscribe(value => this.customerList = value);
  }
  getCustomerTypeList() {
    this.customerTypeService.getCustomerTypeList().subscribe(value => this.customerTypeList = value);
  }

  searchCustomer() {
    this.customerSearch = Object.assign({}, this.customerSearchForm.value);
    this.customerService.searchCustomer(this.customerSearch).subscribe(value => this.customerList = value);
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(value => {
      this.ngOnInit();
    });
  }

  delete(id: number) {
    this.idDelete = Number (id);
  }
}
