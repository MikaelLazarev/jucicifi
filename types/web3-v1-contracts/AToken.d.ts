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

export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type BalanceTransfer = ContractEventLog<{
  _from: string;
  _to: string;
  _value: string;
  _fromBalanceIncrease: string;
  _toBalanceIncrease: string;
  _fromIndex: string;
  _toIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}>;
export type BurnOnLiquidation = ContractEventLog<{
  _from: string;
  _value: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type InterestRedirectionAllowanceChanged = ContractEventLog<{
  _from: string;
  _to: string;
  0: string;
  1: string;
}>;
export type InterestStreamRedirected = ContractEventLog<{
  _from: string;
  _to: string;
  _redirectedBalance: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type MintOnDeposit = ContractEventLog<{
  _from: string;
  _value: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type Redeem = ContractEventLog<{
  _from: string;
  _value: string;
  _fromBalanceIncrease: string;
  _fromIndex: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type RedirectedBalanceUpdated = ContractEventLog<{
  _targetAddress: string;
  _targetBalanceIncrease: string;
  _targetIndex: string;
  _redirectedBalanceAdded: string;
  _redirectedBalanceRemoved: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;

export interface AToken extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): AToken;
  clone(): AToken;
  methods: {
    UINT_MAX_VALUE(): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-allowance}.
     */
    allowance(
      owner: string,
      spender: string
    ): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-approve}. Requirements: - `spender` cannot be the zero address.
     */
    approve(
      spender: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    /**
     * Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.
     */
    decimals(): NonPayableTransactionObject<string>;

    /**
     * Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.
     */
    decreaseAllowance(
      spender: string,
      subtractedValue: number | string
    ): NonPayableTransactionObject<boolean>;

    /**
     * Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.
     */
    increaseAllowance(
      spender: string,
      addedValue: number | string
    ): NonPayableTransactionObject<boolean>;

    /**
     * Returns the name of the token.
     */
    name(): NonPayableTransactionObject<string>;

    /**
     * Returns the symbol of the token, usually a shorter version of the name.
     */
    symbol(): NonPayableTransactionObject<string>;

    /**
     * See {IERC20-transfer}. Requirements: - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.
     */
    transfer(
      recipient: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    /**
     * See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}; Requirements: - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.
     */
    transferFrom(
      sender: string,
      recipient: string,
      amount: number | string
    ): NonPayableTransactionObject<boolean>;

    underlyingAssetAddress(): NonPayableTransactionObject<string>;

    /**
     * redirects the interest generated to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance.
     * @param _to the address to which the interest will be redirected*
     */
    redirectInterestStream(_to: string): NonPayableTransactionObject<void>;

    /**
     * redirects the interest generated by _from to a target address. when the interest is redirected, the user balance is added to the recepient redirected balance. The caller needs to have allowance on the interest redirection to be able to execute the function.
     * @param _from the address of the user whom interest is being redirected
     * @param _to the address to which the interest will be redirected*
     */
    redirectInterestStreamOf(
      _from: string,
      _to: string
    ): NonPayableTransactionObject<void>;

    /**
     * gives allowance to an address to execute the interest redirection on behalf of the caller.
     * @param _to the address to which the interest will be redirected. Pass address(0) to reset the allowance.*
     */
    allowInterestRedirectionTo(_to: string): NonPayableTransactionObject<void>;

    /**
     * redeems aToken for the underlying asset
     * @param _amount the amount being redeemed*
     */
    redeem(_amount: number | string): NonPayableTransactionObject<void>;

    /**
     * mints token in the event of users depositing the underlying asset into the lending pool only lending pools can call this function
     * @param _account the address receiving the minted tokens
     * @param _amount the amount of tokens to mint
     */
    mintOnDeposit(
      _account: string,
      _amount: number | string
    ): NonPayableTransactionObject<void>;

    /**
     * burns token in the event of a borrow being liquidated, in case the liquidators reclaims the underlying asset Transfer of the liquidated asset is executed by the lending pool contract. only lending pools can call this function
     * @param _account the address from which burn the aTokens
     * @param _value the amount to burn*
     */
    burnOnLiquidation(
      _account: string,
      _value: number | string
    ): NonPayableTransactionObject<void>;

    /**
     * transfers tokens in the event of a borrow being liquidated, in case the liquidators reclaims the aToken      only lending pools can call this function
     * @param _from the address from which transfer the aTokens
     * @param _to the destination address
     * @param _value the amount to transfer*
     */
    transferOnLiquidation(
      _from: string,
      _to: string,
      _value: number | string
    ): NonPayableTransactionObject<void>;

    /**
     * calculates the balance of the user, which is the principal balance + interest generated by the principal balance + interest generated by the redirected balance
     * @param _user the user for which the balance is being calculated
     */
    balanceOf(_user: string): NonPayableTransactionObject<string>;

    /**
     * returns the principal balance of the user. The principal balance is the last updated stored balance, which does not consider the perpetually accruing interest.
     * @param _user the address of the user
     */
    principalBalanceOf(_user: string): NonPayableTransactionObject<string>;

    /**
     * calculates the total supply of the specific aToken since the balance of every single user increases over time, the total supply does that too.
     */
    totalSupply(): NonPayableTransactionObject<string>;

    /**
     * Used to validate transfers before actually executing them.
     * @param _amount the amount to check
     * @param _user address of the user to check
     */
    isTransferAllowed(
      _user: string,
      _amount: number | string
    ): NonPayableTransactionObject<boolean>;

    /**
     * returns the last index of the user, used to calculate the balance of the user
     * @param _user address of the user
     */
    getUserIndex(_user: string): NonPayableTransactionObject<string>;

    /**
     * returns the address to which the interest is redirected
     * @param _user address of the user
     */
    getInterestRedirectionAddress(
      _user: string
    ): NonPayableTransactionObject<string>;

    /**
     * returns the redirected balance of the user. The redirected balance is the balance redirected by other accounts to the user, that is accrueing interest for him.
     * @param _user address of the user
     */
    getRedirectedBalance(_user: string): NonPayableTransactionObject<string>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    BalanceTransfer(cb?: Callback<BalanceTransfer>): EventEmitter;
    BalanceTransfer(
      options?: EventOptions,
      cb?: Callback<BalanceTransfer>
    ): EventEmitter;

    BurnOnLiquidation(cb?: Callback<BurnOnLiquidation>): EventEmitter;
    BurnOnLiquidation(
      options?: EventOptions,
      cb?: Callback<BurnOnLiquidation>
    ): EventEmitter;

    InterestRedirectionAllowanceChanged(
      cb?: Callback<InterestRedirectionAllowanceChanged>
    ): EventEmitter;
    InterestRedirectionAllowanceChanged(
      options?: EventOptions,
      cb?: Callback<InterestRedirectionAllowanceChanged>
    ): EventEmitter;

    InterestStreamRedirected(
      cb?: Callback<InterestStreamRedirected>
    ): EventEmitter;
    InterestStreamRedirected(
      options?: EventOptions,
      cb?: Callback<InterestStreamRedirected>
    ): EventEmitter;

    MintOnDeposit(cb?: Callback<MintOnDeposit>): EventEmitter;
    MintOnDeposit(
      options?: EventOptions,
      cb?: Callback<MintOnDeposit>
    ): EventEmitter;

    Redeem(cb?: Callback<Redeem>): EventEmitter;
    Redeem(options?: EventOptions, cb?: Callback<Redeem>): EventEmitter;

    RedirectedBalanceUpdated(
      cb?: Callback<RedirectedBalanceUpdated>
    ): EventEmitter;
    RedirectedBalanceUpdated(
      options?: EventOptions,
      cb?: Callback<RedirectedBalanceUpdated>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "BalanceTransfer", cb: Callback<BalanceTransfer>): void;
  once(
    event: "BalanceTransfer",
    options: EventOptions,
    cb: Callback<BalanceTransfer>
  ): void;

  once(event: "BurnOnLiquidation", cb: Callback<BurnOnLiquidation>): void;
  once(
    event: "BurnOnLiquidation",
    options: EventOptions,
    cb: Callback<BurnOnLiquidation>
  ): void;

  once(
    event: "InterestRedirectionAllowanceChanged",
    cb: Callback<InterestRedirectionAllowanceChanged>
  ): void;
  once(
    event: "InterestRedirectionAllowanceChanged",
    options: EventOptions,
    cb: Callback<InterestRedirectionAllowanceChanged>
  ): void;

  once(
    event: "InterestStreamRedirected",
    cb: Callback<InterestStreamRedirected>
  ): void;
  once(
    event: "InterestStreamRedirected",
    options: EventOptions,
    cb: Callback<InterestStreamRedirected>
  ): void;

  once(event: "MintOnDeposit", cb: Callback<MintOnDeposit>): void;
  once(
    event: "MintOnDeposit",
    options: EventOptions,
    cb: Callback<MintOnDeposit>
  ): void;

  once(event: "Redeem", cb: Callback<Redeem>): void;
  once(event: "Redeem", options: EventOptions, cb: Callback<Redeem>): void;

  once(
    event: "RedirectedBalanceUpdated",
    cb: Callback<RedirectedBalanceUpdated>
  ): void;
  once(
    event: "RedirectedBalanceUpdated",
    options: EventOptions,
    cb: Callback<RedirectedBalanceUpdated>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;
}
