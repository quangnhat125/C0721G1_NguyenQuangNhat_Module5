import { Country } from "./../country";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"],
})
export class RegisterFormComponent implements OnInit {
  countryList: Country[] = [
    new Country("1", "Vietnam"),
    new Country("2", "Korean"),
    new Country("3", "USA"),
    new Country("4", "Japan"),
  ];
  constructor() {}

  ngOnInit(): void {}
  registerForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    country: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required, Validators.min(18)]),
    gender: new FormControl("", [Validators.required]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("^\\+84\\d{9,10}$"),
    ]),
  });
  register() {}
}
