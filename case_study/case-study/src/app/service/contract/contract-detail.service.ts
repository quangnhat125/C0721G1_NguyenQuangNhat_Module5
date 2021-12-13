import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContractDetail} from "../../model/contract-detail";
import {Service} from "../../model/Service";

@Injectable({
  providedIn: 'root'
})
export class ContractDetailService {
  private API_URL = 'http://localhost:3000/contract-detail';
  constructor(private httpClient: HttpClient) { }
  getAllContractDetail(): Observable<ContractDetail[]> {
    return this.httpClient.get<ContractDetail[]>(this.API_URL);
  }
  createContractDetail(contractDetail: ContractDetail): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, contractDetail);
  }
}
