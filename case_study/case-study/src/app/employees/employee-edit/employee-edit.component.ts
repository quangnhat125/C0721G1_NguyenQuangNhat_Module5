import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../service/employee/employee.service";
import {PositionService} from "../../service/employee/position.service";
import {DivisionService} from "../../service/employee/division.service";
import {EducationService} from "../../service/employee/education.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Education} from "../../model/Education";
import {Position} from "../../model/Position";
import {Division} from "../../model/Division";
import {Employee} from "../../model/Employee";
import {CustomerType} from "../../model/CustomerType";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  educationList: Education[];
  positionList: Position[];
  divisionList: Division[];
  employee: Employee;
  employeeForm = new FormGroup({
    code: new FormControl('', [ Validators.required, Validators.pattern('[N][V][-]\\d{4}')]),
    name: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    idCard: new FormControl('', [Validators.required, Validators.pattern('\\d{9,12}')]),
    phone: new FormControl('', [ Validators.required,
      Validators.pattern('(((090)|(091))|((84)(90)|(84)(91)))\\d{7}$')]),
    email: new FormControl('', [Validators.required,
      Validators.pattern('^[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9])*')]),
    education: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    division: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });
  id: number;
  constructor(private employeeService: EmployeeService,
              private positionService: PositionService,
              private divisionService: DivisionService,
              private educationService: EducationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((a: ParamMap) => {
      this.id = +a.get('id');
      this.getEmployee(this.id);
      console.log(this.employeeForm.value);
    });
  }
  getEmployee(id: number) {
    return this.employeeService.findById(id).subscribe(employee => {this.employeeForm.setValue(employee); });
  }
  updateEmployee(): void {
    const employeeUpdate = Object.assign({}, this.employeeForm.value);
    this.employeeService.updateEmployee(employeeUpdate).subscribe();
    this.router.navigateByUrl('employee/list');
  }

  ngOnInit(): void {
    this.getAllDivisionList(),
      this.getAllEducationList(),
      this.getAllPositionList();
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
  compareEducation(c1: Education, c2: Education): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareDivision(c1: Division, c2: Division): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  comparePosition(c1: Position, c2: Position): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
