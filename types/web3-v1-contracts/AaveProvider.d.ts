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

export interface AaveProvider extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AaveProvider;
  clone(): AaveProvider;
  methods: {
    getAvaibleLiquidity(_reserve: string): NonPayableTransactionObject<string>;

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

    addReserve(
      _reserve: string,
      _aTokenAddress: string
    ): NonPayableTransactionObject<void>;

    deposit(
      _reserve: string,
      _amount: number | string
    ): PayableTransactionObject<void>;

    redeemUnderlying(
      _reserve: string,
      _user: string,
      _amount: number | string
    ): NonPayableTransactionObject<void>;

    getReserves(): NonPayableTransactionObject<string[]>;

    getReserveData(
      _reserveAddress: string
    ): NonPayableTransactionObject<{
      totalLiquidity: string;
      availableLiquidity: string;
      totalBorrowsVariable: string;
      liquidityRate: string;
      variableBorrowRate: string;
      utilizationRate: string;
      liquidityIndex: string;
      variableBorrowIndex: string;
      aTokenAddress: string;
      lastUpdateTimestamp: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    }>;

    getReserveLiquidityRate(
      _reserveAddress: string
    ): NonPayableTransactionObject<string>;

    getReserveBorrowRate(
      _reserveAddress: string
    ): NonPayableTransactionObject<string>;

    getReserveManagerForApprove(_: string): NonPayableTransactionObject<string>;
  };
  events: {
    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;
}
