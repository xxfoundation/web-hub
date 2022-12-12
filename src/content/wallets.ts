import type { Product } from '../types';

import novaWallet from '../assets/images/logos/novawallet.png';
import subWallet from '../assets/images/logos/subwallet.png';

const wallets: Product[] = [
  {
    description:
      'Nova Wallet is a non-custodial mobile wallet, where users have full control of their assets and their own private keys. It allows users to manage all substrate-based coins/tokens, enjoy convenient staking experiences, and interact with many blockchains without ever giving up your private keys or the passcode to your funds.',
    url: 'https://novawallet.io/',
    tags: ['Mobile'],
    logo: novaWallet,
    company: 'Nova Wallet',
    companyUrl: 'https://novawallet.io/'
  },
  {
    description:
      'SubWallet aspires to become a pioneering user-friendly Web3 Multiverse Gateway for the Polkadot and Kusama ecosystem. The main vision is a wallet in which users can track, send, receive, stake, contribute to crowdloans and manage multi-chain assets with utmost ease.',
    url: 'https://subwallet.app/',
    tags: ['Browser Extension', 'Mobile'],
    logo: subWallet,
    company: 'SubWallet',
    companyUrl: 'https://subwallet.app/'
  }
];

export default wallets;
