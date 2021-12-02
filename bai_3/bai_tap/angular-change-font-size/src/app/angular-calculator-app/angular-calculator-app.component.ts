import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular-calculator-app",
  templateUrl: "./angular-calculator-app.component.html",
  styleUrls: ["./angular-calculator-app.component.css"],
})
export class AngularCalculatorAppComponent implements OnInit {
  firstNumber: number;
  secondNumber: number;
  output: number;
  operator: string;

  constructor() {}

  ngOnInit(): void {}
  calculate() {
    switch (this.operator) {
      case "+":
        this.output = this.firstNumber + this.secondNumber;
        break;
      case "-":
        this.output = this.firstNumber - this.secondNumber;
        break;
      case "*":
        this.output = this.firstNumber * this.secondNumber;
        break;
      case "/":
        this.output = this.firstNumber / this.secondNumber;
        break;
    }
  }
}
