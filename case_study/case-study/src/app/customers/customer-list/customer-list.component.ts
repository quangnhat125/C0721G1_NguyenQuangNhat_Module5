import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/model/customer';
import {CustomerType} from '../../model/CustomerType';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    this.customerService.getCustomerList().subscribe(value => this.customerList = value);
  }
}
