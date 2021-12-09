import {Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';

import {FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/model/customer';
import {CustomerType} from 'src/app/model/CustomerType';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  customerTypeList: CustomerType[];
  customerList: Customer[] = [];
  customerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private customer: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getCustomerTypeList();
  }
  submit() {
    const customer = this.customerForm.value;
    this.customer.createCustomer(customer).subscribe();
    this.router.navigateByUrl('customer');
  }
}
