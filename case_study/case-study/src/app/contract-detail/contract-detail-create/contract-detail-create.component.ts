import { Component, OnInit } from '@angular/core';
import {ContractDetailService} from '../../service/contract/contract-detail.service';
import {AttachServiceService} from '../../service/contract/attach-service.service';
import {ContractService} from '../../service/contract/contract.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Contract} from "../../model/contract";
import {AttachService} from "../../model/attach-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contract-detail-create',
  templateUrl: './contract-detail-create.component.html',
  styleUrls: ['./contract-detail-create.component.css']
})
export class ContractDetailCreateComponent implements OnInit {
  contractList: Contract[];
  attachServiceList: AttachService[];
  contractDetailForm = new FormGroup( {
    contract: new FormControl('', Validators.required),
    attachService: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
  });
  constructor(private contractDetailService: ContractDetailService,
              private attachServiceService: AttachServiceService,
              private contractService: ContractService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllAttachService();
    this.getAllContract();
  }
  getAllContract() {
    return this.contractService.getAllContract().subscribe(value => this.contractList = value);
  }
  getAllAttachService() {
    return this.attachServiceService.getAllAttachService().subscribe(value => this.attachServiceList = value);
  }

  createContractDetail() {
    const contractDetail = this.contractDetailForm.value;
    this.contractDetailService.createContractDetail(contractDetail).subscribe();
    this.router.navigateByUrl('contract-detail/list');
  }
}
