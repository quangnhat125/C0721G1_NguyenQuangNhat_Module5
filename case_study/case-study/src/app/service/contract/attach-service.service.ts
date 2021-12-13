import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {AttachService} from "../../model/attach-service";

@Injectable({
  providedIn: 'root'
})
export class AttachServiceService {
  private API_URL = 'http://localhost:3000/attach-service';
  constructor(private httpClient: HttpClient) { }
  getAllAttachService(): Observable<AttachService[]> {
    return this.httpClient.get<AttachService[]>(this.API_URL);
  }
}
