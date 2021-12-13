import { Component, OnInit } from '@angular/core';
import {Service} from "../../model/Service";
import {ServiceAppService} from "../../service/serviceApp/service-app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-service-delete',
  templateUrl: './service-delete.component.html',
  styleUrls: ['./service-delete.component.css']
})
export class ServiceDeleteComponent implements OnInit {
  service: Service;
  constructor(private serviceAppService: ServiceAppService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const serviceId = this.activatedRoute.snapshot.params.id;
    this.serviceAppService.findById(serviceId).subscribe(value =>
      this.service = value); }

  ngOnInit(): void {
  }
  confirmDelete() {
    this.serviceAppService.deleteService(this.service.id).subscribe(value => this.router.navigateByUrl('service/list'));
  }
}
