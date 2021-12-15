import {Component, OnInit} from '@angular/core';
import {Departure} from "../../model/Departure";
import {Arrival} from "../../model/Arrival";
import {Car} from "../../model/Car";
import {ArrivalService} from "../../service/arrival.service";
import {DepartureService} from "../../service/departure.service";
import {CarService} from "../../service/car.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  departureList: Departure[];
  arrivalList: Arrival[];
  carList: Car[];
  car: Car;
  carEditForm = new FormGroup({
      id: new FormControl(''),
      carPlate: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      departure: new FormControl('', Validators.required),
      arrival: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('(((090)|(093)|(097)))\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9])*')]),
      timeStart: new FormControl('', [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')]),
      timeEnd: new FormControl('', [Validators.required, Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')]),
    }
  );
  id: number;
  constructor(private arrivalService: ArrivalService,
              private departureService: DepartureService,
              private carService: CarService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((a: ParamMap) => {
      this.id = +a.get('id');
      this.getCar(this.id);
    });
  }

  ngOnInit(): void {
    this.getArrivalList();
    this.getDepartureList();
  }
  getCar(id: number) {
    return this.carService.findById(id).subscribe(car => {this.carEditForm.setValue(car)})
  }
  compareDeparture(c1: Departure, c2: Departure): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  compareArrival(c1: Arrival, c2: Arrival): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  getArrivalList() {
    this.arrivalService.getArrivalList().subscribe(value => this.arrivalList = value);
  }
  getDepartureList(){
    this.departureService.getDepartureList().subscribe(value => this.departureList = value);
  }

  updateCar() {
    const carUpdate = Object.assign({}, this.carEditForm.value);
    this.carService.updateCar(carUpdate).subscribe();
    this.router.navigateByUrl('car/list');
  }
  validHour(abstractControl: AbstractControl) {
    return checkMinHr(abstractControl.value) ? null : {hour : true};
  }

}
function checkMinHr(timeStart): any {
  const today = new Date();
  const timeCur = today.getHours();
  const timeImport = new Date(timeStart);
  // @ts-ignore
  if (timeImport > 5) {
    return true;
  } else {
    return false
  }
}
