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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162000fab38038062000fab833981810160405281019061003491906100dd565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061010a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100aa8261007f565b9050919050565b6100ba8161009f565b81146100c557600080fd5b50565b6000815190506100d7816100b1565b92915050565b6000602082840312156100f3576100f261007a565b5b6000610101848285016100c8565b91505092915050565b610e91806200011a6000396000f3fe60806040526004361061009c5760003560e01c80635e7e236d116100645780635e7e236d146101ae5780639a8d2882146101ca578063a2e74af6146101f5578063b5f0f1b71461021e578063e3f2b3cf1461025b578063e53fbda6146102985761009c565b8063094b7415146100a15780633acfcaa7146100cc5780633fc70f2c14610109578063461d65bc146101465780635bc0a62314610171575b600080fd5b3480156100ad57600080fd5b506100b66102d5565b6040516100c39190610836565b60405180910390f35b3480156100d857600080fd5b506100f360048036038101906100ee919061088c565b6102f9565b60405161010091906108d8565b60405180910390f35b34801561011557600080fd5b50610130600480360381019061012b919061088c565b61030a565b60405161013d91906108d8565b60405180910390f35b34801561015257600080fd5b5061015b61031b565b6040516101689190610902565b60405180910390f35b34801561017d57600080fd5b506101986004803603810190610193919061088c565b610350565b6040516101a591906108d8565b60405180910390f35b6101c860048036038101906101c39190610942565b610361565b005b3480156101d657600080fd5b506101df61064e565b6040516101ec9190610a2d565b60405180910390f35b34801561020157600080fd5b5061021c60048036038101906102179190610a7b565b6106e3565b005b34801561022a57600080fd5b506102456004803603810190610240919061088c565b6107b4565b60405161025291906108d8565b60405180910390f35b34801561026757600080fd5b50610282600480360381019061027d919061088c565b6107c5565b60405161028f9190610b1f565b60405180910390f35b3480156102a457600080fd5b506102bf60048036038101906102ba919061088c565b6107e4565b6040516102cc91906108d8565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000601f601183901c169050919050565b6000601f600783901c169050919050565b600044423360405160200161033293929190610ba3565b6040516020818303038152906040528051906020012060001c905090565b6000601f601683901c169050919050565b66b1a2bc2ec500003410156103ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a290610c63565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610411573d6000803e3d6000fd5b506000600567ffffffffffffffff81111561042f5761042e610c83565b5b60405190808252806020026020018201604052801561045d5781602001602082028036833780820191505090505b50905060028160008151811061047657610475610cb2565b5b60200260200101818152505060078160018151811061049857610497610cb2565b5b602002602001018181525050600c816002815181106104ba576104b9610cb2565b5b6020026020010181815250506011816003815181106104dc576104db610cb2565b5b6020026020010181815250506016816004815181106104fe576104fd610cb2565b5b602002602001018181525050600060059050600083600281111561052557610524610aa8565b5b90505b60008261053361031b565b61053d9190610d10565b90506000600184600d6105509190610d70565b61055861031b565b6105629190610d10565b61056c9190610d70565b905084828151811061058157610580610cb2565b5b602002602001015181901b83179250838061059b90610dc6565b9450508484815181106105b1576105b0610cb2565b5b60200260200101518583815181106105cc576105cb610cb2565b5b60200260200101818152505050506000821161052857600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b6060600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156106d957602002820191906000526020600020905b8154815260200190600101908083116106c5575b5050505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610771576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076890610e3b565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000601f600c83901c169050919050565b60006003821660028111156107dd576107dc610aa8565b5b9050919050565b6000601f600283901c169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610820826107f5565b9050919050565b61083081610815565b82525050565b600060208201905061084b6000830184610827565b92915050565b600080fd5b6000819050919050565b61086981610856565b811461087457600080fd5b50565b60008135905061088681610860565b92915050565b6000602082840312156108a2576108a1610851565b5b60006108b084828501610877565b91505092915050565b600063ffffffff82169050919050565b6108d2816108b9565b82525050565b60006020820190506108ed60008301846108c9565b92915050565b6108fc81610856565b82525050565b600060208201905061091760008301846108f3565b92915050565b6003811061092a57600080fd5b50565b60008135905061093c8161091d565b92915050565b60006020828403121561095857610957610851565b5b60006109668482850161092d565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6109a481610856565b82525050565b60006109b6838361099b565b60208301905092915050565b6000602082019050919050565b60006109da8261096f565b6109e4818561097a565b93506109ef8361098b565b8060005b83811015610a20578151610a0788826109aa565b9750610a12836109c2565b9250506001810190506109f3565b5085935050505092915050565b60006020820190508181036000830152610a4781846109cf565b905092915050565b610a5881610815565b8114610a6357600080fd5b50565b600081359050610a7581610a4f565b92915050565b600060208284031215610a9157610a90610851565b5b6000610a9f84828501610a66565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610ae857610ae7610aa8565b5b50565b6000819050610af982610ad7565b919050565b6000610b0982610aeb565b9050919050565b610b1981610afe565b82525050565b6000602082019050610b346000830184610b10565b92915050565b6000819050919050565b610b55610b5082610856565b610b3a565b82525050565b60008160601b9050919050565b6000610b7382610b5b565b9050919050565b6000610b8582610b68565b9050919050565b610b9d610b9882610815565b610b7a565b82525050565b6000610baf8286610b44565b602082019150610bbf8285610b44565b602082019150610bcf8284610b8c565b601482019150819050949350505050565b600082825260208201905092915050565b7f506c656173652073656e64206d6f7265206d6f6e65792c206d696e696d756d2060008201527f302e303520657468657200000000000000000000000000000000000000000000602082015250565b6000610c4d602a83610be0565b9150610c5882610bf1565b604082019050919050565b60006020820190508181036000830152610c7c81610c40565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610d1b82610856565b9150610d2683610856565b925082610d3657610d35610ce1565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d7b82610856565b9150610d8683610856565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610dbb57610dba610d41565b5b828201905092915050565b6000610dd182610856565b915060008203610de457610de3610d41565b5b600182039050919050565b7f556e697377617056323a20464f5242494444454e000000000000000000000000600082015250565b6000610e25601483610be0565b9150610e3082610def565b602082019050919050565b60006020820190508181036000830152610e5481610e18565b905091905056fea26469706673582212209c58e9aa173ec22fb29147c27ec0e9cb7ea5add0d5ba2b711702c7aa9343987e64736f6c634300080f0033";

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
