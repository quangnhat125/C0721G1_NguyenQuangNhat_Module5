import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Arrival} from "../model/Arrival";

@Injectable({
  providedIn: 'root'
})
export class ArrivalService {
  private API_URL = 'http://localhost:3000/arrival';
  constructor(private httpClient: HttpClient) { }
  getArrivalList(): Observable<Arrival[]> {
    return this.httpClient.get<Arrival[]>(this.API_URL)
  }
}
