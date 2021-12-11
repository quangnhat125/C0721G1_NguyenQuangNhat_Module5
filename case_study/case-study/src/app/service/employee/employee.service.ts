import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = 'http://localhost:3000/employee';

  constructor(private httpClient: HttpClient) {
  }
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL);
  }
}
