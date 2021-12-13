// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Education} from '../../model/Education';
import {Position} from '../../model/Position';
import {Division} from '../../model/Division';
import {EducationService} from '../../service/employee/education.service';
import {DivisionService} from '../../service/employee/division.service';
import {PositionService} from '../../service/employee/position.service';
import {EmployeeService} from '../../service/employee/employee.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  educationList: Education[];
  positionList: Position[];
  divisionList: Division[];
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

  constructor(private educationService: EducationService,
              private divisionService: DivisionService,
              private positionService: PositionService,
              private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllDivisionList(),
      this.getAllEducationList(),
      this.getAllPositionList();
    console.log(this.educationList);
    console.log(this.divisionList);
    console.log(this.positionList);
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
  createEmployee() {
    const employee = this.employeeForm.value;
    this.employeeService.createEmployee(employee).subscribe();
    this.router.navigateByUrl('employee/list');
  }

}
