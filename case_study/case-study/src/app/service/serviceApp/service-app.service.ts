import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Service} from '../../model/Service';
import {Employee} from '../../model/Employee';


@Injectable({
  providedIn: 'root'
})
export class ServiceAppService {
  private API_URL = 'http://localhost:3000/service';

  constructor(private httpClient: HttpClient) { }
  getServiceList(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.API_URL);
  }
  createService(service: Service): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, service);
  }
  findById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(this.API_URL + '/' + id);
  }
  deleteService(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  updateService(service: Service): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + service.id, service);
  }
}
