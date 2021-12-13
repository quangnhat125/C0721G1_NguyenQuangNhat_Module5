import { Injectable } from '@angular/core';
import {Division} from '../../model/Division';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../../model/CustomerType';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  private API_URL = 'http://localhost:3000/division';
  constructor(private httpClient: HttpClient) { }
  getDivisionList(): Observable<Division[]> {
    return this.httpClient.get<Division[]>(this.API_URL);
}
}
