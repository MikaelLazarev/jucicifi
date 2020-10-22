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

export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type RedeemUnderlying = ContractEventLog<{
  _reserve: string;
  _user: string;
  _amount: string;
  _timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface PoolService extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): PoolService;
  clone(): PoolService;
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

    deposit(
      _reserve: string,
      _amount: number | string
    ): PayableTransactionObject<void>;

    redeemUnderlying(
      _reserve: string,
      _user: string,
      _amount: number | string
    ): NonPayableTransactionObject<void>;

    borrow(
      _reserve: string,
      _amount: number | string
    ): NonPayableTransactionObject<void>;

    repay(
      _reserve: string,
      _amount: number | string
    ): PayableTransactionObject<void>;

    getReserveInfo(
      _reserve: string
    ): NonPayableTransactionObject<{
      symbol: string;
      totalLiquidity: string;
      availableLiquidity: string;
      loanToValue: string;
      liquidationThreshold: string;
      liquidationBonus: string;
      vTokenContract: string;
      borrowRate: string;
      lendingRate: string;
      isActive: boolean;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: boolean;
    }>;
  };
  events: {
    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    RedeemUnderlying(cb?: Callback<RedeemUnderlying>): EventEmitter;
    RedeemUnderlying(
      options?: EventOptions,
      cb?: Callback<RedeemUnderlying>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "RedeemUnderlying", cb: Callback<RedeemUnderlying>): void;
  once(
    event: "RedeemUnderlying",
    options: EventOptions,
    cb: Callback<RedeemUnderlying>
  ): void;
}
