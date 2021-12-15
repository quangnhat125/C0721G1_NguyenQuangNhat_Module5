import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Arrival} from "../model/Arrival";
import {Departure} from "../model/Departure";

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  private API_URL = 'http://localhost:3000/departure';
  constructor(private httpClient: HttpClient) { }
  getDepartureList(): Observable<Departure[]> {
    return this.httpClient.get<Departure[]>(this.API_URL)
  }
}
