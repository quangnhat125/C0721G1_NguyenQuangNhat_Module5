import { Component, OnInit } from '@angular/core';
import {AttachService} from "../../model/attach-service";
import {ContractDetail} from "../../model/contract-detail";
import {Contract} from "../../model/contract";
import {AttachServiceService} from "../../service/contract/attach-service.service";
import {ContractDetailService} from '../../service/contract/contract-detail.service';
import {ContractService} from "../../service/contract/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  attachServiceList: AttachService[];
  contractDetailList: ContractDetail[];
  contractList: Contract[];
  constructor(private attachServiceService: AttachServiceService,
              private contractDetailService: ContractDetailService,
              private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAllAttachService();
    this.getAllContractDetail();
    this.getAllContract();
  }
  getAllAttachService() {
    return this.attachServiceService.getAllAttachService().subscribe(value => this.attachServiceList = value);
  }
  getAllContractDetail() {
    return this.contractDetailService.getAllContractDetail().subscribe(value => this.contractDetailList = value);
  }
  getAllContract() {
    return this.contractService.getAllContract().subscribe(value => this.contractList = value);
  }

}
