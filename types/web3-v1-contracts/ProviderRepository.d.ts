/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type NewProvider = ContractEventLog<{
  _providerAddress: string;
  _timestamp: string;
  0: string;
  1: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;

export interface ProviderRepository extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ProviderRepository;
  clone(): ProviderRepository;
  methods: {
    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    /**
     * Adds new lending provider to the list throw exception if provider is already exists in the list
     * @param _address - the address of the provider contract
     */
    addProvider(_address: string): NonPayableTransactionObject<void>;

    /**
     * Gets provider by it's contract address or fails throw exception if provider is already exists in the list
     * @param _address the address of the provider contract
     */
    getProviderByAddressOrFail(
      _address: string
    ): NonPayableTransactionObject<string>;

    getProviderByIndex(
      _index: number | string
    ): NonPayableTransactionObject<string>;

    getProvidersQty(): NonPayableTransactionObject<string>;

    getProvidesList(): NonPayableTransactionObject<string[]>;
  };
  events: {
    NewProvider(cb?: Callback<NewProvider>): EventEmitter;
    NewProvider(
      options?: EventOptions,
      cb?: Callback<NewProvider>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "NewProvider", cb: Callback<NewProvider>): void;
  once(
    event: "NewProvider",
    options: EventOptions,
    cb: Callback<NewProvider>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
