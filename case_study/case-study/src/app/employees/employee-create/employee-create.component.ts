import { Component, OnInit } from '@angular/core';
import {Education} from "../../model/Education";
import {Position} from "../../model/Position";
import {Division} from "../../model/Division";
import {EducationService} from "../../service/employee/education.service";
import {DivisionService} from "../../service/employee/division.service";
import {PositionService} from "../../service/employee/position.service";
import {EmployeeService} from "../../service/employee/employee.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  educationList: Education[];
  positionList: Position[];
  divisionList: Division[];

  constructor(private educationService: EducationService,
              private divisionService: DivisionService,
              private positionService: PositionService,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllDivisionList(),
      this.getAllEducationList(),
      this.getAllPositionList()
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

}
