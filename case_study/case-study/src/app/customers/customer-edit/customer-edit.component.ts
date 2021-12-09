import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerType} from '../../model/CustomerType';
import {Customer} from '../../model/Customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerTypeList: CustomerType[];
  customer: Customer;
  customerForm = new FormGroup
  ({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    idCard: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  id: number;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((a: ParamMap) => {
      this.id = +a.get('id');
      this.getCustomer(this.id);
      console.log(this.customerForm.value);
    });
  }

  ngOnInit(): void {
    this.customerTypeList = this.customerTypeService.getCustomerTypeList();
  }

  updateCustomer(): void {
    const customerUpdate = Object.assign({}, this.customerForm.value);
    this.customerService.updateCustomer(customerUpdate).subscribe();
    this.router.navigateByUrl('customer');
  }
  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {this.customerForm.setValue(customer); });
}
}
