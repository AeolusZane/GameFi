/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { TestHero, TestHeroInterface } from "../TestHero";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "TransferHero",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum Hero.Class",
        name: "_class",
        type: "uint8",
      },
    ],
    name: "createHero",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeToSetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "generateRamdom",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getDex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getHealth",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getHeroType",
    outputs: [
      {
        internalType: "enum Hero.Class",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getHeroes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getIntellect",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getMagic",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
    ],
    name: "getStrength",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    name: "setFeeToSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_random",
        type: "uint256",
      },
    ],
    name: "setRandom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hero",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "other",
        type: "address",
      },
    ],
    name: "transferHero",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200120e3803806200120e8339818101604052810190620000379190620000ea565b80806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506200011c565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b28262000085565b9050919050565b620000c481620000a5565b8114620000d057600080fd5b50565b600081519050620000e481620000b9565b92915050565b60006020828403121562000103576200010262000080565b5b60006200011384828501620000d3565b91505092915050565b6110e2806200012c6000396000f3fe6080604052600436106100c25760003560e01c80635e7e236d1161007f578063a2e74af611610059578063a2e74af61461026d578063b5f0f1b714610296578063e3f2b3cf146102d3578063e53fbda614610310576100c2565b80635e7e236d146101fd578063729e7cf6146102195780639a8d288214610242576100c2565b8063094b7415146100c75780632c254741146100f25780633acfcaa71461011b5780633fc70f2c14610158578063461d65bc146101955780635bc0a623146101c0575b600080fd5b3480156100d357600080fd5b506100dc61034d565b6040516100e99190610a64565b60405180910390f35b3480156100fe57600080fd5b5061011960048036038101906101149190610ae6565b610371565b005b34801561012757600080fd5b50610142600480360381019061013d9190610b26565b610548565b60405161014f9190610b72565b60405180910390f35b34801561016457600080fd5b5061017f600480360381019061017a9190610b26565b610559565b60405161018c9190610b72565b60405180910390f35b3480156101a157600080fd5b506101aa61056a565b6040516101b79190610b9c565b60405180910390f35b3480156101cc57600080fd5b506101e760048036038101906101e29190610b26565b610574565b6040516101f49190610b72565b60405180910390f35b61021760048036038101906102129190610bdc565b610585565b005b34801561022557600080fd5b50610240600480360381019061023b9190610b26565b610872565b005b34801561024e57600080fd5b5061025761087c565b6040516102649190610cc7565b60405180910390f35b34801561027957600080fd5b50610294600480360381019061028f9190610ce9565b610911565b005b3480156102a257600080fd5b506102bd60048036038101906102b89190610b26565b6109e2565b6040516102ca9190610b72565b60405180910390f35b3480156102df57600080fd5b506102fa60048036038101906102f59190610b26565b6109f3565b6040516103079190610d8d565b60405180910390f35b34801561031c57600080fd5b5061033760048036038101906103329190610b26565b610a12565b6040516103449190610b72565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008180549050905060005b8181101561044f57848382815481106103dc576103db610da8565b5b90600052602060002001540361043c57826001836103fa9190610e06565b8154811061040b5761040a610da8565b5b906000526020600020015483828154811061042957610428610da8565b5b906000526020600020018190555061044f565b808061044790610e3a565b9150506103c0565b508180548061046157610460610e82565b5b60019003818190600052602060002001600090559055600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208490806001815401808255809150506001900390600052602060002001600090919091909150558273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fbebab64de2018206ca4ee6f30b839279caa634c3f3d5c038dd77bac4a155882f8660405161053a9190610b9c565b60405180910390a350505050565b6000601f601183901c169050919050565b6000601f600783901c169050919050565b6000600254905090565b6000601f601683901c169050919050565b66038d7ea4c680003410156105cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c690610f34565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610635573d6000803e3d6000fd5b506000600567ffffffffffffffff81111561065357610652610f54565b5b6040519080825280602002602001820160405280156106815781602001602082028036833780820191505090505b50905060028160008151811061069a57610699610da8565b5b6020026020010181815250506007816001815181106106bc576106bb610da8565b5b602002602001018181525050600c816002815181106106de576106dd610da8565b5b602002602001018181525050601181600381518110610700576106ff610da8565b5b60200260200101818152505060168160048151811061072257610721610da8565b5b602002602001018181525050600060059050600083600281111561074957610748610d16565b5b90505b60008261075761056a565b6107619190610fb2565b90506000600184600d6107749190610fe3565b61077c61056a565b6107869190610fb2565b6107909190610fe3565b90508482815181106107a5576107a4610da8565b5b602002602001015181901b8317925083806107bf90611017565b9450508484815181106107d5576107d4610da8565b5b60200260200101518583815181106107f0576107ef610da8565b5b60200260200101818152505050506000821161074c57600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b8060028190555050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561090757602002820191906000526020600020905b8154815260200190600101908083116108f3575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461099f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109969061108c565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000601f600c83901c169050919050565b6000600382166002811115610a0b57610a0a610d16565b5b9050919050565b6000601f600283901c169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a4e82610a23565b9050919050565b610a5e81610a43565b82525050565b6000602082019050610a796000830184610a55565b92915050565b600080fd5b6000819050919050565b610a9781610a84565b8114610aa257600080fd5b50565b600081359050610ab481610a8e565b92915050565b610ac381610a43565b8114610ace57600080fd5b50565b600081359050610ae081610aba565b92915050565b60008060408385031215610afd57610afc610a7f565b5b6000610b0b85828601610aa5565b9250506020610b1c85828601610ad1565b9150509250929050565b600060208284031215610b3c57610b3b610a7f565b5b6000610b4a84828501610aa5565b91505092915050565b600063ffffffff82169050919050565b610b6c81610b53565b82525050565b6000602082019050610b876000830184610b63565b92915050565b610b9681610a84565b82525050565b6000602082019050610bb16000830184610b8d565b92915050565b60038110610bc457600080fd5b50565b600081359050610bd681610bb7565b92915050565b600060208284031215610bf257610bf1610a7f565b5b6000610c0084828501610bc7565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c3e81610a84565b82525050565b6000610c508383610c35565b60208301905092915050565b6000602082019050919050565b6000610c7482610c09565b610c7e8185610c14565b9350610c8983610c25565b8060005b83811015610cba578151610ca18882610c44565b9750610cac83610c5c565b925050600181019050610c8d565b5085935050505092915050565b60006020820190508181036000830152610ce18184610c69565b905092915050565b600060208284031215610cff57610cfe610a7f565b5b6000610d0d84828501610ad1565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610d5657610d55610d16565b5b50565b6000819050610d6782610d45565b919050565b6000610d7782610d59565b9050919050565b610d8781610d6c565b82525050565b6000602082019050610da26000830184610d7e565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e1182610a84565b9150610e1c83610a84565b9250828203905081811115610e3457610e33610dd7565b5b92915050565b6000610e4582610a84565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610e7757610e76610dd7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600082825260208201905092915050565b7f506c656173652073656e64206d6f7265206d6f6e65792c206d696e696d756d2060008201527f302e303031206574686572000000000000000000000000000000000000000000602082015250565b6000610f1e602b83610eb1565b9150610f2982610ec2565b604082019050919050565b60006020820190508181036000830152610f4d81610f11565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610fbd82610a84565b9150610fc883610a84565b925082610fd857610fd7610f83565b5b828206905092915050565b6000610fee82610a84565b9150610ff983610a84565b925082820190508082111561101157611010610dd7565b5b92915050565b600061102282610a84565b91506000820361103557611034610dd7565b5b600182039050919050565b7f556e697377617056323a20464f5242494444454e000000000000000000000000600082015250565b6000611076601483610eb1565b915061108182611040565b602082019050919050565b600060208201905081810360008301526110a581611069565b905091905056fea264697066735822122052a87664427446343a34b165a10cf8304c24c2dcf36b23c4404c9f08ed18fe6d64736f6c63430008130033";

type TestHeroConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestHeroConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestHero__factory extends ContractFactory {
  constructor(...args: TestHeroConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _feeToSetter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_feeToSetter, overrides || {});
  }
  override deploy(
    _feeToSetter: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_feeToSetter, overrides || {}) as Promise<
      TestHero & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestHero__factory {
    return super.connect(runner) as TestHero__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestHeroInterface {
    return new Interface(_abi) as TestHeroInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestHero {
    return new Contract(address, _abi, runner) as unknown as TestHero;
  }
}
