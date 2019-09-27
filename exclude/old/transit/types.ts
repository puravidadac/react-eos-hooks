import React from 'react';
import { Wallet, NetworkConfig } from 'eos-transit';

export interface TransitProviderProps {
  children: React.ReactNode;
  config: TransitConfig;
}
export type TransitConfig = {
  appName: string;
  network: NetworkConfig;
  providers: Array<string>;
};

export type TransitWalletProvider = 'scatter' | 'tokenpocket' | 'eoslynx' | 'meetone';

export type TransitContextType = {
  connectWallet: (provider: TransitWalletProvider) => Promise<void>;
  disconnectWallet: () => void;
};

export interface TransitState {
  wallet: null | Wallet;
  connecting: null | string;
  error: boolean;
}

export interface TransitReducerActionType {
  type: 'CONNECT_WALLET_START' | 'CONNECT_WALLET' | 'DISCONNECT_WALLET' | 'CONNECT_ERROR';
  payload?: any;
}
