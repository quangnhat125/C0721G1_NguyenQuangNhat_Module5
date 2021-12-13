import {RentType} from './rent-type';

export class Service {
  id: number;
  code: string;
  name: string;
  area: number;
  numberFloor: number;
  maxPeople: number;
  price: number;
  rentType: RentType;
  status: string;
}
