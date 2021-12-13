// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/Employee';
import {Customer} from "../../model/customer";
// @ts-ignore
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

  createEmployee(employee: Employee): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL + '/' + id);
  }

  updateEmployee(employee: Employee): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + employee.id, employee);
  }

  searchEmployee(employeeSearch: Employee): Observable<Employee[]> {
    let API = 'http://localhost:3000/employee?';
    API += 'name_like=' + employeeSearch.name;
    if (employeeSearch.position.name !== undefined) {
      API += '&position.name_like=' + employeeSearch.position.name;
    }
    if (employeeSearch.division.name !== undefined) {
      API += '&division.name_like=' + employeeSearch.division.name;
    }
    if (employeeSearch.education.name !== undefined) {
      API += '&education.name_like=' + employeeSearch.education.name;
    }
    return this.httpClient.get<Employee[]>(API);
  }
}
