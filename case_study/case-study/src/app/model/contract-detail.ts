import {AttachService} from "./attach-service";
import {Contract} from "./contract";

export class ContractDetail {
  id: number;
  attachService: AttachService;
  contract: Contract;
  quantity: number;
}
