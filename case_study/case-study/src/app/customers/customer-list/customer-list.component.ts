import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/model/customer';
import {CustomerType} from '../../model/CustomerType';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[];

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
}
