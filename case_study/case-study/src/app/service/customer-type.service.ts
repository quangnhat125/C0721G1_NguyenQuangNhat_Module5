import { Injectable } from '@angular/core';
import {CustomerType} from '../model/CustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [
    {id: 1, name: 'Diamond'},
    {id: 2, name: 'Platinum'},
    {id: 3, name: 'Gold'},
    {id: 4, name: 'Silver'},
    {id: 5, name: 'Member'},
  ]
  constructor() { }
  getCustomerTypeList() {
    return this.customerTypeList;
  }
}
