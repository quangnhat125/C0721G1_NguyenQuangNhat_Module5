import { Component, OnInit } from '@angular/core';
import {Departure} from "../../model/Departure";
import {Arrival} from "../../model/Arrival";
import {ArrivalService} from "../../service/arrival.service";
import {DepartureService} from "../../service/departure.service";
import {CarService} from "../../service/car.service";
import {Car} from "../../model/Car";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  departureList: Departure[];
  arrivalList: Arrival[];
  carList: Car[];
  idDelete: number;
  car: Car;

  constructor(private arrivalService: ArrivalService,
              private departureService: DepartureService,
              private carService:CarService) { }

  ngOnInit(): void {
    this.getCarList();
    this.getArrivalList();
    this.getDepartureList();

  }
  getCarList() {
    this.carService.getCarList().subscribe(value => this.carList = value);
  }
  getArrivalList() {
    this.arrivalService.getArrivalList().subscribe(value => this.arrivalList = value);
  }
  getDepartureList(){
    this.departureService.getDepartureList().subscribe(value => this.departureList = value);
  }

  delete(id: number) {
    this.idDelete = Number (id);
  }

  deleteCar() {
    this.carService.deleteCar(this.idDelete).subscribe(value => this.ngOnInit())
  }
}
