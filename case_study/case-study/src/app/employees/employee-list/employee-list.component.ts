// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {Education} from '../../model/Education';
import {Position} from '../../model/Position';
import {Division} from '../../model/Division';
import {Employee} from '../../model/Employee';
import {EmployeeService} from '../../service/employee/employee.service';
import {EducationService} from '../../service/employee/education.service';
import {PositionService} from '../../service/employee/position.service';
import {DivisionService} from '../../service/employee/division.service';
import {FormControl, FormGroup} from "@angular/forms";


// @ts-ignore
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  educationList: Education[];
  positionList: Position[];
  divisionList: Division[];
  employeeList: Employee[];
  idDelete: number;
  employeeSearch: Employee;
  employeeSearchForm = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    education: new FormControl(''),
    division: new FormControl('')
  })
  constructor(private employeeService: EmployeeService,
              private educationService: EducationService,
              private positionService: PositionService,
              private divisionService: DivisionService) { }

  ngOnInit(): void {
    this.getAllDivisionList();
    this.getAllEducationList();
    this.getAllPositionList();
    this.getEmployeeList();
  }
  getAllEducationList() {
    this.educationService.getEducationList().subscribe(educationList => {
      this.educationList = educationList;
    });
  }
  getAllPositionList() {
    this.positionService.getPositionList().subscribe(positionList => {
      this.positionList = positionList;
    });
  }
  getAllDivisionList() {
    this.divisionService.getDivisionList().subscribe(divisionList => {
      this.divisionList = divisionList;
    });
  }
  getEmployeeList() {
    this.employeeService.getEmployeeList().subscribe(employeeList => this.employeeList = employeeList);
  }

  delete(id: number) {
    this.idDelete = id;
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.idDelete).subscribe(value => {
      this.ngOnInit();
    });
  }

  searchEmployee() {
    this.employeeSearch = Object.assign({}, this.employeeSearchForm.value);
    this.employeeService.searchEmployee(this.employeeSearch).subscribe(value => this.employeeList = value);
  }
}
