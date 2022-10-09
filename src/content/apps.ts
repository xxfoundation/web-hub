import type { Product } from '../types';

import explorer from '../assets/images/icons/explorer.svg';
import sleeve from '../assets/images/icons/sleeve.svg';
import staking from '../assets/images/icons/staking.svg';
import cmix from '../assets/images/icons/cmix.svg';

const apps: Product[] = [
  {
    logo: sleeve,
    title: 'Wallet Generation (Sleeve)',
    description:
      'Sleeve is the novel Wallet generation algorithm used by xx network. With Sleeve, a backup quantum secure Wallet is embedded into a standard non quantum secure Wallet. Therefore, this app will allow you to create a quantum-ready wallet.',
    url: 'https://sleeve.xx.network',
  },
  {
    logo: staking,
    title: 'Simple Staking',
    description:
      'Be part of the network and contribute for its security while being rewarded to do so. This app will help you stake (or unstake) your xx coins and redeem your rewards with only a handful of clicks while ensuring you retain control and custody of your coins at all times.',
    url: 'https://staking.xx.network',
  },
  {
    logo: explorer,
    title: 'Block Explorer',
    description:
      'Navigate through the block explorer to learn more about xx network blockchain and to inspect on-chain data, such as transfers, account balances, validators performance and staking activity.',
    url: 'https://explorer.xx.network',
  },
  {
    logo: cmix,
    title: 'Cmix Dashboard',
    description:
      'Visit the cMix dashboard to see nodes processing messages in real time while checking statistics on their performance, uptime, and network throughput.',
    url: 'https://dashboard.xx.network',
  },
];

export default apps;
