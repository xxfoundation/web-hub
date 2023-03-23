import type { Product } from '../types';

import novaWallet from '../assets/images/logos/novawallet.png';
import subWallet from '../assets/images/logos/subwallet.png';

const wallets: Product[] = [
  {
    description:
      'Nova Wallet is a non-custodial mobile wallet, where users have full control of their assets and their own private keys. It allows users to manage all substrate-based coins/tokens, enjoy convenient staking experiences, and interact with many blockchains.',
    url: 'https://novawallet.io/',
    tags: ['Mobile'],
    logo: novaWallet,
    company: 'Nova Wallet',
    companyUrl: 'https://novawallet.io/'
  },
  {
    description:
      'SubWallet is the comprehensive non-custodial wallet solution for Polkadot, Substrate & Ethereum ecosystems. We envision a Web3 multiverse gateway through which users can enjoy multichain services with utmost ease and absolute security.',
    url: 'https://subwallet.app/',
    tags: ['Browser Extension', 'Mobile'],
    logo: subWallet,
    company: 'SubWallet',
    companyUrl: 'https://subwallet.app/'
  }
];

export default wallets;
