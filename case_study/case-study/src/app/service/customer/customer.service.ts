import {Injectable} from '@angular/core';
import {CustomerType} from '../../model/CustomerType';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from 'src/app/model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL = 'http://localhost:3000/customer';

  constructor(private httpClient: HttpClient) {
  }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }
  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }
  createCustomer(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, customer);
  }
  updateCustomer(customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + customer.id, customer);
  }
  deleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  //
  // saveCustomer(customer) {
  //   this.customerList.push(customer);

}
