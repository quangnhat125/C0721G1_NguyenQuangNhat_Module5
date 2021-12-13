// @ts-ignore
import { Injectable } from '@angular/core';
import {Position} from '../../model/Position';
import {Observable} from 'rxjs';
import {Division} from '../../model/Division';
// @ts-ignore
import {HttpClient} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private API_URL = 'http://localhost:3000/position';

  constructor(private httpClient: HttpClient) {
  }

  getPositionList(): Observable<Position[]> {
    return this.httpClient.get<Division[]>(this.API_URL);
  }
}
