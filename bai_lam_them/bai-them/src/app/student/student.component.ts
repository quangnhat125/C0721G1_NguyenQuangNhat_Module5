import { Student } from "./../student";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit, OnChanges {
  listStudent: Student[];
  @Input() studentId: string;
  @Input() newGender: number;
  @Output() getGenderInfo = new EventEmitter();
  color: string = "";
  updatedGenderValue: number = 0;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.newGender == 0) {
      this.color = "blue";
    } else if (this.newGender == 1) {
      this.color = "red";
    } else {
      this.color = "yellow";
    }
  }

  genderValueChange() {
    this.getGenderInfo.emit({
      id: this.studentId,
      updatedGenderValue: this.updatedGenderValue,
    });
    // this.updatedGenderValue = 0;
  }
  ngOnInit(): void {
    // this.listStudent = [];
    // this.listStudent.push(
    //   new Student(
    //     "S1",
    //     "Van A",
    //     "1998-05-12",
    //     1,
    //     "Danang",
    //     "0835123123",
    //     "vanA@gmail.com",
    //     "English, Japanese"
    //   )
    // );
    // this.listStudent.push(
    //   new Student(
    //     "S2",
    //     "Van B",
    //     "1998-05-12",
    //     0,
    //     "Hue",
    //     "0816777777",
    //     "vanB@gmail.com",
    //     "English, Spanish"
    //   )
    // );
    // this.listStudent.push(
    //   new Student(
    //     "S3",
    //     "Van C",
    //     "1998-05-12",
    //     3,
    //     "Hanoi",
    //     "0835000007",
    //     "vanC@gmail.com",
    //     "English, Korean"
    //   )
    // );
  }
}
