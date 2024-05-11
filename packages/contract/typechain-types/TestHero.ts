/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface TestHeroInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createHero"
      | "feeToSetter"
      | "generateRamdom"
      | "getDex"
      | "getHealth"
      | "getHeroType"
      | "getHeroes"
      | "getIntellect"
      | "getMagic"
      | "getStrength"
      | "setFeeToSetter"
      | "setRandom"
      | "transferHero"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createHero",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "feeToSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateRamdom",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHealth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHeroType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getHeroes", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getIntellect",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMagic",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStrength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeToSetter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRandom",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferHero",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "createHero", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeToSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateRamdom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHealth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getHeroType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getHeroes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIntellect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMagic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStrength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeToSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRandom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferHero",
    data: BytesLike
  ): Result;
}

export interface TestHero extends BaseContract {
  connect(runner?: ContractRunner | null): TestHero;
  waitForDeployment(): Promise<this>;

  interface: TestHeroInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createHero: TypedContractMethod<[_class: BigNumberish], [void], "payable">;

  feeToSetter: TypedContractMethod<[], [string], "view">;

  generateRamdom: TypedContractMethod<[], [bigint], "view">;

  getDex: TypedContractMethod<[hero: BigNumberish], [bigint], "view">;

  getHealth: TypedContractMethod<[hero: BigNumberish], [bigint], "view">;

  getHeroType: TypedContractMethod<[hero: BigNumberish], [bigint], "view">;

  getHeroes: TypedContractMethod<[], [bigint[]], "view">;

  getIntellect: TypedContractMethod<[hero: BigNumberish], [bigint], "view">;

  getMagic: TypedContractMethod<[hero: BigNumberish], [bigint], "view">;

  getStrength: TypedContractMethod<[hero: BigNumberish], [bigint], "view">;

  setFeeToSetter: TypedContractMethod<
    [_feeToSetter: AddressLike],
    [void],
    "nonpayable"
  >;

  setRandom: TypedContractMethod<[_random: BigNumberish], [void], "nonpayable">;

  transferHero: TypedContractMethod<
    [hero: BigNumberish, other: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createHero"
  ): TypedContractMethod<[_class: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "feeToSetter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "generateRamdom"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDex"
  ): TypedContractMethod<[hero: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getHealth"
  ): TypedContractMethod<[hero: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getHeroType"
  ): TypedContractMethod<[hero: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getHeroes"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getIntellect"
  ): TypedContractMethod<[hero: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getMagic"
  ): TypedContractMethod<[hero: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getStrength"
  ): TypedContractMethod<[hero: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "setFeeToSetter"
  ): TypedContractMethod<[_feeToSetter: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRandom"
  ): TypedContractMethod<[_random: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferHero"
  ): TypedContractMethod<
    [hero: BigNumberish, other: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
