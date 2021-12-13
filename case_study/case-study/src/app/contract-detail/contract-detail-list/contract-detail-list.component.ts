import { Component, OnInit } from '@angular/core';
import {AttachServiceService} from "../../service/contract/attach-service.service";
import {ContractDetailService} from "../../service/contract/contract-detail.service";
import {ContractService} from "../../service/contract/contract.service";
import {ContractDetail} from "../../model/contract-detail";

@Component({
  selector: 'app-contract-detail-list',
  templateUrl: './contract-detail-list.component.html',
  styleUrls: ['./contract-detail-list.component.css']
})
export class ContractDetailListComponent implements OnInit {
  contractDetailList: ContractDetail[];
  constructor(private attachServiceService: AttachServiceService,
              private contractDetailService: ContractDetailService,
              private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAllContractDetail();
  }
  getAllContractDetail() {
    return this.contractDetailService.getAllContractDetail().subscribe(value => this.contractDetailList = value );
  }

}
