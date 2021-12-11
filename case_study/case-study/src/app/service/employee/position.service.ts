import { Injectable } from '@angular/core';
import {Position} from '../../model/Position';
import {Observable} from 'rxjs';
import {Division} from '../../model/Division';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private API_URL = 'http://localhost:3000/position-list';

  constructor(private httpClient: HttpClient) {
  }

  getPositionList(): Observable<Position[]> {
    return this.httpClient.get<Division[]>(this.API_URL);
  }
}
