// @ts-ignore
import {Injectable} from '@angular/core';
import {CustomerType} from '../../model/CustomerType';

// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from 'src/app/model/customer';


// @ts-ignore
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

  searchCustomer(customerSearch: Customer): Observable<Customer[]> {
    console.log(customerSearch.customerType.name);
    // tslint:disable-next-line:max-line-length
    if (customerSearch.customerType.name === undefined) {
      return this.httpClient.get<Customer[]>(this.API_URL + '?' + 'name_like=' + customerSearch.name);
    } else {
      return this.httpClient.get<Customer[]>(this.API_URL + '?' + 'name_like=' + customerSearch.name
        + '&customerType.name_like=' + customerSearch.customerType.name);
    }
  }
}
