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
import type { Hero, HeroInterface } from "../Hero";

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
  "0x60806040523480156200001157600080fd5b506040516200124c3803806200124c8339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b611122806200012a6000396000f3fe6080604052600436106100a75760003560e01c80635e7e236d116100645780635e7e236d146101e25780639a8d2882146101fe578063a2e74af614610229578063b5f0f1b714610252578063e3f2b3cf1461028f578063e53fbda6146102cc576100a7565b8063094b7415146100ac5780632c254741146100d75780633acfcaa7146101005780633fc70f2c1461013d578063461d65bc1461017a5780635bc0a623146101a5575b600080fd5b3480156100b857600080fd5b506100c1610309565b6040516100ce91906109dc565b60405180910390f35b3480156100e357600080fd5b506100fe60048036038101906100f99190610a5e565b61032d565b005b34801561010c57600080fd5b5061012760048036038101906101229190610a9e565b61049f565b6040516101349190610aea565b60405180910390f35b34801561014957600080fd5b50610164600480360381019061015f9190610a9e565b6104b0565b6040516101719190610aea565b60405180910390f35b34801561018657600080fd5b5061018f6104c1565b60405161019c9190610b14565b60405180910390f35b3480156101b157600080fd5b506101cc60048036038101906101c79190610a9e565b6104f6565b6040516101d99190610aea565b60405180910390f35b6101fc60048036038101906101f79190610b54565b610507565b005b34801561020a57600080fd5b506102136107f4565b6040516102209190610c3f565b60405180910390f35b34801561023557600080fd5b50610250600480360381019061024b9190610c61565b610889565b005b34801561025e57600080fd5b5061027960048036038101906102749190610a9e565b61095a565b6040516102869190610aea565b60405180910390f35b34801561029b57600080fd5b506102b660048036038101906102b19190610a9e565b61096b565b6040516102c39190610d05565b60405180910390f35b3480156102d857600080fd5b506102f360048036038101906102ee9190610a9e565b61098a565b6040516103009190610aea565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008180549050905060005b8181101561040b578483828154811061039857610397610d20565b5b9060005260206000200154036103f857826001836103b69190610d7e565b815481106103c7576103c6610d20565b5b90600052602060002001548382815481106103e5576103e4610d20565b5b906000526020600020018190555061040b565b808061040390610db2565b91505061037c565b508180548061041d5761041c610dfa565b5b60019003818190600052602060002001600090559055600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b6000601f601183901c169050919050565b6000601f600783901c169050919050565b60004442336040516020016104d893929190610e92565b6040516020818303038152906040528051906020012060001c905090565b6000601f601683901c169050919050565b66038d7ea4c68000341015610551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054890610f52565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156105b7573d6000803e3d6000fd5b506000600567ffffffffffffffff8111156105d5576105d4610f72565b5b6040519080825280602002602001820160405280156106035781602001602082028036833780820191505090505b50905060028160008151811061061c5761061b610d20565b5b60200260200101818152505060078160018151811061063e5761063d610d20565b5b602002602001018181525050600c816002815181106106605761065f610d20565b5b60200260200101818152505060118160038151811061068257610681610d20565b5b6020026020010181815250506016816004815181106106a4576106a3610d20565b5b60200260200101818152505060006005905060008360028111156106cb576106ca610c8e565b5b90505b6000826106d96104c1565b6106e39190610fd0565b90506000600184600d6106f69190611001565b6106fe6104c1565b6107089190610fd0565b6107129190611001565b905084828151811061072757610726610d20565b5b602002602001015181901b83179250838061074190611057565b94505084848151811061075757610756610d20565b5b602002602001015185838151811061077257610771610d20565b5b6020026020010181815250505050600082116106ce57600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561087f57602002820191906000526020600020905b81548152602001906001019080831161086b575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090e906110cc565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000601f600c83901c169050919050565b600060038216600281111561098357610982610c8e565b5b9050919050565b6000601f600283901c169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109c68261099b565b9050919050565b6109d6816109bb565b82525050565b60006020820190506109f160008301846109cd565b92915050565b600080fd5b6000819050919050565b610a0f816109fc565b8114610a1a57600080fd5b50565b600081359050610a2c81610a06565b92915050565b610a3b816109bb565b8114610a4657600080fd5b50565b600081359050610a5881610a32565b92915050565b60008060408385031215610a7557610a746109f7565b5b6000610a8385828601610a1d565b9250506020610a9485828601610a49565b9150509250929050565b600060208284031215610ab457610ab36109f7565b5b6000610ac284828501610a1d565b91505092915050565b600063ffffffff82169050919050565b610ae481610acb565b82525050565b6000602082019050610aff6000830184610adb565b92915050565b610b0e816109fc565b82525050565b6000602082019050610b296000830184610b05565b92915050565b60038110610b3c57600080fd5b50565b600081359050610b4e81610b2f565b92915050565b600060208284031215610b6a57610b696109f7565b5b6000610b7884828501610b3f565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610bb6816109fc565b82525050565b6000610bc88383610bad565b60208301905092915050565b6000602082019050919050565b6000610bec82610b81565b610bf68185610b8c565b9350610c0183610b9d565b8060005b83811015610c32578151610c198882610bbc565b9750610c2483610bd4565b925050600181019050610c05565b5085935050505092915050565b60006020820190508181036000830152610c598184610be1565b905092915050565b600060208284031215610c7757610c766109f7565b5b6000610c8584828501610a49565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610cce57610ccd610c8e565b5b50565b6000819050610cdf82610cbd565b919050565b6000610cef82610cd1565b9050919050565b610cff81610ce4565b82525050565b6000602082019050610d1a6000830184610cf6565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d89826109fc565b9150610d94836109fc565b925082821015610da757610da6610d4f565b5b828203905092915050565b6000610dbd826109fc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610def57610dee610d4f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6000819050919050565b610e44610e3f826109fc565b610e29565b82525050565b60008160601b9050919050565b6000610e6282610e4a565b9050919050565b6000610e7482610e57565b9050919050565b610e8c610e87826109bb565b610e69565b82525050565b6000610e9e8286610e33565b602082019150610eae8285610e33565b602082019150610ebe8284610e7b565b601482019150819050949350505050565b600082825260208201905092915050565b7f506c656173652073656e64206d6f7265206d6f6e65792c206d696e696d756d2060008201527f302e303031206574686572000000000000000000000000000000000000000000602082015250565b6000610f3c602b83610ecf565b9150610f4782610ee0565b604082019050919050565b60006020820190508181036000830152610f6b81610f2f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610fdb826109fc565b9150610fe6836109fc565b925082610ff657610ff5610fa1565b5b828206905092915050565b600061100c826109fc565b9150611017836109fc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561104c5761104b610d4f565b5b828201905092915050565b6000611062826109fc565b91506000820361107557611074610d4f565b5b600182039050919050565b7f556e697377617056323a20464f5242494444454e000000000000000000000000600082015250565b60006110b6601483610ecf565b91506110c182611080565b602082019050919050565b600060208201905081810360008301526110e5816110a9565b905091905056fea2646970667358221220c7a62f6a372840f8523879e95c786e67e5155434cecce11ff98cf4af72bddfd264736f6c634300080f0033";

type HeroConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HeroConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Hero__factory extends ContractFactory {
  constructor(...args: HeroConstructorParams) {
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
      Hero & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Hero__factory {
    return super.connect(runner) as Hero__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HeroInterface {
    return new Interface(_abi) as HeroInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Hero {
    return new Contract(address, _abi, runner) as unknown as Hero;
  }
}
