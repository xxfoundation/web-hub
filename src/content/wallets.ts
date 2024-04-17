import type { Product } from '../types';

import novaWallet from '../assets/images/logos/novawallet.png';
import subWallet from '../assets/images/logos/subwallet.png';
import talisman from '../assets/images/logos/talisman.svg';
import fearless from '../assets/images/logos/fearless.svg';

const wallets: Product[] = [
  {
    description:
      'Talisman is a leading non-custodial browser extension wallet designed for Polkadot and Ethereum, with support over 180 networks. It\'s an ultra-secure wallet that simplifies web3 for beginners and unleashes advanced capabilities for experts. Being multi-chain by design, it enables seamless interaction with diverse blockchains.',
    urls: ['https://talisman.xyz/'],
    tags: ['Browser Extension'],
    logo: talisman,
    company: 'Talisman',
    companyUrl: 'https://talisman.xyz/'
  },
  {
    description:
      'Nova Wallet is a non-custodial mobile wallet, where users have full control of their assets and their own private keys. It allows users to manage all substrate-based coins/tokens, enjoy convenient staking experiences, and interact with many blockchains.',
    urls: ['https://novawallet.io/'],
    tags: ['Mobile'],
    logo: novaWallet,
    company: 'Nova Wallet',
    companyUrl: 'https://novawallet.io/'
  },
  {
    description:
      'SubWallet is the comprehensive non-custodial wallet solution for Polkadot, Substrate & Ethereum ecosystems. We envision a Web3 multiverse gateway through which users can enjoy multichain services with utmost ease and absolute security.',
    urls: ['https://subwallet.app/'],
    tags: ['Browser Extension', 'Mobile'],
    logo: subWallet,
    company: 'SubWallet',
    companyUrl: 'https://subwallet.app/'
  },
  {
    description:
      'Fearless Wallet is a mobile wallet designed for the decentralized future on the Polkadot and Kusama ecosystem, with support for iOS and Android platforms. It offers an awesome user experience, fast performance, and secure storage for your accounts.',
    urls: ['https://fearlesswallet.io/'],
    tags: ['Browser Extension', 'Mobile'],
    logo: fearless,
    company: 'Fearless Wallet',
    companyUrl: 'https://fearlesswallet.io/'
  }
];

export default wallets;
