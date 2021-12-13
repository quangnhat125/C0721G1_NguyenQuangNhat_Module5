import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contract} from "../../model/contract";
import {ContractDetail} from "../../model/contract-detail";
import {Employee} from "../../model/Employee";
import {Customer} from "../../model/customer";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private API_URL = 'http://localhost:3000/contract';

  constructor(private httpClient: HttpClient) { }
  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL);
  }

  createContract(contract: Contract): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, contract);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(this.API_URL + '/' + id);
  }

  updateContract(contract: Contract): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + contract.id, contract);
  }
}
