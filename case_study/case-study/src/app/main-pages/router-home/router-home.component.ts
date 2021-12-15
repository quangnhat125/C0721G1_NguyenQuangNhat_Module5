import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-router-home',
  templateUrl: './router-home.component.html',
  styleUrls: ['./router-home.component.css']
})
export class RouterHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigateByUrl('layout');
  }
}
