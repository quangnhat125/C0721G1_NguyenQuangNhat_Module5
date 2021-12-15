import {Departure} from "./Departure";
import {Arrival} from "./Arrival";

export class Car {
  id: number;
  carPlate: string;
  type: string;
  name: string;
  departure: Departure;
  arrival: Arrival;
  phone: string;
  email: string;
  timeStart: string;
  timeEnd: string;
}
