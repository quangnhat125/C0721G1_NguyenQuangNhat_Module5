// @ts-ignore
import { Injectable } from '@angular/core';
import {CustomerType} from '../../model/CustomerType';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private API_URL = 'http://localhost:3000/customer-type';
  // customerTypeList: CustomerType[] = [
  //   {id: 1, name: 'Diamond'},
  //   {id: 2, name: 'Platinum'},
  //   {id: 3, name: 'Gold'},
  //   {id: 4, name: 'Silver'},
  //   {id: 5, name: 'Member'},
  // ];
  constructor(private httpClient: HttpClient) { }
  // getCustomerTypeList() {
  //   return this.customerTypeList;
  // }
  getCustomerTypeList(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL);
  }
}
