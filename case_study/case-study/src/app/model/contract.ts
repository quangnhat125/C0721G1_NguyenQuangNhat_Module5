import {Employee} from "./Employee";
import {Customer} from "./customer";
import {Service} from "./Service";

export class Contract {
  id: number;
  employee: Employee;
  customer: Customer;
  service: Service;
  startDate: string;
  endDate: string;
  deposit: number;
  total: number;
}
