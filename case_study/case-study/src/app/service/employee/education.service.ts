import { Injectable } from '@angular/core';
import {Education} from '../../model/Education';
import {Observable} from 'rxjs';
import {Division} from '../../model/Division';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  educationList: Education[];
  private API_URL = 'http://localhost:3000/education-list';

  constructor(private httpClient: HttpClient) {
  }

  getEducationList(): Observable<Education[]> {
    return this.httpClient.get<Division[]>(this.API_URL);
  }
}
