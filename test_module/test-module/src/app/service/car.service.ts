import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/Car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private API_URL = 'http://localhost:3000/car';
  constructor(private httpClient: HttpClient) { }

  getCarList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.API_URL);
  }
  findById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(this.API_URL + '/' + id);
  }
  deleteCar(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
  updateCar(car: Car): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + car.id, car);
  }
}
