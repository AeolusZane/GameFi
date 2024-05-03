/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Hero, HeroInterface } from "../Hero";

const _abi = [
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ac8806100206000396000f3fe60806040526004361061007b5760003560e01c80635e7e236d1161004e5780635e7e236d146101625780639a8d28821461017e578063b5f0f1b7146101a9578063e53fbda6146101e65761007b565b80633acfcaa7146100805780633fc70f2c146100bd578063461d65bc146100fa5780635bc0a62314610125575b600080fd5b34801561008c57600080fd5b506100a760048036038101906100a29190610601565b610223565b6040516100b4919061064d565b60405180910390f35b3480156100c957600080fd5b506100e460048036038101906100df9190610601565b610234565b6040516100f1919061064d565b60405180910390f35b34801561010657600080fd5b5061010f610245565b60405161011c9190610677565b60405180910390f35b34801561013157600080fd5b5061014c60048036038101906101479190610601565b61027a565b604051610159919061064d565b60405180910390f35b61017c600480360381019061017791906106b7565b61028b565b005b34801561018a57600080fd5b50610193610510565b6040516101a091906107a2565b60405180910390f35b3480156101b557600080fd5b506101d060048036038101906101cb9190610601565b6105a4565b6040516101dd919061064d565b60405180910390f35b3480156101f257600080fd5b5061020d60048036038101906102089190610601565b6105b5565b60405161021a919061064d565b60405180910390f35b6000601f601183901c169050919050565b6000601f600783901c169050919050565b600044423360405160200161025c9392919061085f565b6040516020818303038152906040528051906020012060001c905090565b6000601f601683901c169050919050565b66b1a2bc2ec500003410156102d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102cc906108f9565b60405180910390fd5b6000600567ffffffffffffffff8111156102f2576102f1610919565b5b6040519080825280602002602001820160405280156103205781602001602082028036833780820191505090505b50905060028160008151811061033957610338610948565b5b60200260200101818152505060078160018151811061035b5761035a610948565b5b602002602001018181525050600c8160028151811061037d5761037c610948565b5b60200260200101818152505060118160038151811061039f5761039e610948565b5b6020026020010181815250506016816004815181106103c1576103c0610948565b5b60200260200101818152505060006005905060008360028111156103e8576103e7610977565b5b90505b6000826103f6610245565b61040091906109d5565b90506000600184600d6104139190610a35565b61041b610245565b61042591906109d5565b61042f9190610a35565b905084828151811061044457610443610948565b5b602002602001015181901b83179250838061045e90610a69565b94505084848151811061047457610473610948565b5b602002602001015185838151811061048f5761048e610948565b5b6020026020010181815250505050600082116103eb576000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020016000909190919091505550505050565b60606000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561059a57602002820191906000526020600020905b815481526020019060010190808311610586575b5050505050905090565b6000601f600c83901c169050919050565b6000601f600283901c169050919050565b600080fd5b6000819050919050565b6105de816105cb565b81146105e957600080fd5b50565b6000813590506105fb816105d5565b92915050565b600060208284031215610617576106166105c6565b5b6000610625848285016105ec565b91505092915050565b600063ffffffff82169050919050565b6106478161062e565b82525050565b6000602082019050610662600083018461063e565b92915050565b610671816105cb565b82525050565b600060208201905061068c6000830184610668565b92915050565b6003811061069f57600080fd5b50565b6000813590506106b181610692565b92915050565b6000602082840312156106cd576106cc6105c6565b5b60006106db848285016106a2565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610719816105cb565b82525050565b600061072b8383610710565b60208301905092915050565b6000602082019050919050565b600061074f826106e4565b61075981856106ef565b935061076483610700565b8060005b8381101561079557815161077c888261071f565b975061078783610737565b925050600181019050610768565b5085935050505092915050565b600060208201905081810360008301526107bc8184610744565b905092915050565b6000819050919050565b6107df6107da826105cb565b6107c4565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610810826107e5565b9050919050565b60008160601b9050919050565b600061082f82610817565b9050919050565b600061084182610824565b9050919050565b61085961085482610805565b610836565b82525050565b600061086b82866107ce565b60208201915061087b82856107ce565b60208201915061088b8284610848565b601482019150819050949350505050565b600082825260208201905092915050565b7f506c656173652073656e64206d6f7265206d6f6e657900000000000000000000600082015250565b60006108e360168361089c565b91506108ee826108ad565b602082019050919050565b60006020820190508181036000830152610912816108d6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006109e0826105cb565b91506109eb836105cb565b9250826109fb576109fa6109a6565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610a40826105cb565b9150610a4b836105cb565b9250828201905080821115610a6357610a62610a06565b5b92915050565b6000610a74826105cb565b915060008203610a8757610a86610a06565b5b60018203905091905056fea2646970667358221220b0736784b6766449d8492c1d87a4880cba15cf5f6af2bb4d9d31b0e01d0708a764736f6c63430008180033";

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
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
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
