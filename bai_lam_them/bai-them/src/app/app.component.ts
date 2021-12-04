import { Student } from "./student";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validator } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  listStudent: Student[];
  ngOnInit(): void {
    this.listStudent = [];
    this.listStudent.push(
      new Student(
        "S1",
        "Van A",
        "1998-05-12",
        1,
        "Danang",
        "0835123123",
        "vanA@gmail.com",
        "English, Japanese"
      )
    );
    this.listStudent.push(
      new Student(
        "S2",
        "Van B",
        "1998-05-12",
        0,
        "Hue",
        "0816777777",
        "vanB@gmail.com",
        "English, Spanish"
      )
    );
    this.listStudent.push(
      new Student(
        "S3",
        "Van C",
        "1998-05-12",
        3,
        "Hanoi",
        "0835000007",
        "vanC@gmail.com",
        "English, Korean"
      )
    );
  }
  genderToUpdate: any;
  title = "bai-them";
  status: boolean = false;
  statusForm: boolean = false;
  showList() {
    this.status = true;
  }
  hideList() {
    this.status = false;
  }
  showCreateForm() {
    this.statusForm = true;
  }
  student: Student;
  content = new FormControl();

  changeGenderValue(object: any) {
    this.genderToUpdate = this.listStudent.find(
      (elementStudent) => elementStudent.id === object.id
    );
    this.genderToUpdate.gender = object.updatedGenderValue;
  }
  deleteStudent(id) {
    let index = this.listStudent.findIndex((student) => student.id === id);
    this.listStudent.splice(index, 1);
  }
}
