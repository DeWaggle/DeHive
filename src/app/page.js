"use client"

import styles from "./page.module.css";
import Dashboard from "./components/dashboard";

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = 'acbcdbac4595f385adf355383a022163'

// 2. Set chains
const xrpl = {
  chainId: 1440002,
  name: 'XRPL',
  currency: 'XRP',
  explorerUrl: 'https://evm-sidechain.xrpl.org/',
  rpcUrl: 'https://rpc-evm-sidechain.xrpl.org/'
}
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create a metadata object
const metadata = {
  name: 'DeHive',
  description: 'Compute space auctions',
  url: 'https://dewaggle.vercel.app', // origin must match your domain & subdomain
  icons: ['https://dewaggle.vercel.app']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [xrpl, mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function Home() {
  return (
    <main className={styles.main}>
      <Dashboard />
    </main>
  );
}
