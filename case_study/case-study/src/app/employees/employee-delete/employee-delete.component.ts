import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee/employee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../model/Employee";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employee: Employee;
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const employeeId = this.activatedRoute.snapshot.params.id;
    this.employeeService.findById(employeeId).subscribe(value =>
      this.employee = value);
  }

  ngOnInit(): void {
  }
  findById(id) {
    this.employeeService.findById(id);
  }
  confirmDelete() {
    this.employeeService.deleteEmployee(this.employee.id).subscribe(value => this.router.navigateByUrl('employee/list'));
  }

}
