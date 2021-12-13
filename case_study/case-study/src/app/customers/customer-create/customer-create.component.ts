// @ts-ignore
import {AbstractControl, Validators} from '@angular/forms';
// @ts-ignore
import {FormControl} from '@angular/forms';
// @ts-ignore
import {FormGroup} from '@angular/forms';
// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/model/customer';
import {CustomerType} from 'src/app/model/CustomerType';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
// @ts-ignore
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
  customerTypeList: CustomerType[];
  customerList: Customer[] = [];
  customerForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern('[K][H][-]\\d{4}')]),
    name: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
    birthday: new FormControl('', [Validators.required,
      Validators.pattern('\\d{4}[-]((([0]{1})([1-9]{1}))|(([1]{1})([0-2]{1})))' +
        '[-]((([0]{1})([1-9]{1}))|(([1-2]{1})([0-9]{1}))|(([3]{1})([0-1]{1})))'), this.checkMinAge] ),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9,12}')]),
    phone: new FormControl('', [Validators.required,
      Validators.pattern('(((090)|(091))|((84)(90)|(84)(91)))\\d{7}$')]),
    email: new FormControl('', [Validators.required,
      Validators.pattern('^[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9])*')]),
    address: new FormControl('', Validators.required),
  });

  constructor(private customer: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
    console.log(this.customerTypeList);
  }

  submit() {
    const customer = this.customerForm.value;
    this.customer.createCustomer(customer).subscribe();
    this.router.navigateByUrl('customer/list');
  }

  getAllCustomerType() {
    this.customerTypeService.getCustomerTypeList().subscribe(customerTypeList => {
      this.customerTypeList = customerTypeList;
    });
  }

  get code() {
    return this.customerForm.get('code');
  }
  checkMinAge(abstractControl: AbstractControl): any {
    const dateOfBirth = abstractControl.value;
    const yearOfBirth = dateOfBirth.substr(0, 4);
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth >= 18 ? null : { under18: true};
  }

}
