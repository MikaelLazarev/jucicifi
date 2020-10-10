/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ProviderManagerContract
  extends Truffle.Contract<ProviderManagerInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ProviderManagerInstance>;
}

type AllEvents = never;

export interface ProviderManagerInstance extends Truffle.ContractInstance {
  setProvider: {
    (provideContract: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      provideContract: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      provideContract: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      provideContract: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getProviderOrFail(
    providerAddress: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  methods: {
    setProvider: {
      (
        provideContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        provideContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        provideContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        provideContract: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getProviderOrFail(
      providerAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}