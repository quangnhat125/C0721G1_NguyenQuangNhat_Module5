import { Injectable } from '@angular/core';
import {Education} from '../../model/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  educationList: Education

  constructor() { }
}
