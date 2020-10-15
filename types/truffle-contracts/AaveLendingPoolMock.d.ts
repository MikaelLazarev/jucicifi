/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface AaveLendingPoolMockContract
  extends Truffle.Contract<AaveLendingPoolMockInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<AaveLendingPoolMockInstance>;
}

export interface Borrow {
  name: "Borrow";
  args: {
    _reserve: string;
    _user: string;
    _amount: BN;
    _borrowRateMode: BN;
    _borrowRate: BN;
    _originationFee: BN;
    _borrowBalanceIncrease: BN;
    _referral: BN;
    _timestamp: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: BN;
    5: BN;
    6: BN;
    7: BN;
    8: BN;
  };
}

export interface Deposit {
  name: "Deposit";
  args: {
    _reserve: string;
    _user: string;
    _amount: BN;
    _referral: BN;
    _timestamp: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: BN;
  };
}

export interface DepositMock {
  name: "DepositMock";
  args: {
    _reserve: string;
    _user: string;
    _amount: BN;
    _referral: BN;
    _timestamp: BN;
    _mockId: string;
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: BN;
    5: string;
  };
}

export interface LiquidationCall {
  name: "LiquidationCall";
  args: {
    _collateral: string;
    _reserve: string;
    _user: string;
    _purchaseAmount: BN;
    _liquidatedCollateralAmount: BN;
    _accruedBorrowInterest: BN;
    _liquidator: string;
    _receiveAToken: boolean;
    _timestamp: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
    4: BN;
    5: BN;
    6: string;
    7: boolean;
    8: BN;
  };
}

export interface OriginationFeeLiquidated {
  name: "OriginationFeeLiquidated";
  args: {
    _collateral: string;
    _reserve: string;
    _user: string;
    _feeLiquidated: BN;
    _liquidatedCollateralForFee: BN;
    _timestamp: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
    4: BN;
    5: BN;
  };
}

export interface RebalanceStableBorrowRate {
  name: "RebalanceStableBorrowRate";
  args: {
    _reserve: string;
    _user: string;
    _newStableRate: BN;
    _borrowBalanceIncrease: BN;
    _timestamp: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: BN;
  };
}

export interface RedeemMock {
  name: "RedeemMock";
  args: {
    _reserve: string;
    _user: string;
    _amount: BN;
    _timestamp: BN;
    _mockId: string;
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: string;
  };
}

export interface RedeemUnderlying {
  name: "RedeemUnderlying";
  args: {
    _reserve: string;
    _user: string;
    _amount: BN;
    _timestamp: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
  };
}

export interface Repay {
  name: "Repay";
  args: {
    _reserve: string;
    _user: string;
    _repayer: string;
    _amountMinusFees: BN;
    _fees: BN;
    _borrowBalanceIncrease: BN;
    _timestamp: BN;
    0: string;
    1: string;
    2: string;
    3: BN;
    4: BN;
    5: BN;
    6: BN;
  };
}

export interface ReserveUsedAsCollateralDisabled {
  name: "ReserveUsedAsCollateralDisabled";
  args: {
    _reserve: string;
    _user: string;
    0: string;
    1: string;
  };
}

export interface ReserveUsedAsCollateralEnabled {
  name: "ReserveUsedAsCollateralEnabled";
  args: {
    _reserve: string;
    _user: string;
    0: string;
    1: string;
  };
}

export interface Swap {
  name: "Swap";
  args: {
    _reserve: string;
    _user: string;
    _newRateMode: BN;
    _newRate: BN;
    _borrowBalanceIncrease: BN;
    _timestamp: BN;
    0: string;
    1: string;
    2: BN;
    3: BN;
    4: BN;
    5: BN;
  };
}

type AllEvents =
  | Borrow
  | Deposit
  | DepositMock
  | LiquidationCall
  | OriginationFeeLiquidated
  | RebalanceStableBorrowRate
  | RedeemMock
  | RedeemUnderlying
  | Repay
  | ReserveUsedAsCollateralDisabled
  | ReserveUsedAsCollateralEnabled
  | Swap;

export interface AaveLendingPoolMockInstance extends Truffle.ContractInstance {
  setMockId: {
    (_mockId: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      _mockId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _mockId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _mockId: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  deposit: {
    (
      _reserve: string,
      _amount: number | BN | string,
      _referralCode: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _amount: number | BN | string,
      _referralCode: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _amount: number | BN | string,
      _referralCode: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _amount: number | BN | string,
      _referralCode: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  redeemUnderlying: {
    (
      _reserve: string,
      _user: string,
      _amount: number | BN | string,
      _aTokenBalanceAfterRedeem: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserve: string,
      _user: string,
      _amount: number | BN | string,
      _aTokenBalanceAfterRedeem: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserve: string,
      _user: string,
      _amount: number | BN | string,
      _aTokenBalanceAfterRedeem: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserve: string,
      _user: string,
      _amount: number | BN | string,
      _aTokenBalanceAfterRedeem: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  setReserve: {
    (
      _reserveAddress: string,
      _totalLiquidity: number | BN | string,
      _availableLiquidity: number | BN | string,
      _totalBorrowsStable: number | BN | string,
      _totalBorrowsVariable: number | BN | string,
      _liquidityRate: number | BN | string,
      _variableBorrowRate: number | BN | string,
      _stableBorrowRate: number | BN | string,
      _averageStableBorrowRate: number | BN | string,
      _utilizationRate: number | BN | string,
      _liquidityIndex: number | BN | string,
      _variableBorrowIndex: number | BN | string,
      _aTokenAddress: string,
      _lastUpdateTimestamp: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _reserveAddress: string,
      _totalLiquidity: number | BN | string,
      _availableLiquidity: number | BN | string,
      _totalBorrowsStable: number | BN | string,
      _totalBorrowsVariable: number | BN | string,
      _liquidityRate: number | BN | string,
      _variableBorrowRate: number | BN | string,
      _stableBorrowRate: number | BN | string,
      _averageStableBorrowRate: number | BN | string,
      _utilizationRate: number | BN | string,
      _liquidityIndex: number | BN | string,
      _variableBorrowIndex: number | BN | string,
      _aTokenAddress: string,
      _lastUpdateTimestamp: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _reserveAddress: string,
      _totalLiquidity: number | BN | string,
      _availableLiquidity: number | BN | string,
      _totalBorrowsStable: number | BN | string,
      _totalBorrowsVariable: number | BN | string,
      _liquidityRate: number | BN | string,
      _variableBorrowRate: number | BN | string,
      _stableBorrowRate: number | BN | string,
      _averageStableBorrowRate: number | BN | string,
      _utilizationRate: number | BN | string,
      _liquidityIndex: number | BN | string,
      _variableBorrowIndex: number | BN | string,
      _aTokenAddress: string,
      _lastUpdateTimestamp: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _reserveAddress: string,
      _totalLiquidity: number | BN | string,
      _availableLiquidity: number | BN | string,
      _totalBorrowsStable: number | BN | string,
      _totalBorrowsVariable: number | BN | string,
      _liquidityRate: number | BN | string,
      _variableBorrowRate: number | BN | string,
      _stableBorrowRate: number | BN | string,
      _averageStableBorrowRate: number | BN | string,
      _utilizationRate: number | BN | string,
      _liquidityIndex: number | BN | string,
      _variableBorrowIndex: number | BN | string,
      _aTokenAddress: string,
      _lastUpdateTimestamp: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  getReserves(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

  getReserveData(
    _reserveAddress: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BN, BN, BN, BN, BN, BN, BN, BN, BN, BN, BN, string, BN]>;

  methods: {
    setMockId: {
      (_mockId: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        _mockId: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _mockId: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _mockId: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    deposit: {
      (
        _reserve: string,
        _amount: number | BN | string,
        _referralCode: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _amount: number | BN | string,
        _referralCode: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _amount: number | BN | string,
        _referralCode: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _amount: number | BN | string,
        _referralCode: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    redeemUnderlying: {
      (
        _reserve: string,
        _user: string,
        _amount: number | BN | string,
        _aTokenBalanceAfterRedeem: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserve: string,
        _user: string,
        _amount: number | BN | string,
        _aTokenBalanceAfterRedeem: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserve: string,
        _user: string,
        _amount: number | BN | string,
        _aTokenBalanceAfterRedeem: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserve: string,
        _user: string,
        _amount: number | BN | string,
        _aTokenBalanceAfterRedeem: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    setReserve: {
      (
        _reserveAddress: string,
        _totalLiquidity: number | BN | string,
        _availableLiquidity: number | BN | string,
        _totalBorrowsStable: number | BN | string,
        _totalBorrowsVariable: number | BN | string,
        _liquidityRate: number | BN | string,
        _variableBorrowRate: number | BN | string,
        _stableBorrowRate: number | BN | string,
        _averageStableBorrowRate: number | BN | string,
        _utilizationRate: number | BN | string,
        _liquidityIndex: number | BN | string,
        _variableBorrowIndex: number | BN | string,
        _aTokenAddress: string,
        _lastUpdateTimestamp: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _reserveAddress: string,
        _totalLiquidity: number | BN | string,
        _availableLiquidity: number | BN | string,
        _totalBorrowsStable: number | BN | string,
        _totalBorrowsVariable: number | BN | string,
        _liquidityRate: number | BN | string,
        _variableBorrowRate: number | BN | string,
        _stableBorrowRate: number | BN | string,
        _averageStableBorrowRate: number | BN | string,
        _utilizationRate: number | BN | string,
        _liquidityIndex: number | BN | string,
        _variableBorrowIndex: number | BN | string,
        _aTokenAddress: string,
        _lastUpdateTimestamp: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        _reserveAddress: string,
        _totalLiquidity: number | BN | string,
        _availableLiquidity: number | BN | string,
        _totalBorrowsStable: number | BN | string,
        _totalBorrowsVariable: number | BN | string,
        _liquidityRate: number | BN | string,
        _variableBorrowRate: number | BN | string,
        _stableBorrowRate: number | BN | string,
        _averageStableBorrowRate: number | BN | string,
        _utilizationRate: number | BN | string,
        _liquidityIndex: number | BN | string,
        _variableBorrowIndex: number | BN | string,
        _aTokenAddress: string,
        _lastUpdateTimestamp: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _reserveAddress: string,
        _totalLiquidity: number | BN | string,
        _availableLiquidity: number | BN | string,
        _totalBorrowsStable: number | BN | string,
        _totalBorrowsVariable: number | BN | string,
        _liquidityRate: number | BN | string,
        _variableBorrowRate: number | BN | string,
        _stableBorrowRate: number | BN | string,
        _averageStableBorrowRate: number | BN | string,
        _utilizationRate: number | BN | string,
        _liquidityIndex: number | BN | string,
        _variableBorrowIndex: number | BN | string,
        _aTokenAddress: string,
        _lastUpdateTimestamp: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    getReserves(txDetails?: Truffle.TransactionDetails): Promise<string[]>;

    getReserveData(
      _reserveAddress: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<[BN, BN, BN, BN, BN, BN, BN, BN, BN, BN, BN, string, BN]>;
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
