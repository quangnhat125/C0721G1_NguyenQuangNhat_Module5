import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from '../../model/CustomerType';
import {RentType} from '../../model/rent-type';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  private API_URL = 'http://localhost:3000/rent-type';
  constructor(private httpClient: HttpClient) { }
  getRentTypeList(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(this.API_URL);
  }
}
