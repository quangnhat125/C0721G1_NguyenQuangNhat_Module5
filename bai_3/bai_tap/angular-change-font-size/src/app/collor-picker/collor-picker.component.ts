import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-color-picker",
  templateUrl: "./collor-picker.component.html",
  styleUrls: ["./collor-picker.component.css"],
})
export class CollorPickerComponent implements OnInit {
  color: string;
  constructor() {}

  ngOnInit(): void {}
}
