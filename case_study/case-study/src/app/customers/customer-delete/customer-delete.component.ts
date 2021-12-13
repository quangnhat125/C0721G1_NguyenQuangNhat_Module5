// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer/customer.service';
import {Customer} from '../../model/customer';
// @ts-ignore
import {ActivatedRoute, Route, Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customer: Customer;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const customerId = this.activatedRoute.snapshot.params.id;
    this.customerService.findById(customerId).subscribe(value =>
      this.customer = value);
  }

  ngOnInit(): void {
  }

  findById(id) {
    this.customerService.findById(id);
  }

  confirmDelete() {
    this.customerService.deleteCustomer(this.customer.id).subscribe(value => this.router.navigateByUrl('customer/list'));
  }
}
