import {Education} from './Education';
import {Position} from './Position';
import {Division} from './Division';

export class Employee {
  id: number;
  name: string;
  birthday: string;
  idCard: string;
  phone: string;
  email: string;
  education: Education;
  position: Position;
  division: Division;
  salary: number;
}
