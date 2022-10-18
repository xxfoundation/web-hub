import type { Product } from '../types';

import explorer from '../assets/images/icons/explorer.svg';
import sleeve from '../assets/images/icons/sleeve.svg';
import staking from '../assets/images/icons/staking.svg';
import cmix from '../assets/images/icons/cmix.svg';
import foundation from '../assets/images/logos/xx-foundation-logo-color.svg';

const tools: Product[] = [
  {
    title: 'Sleeve',
    description:
    'Use this app to create your first quantum-ready wallet!\nSleeve is the novel Wallet generation algorithm used by xx network. With Sleeve, a backup quantum secure Wallet is embedded into a standard non quantum secure Wallet.',
    url: 'https://sleeve.xx.network',
    tag: 'Wallet Generation',
    icon: sleeve,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Simple Staking',
    description:
    'Stake your xx coins!\nHelp secure the network and earn rewards. This app helps you stake (or unstake) your xx coins and redeem your rewards with only a handful of clicks while ensuring you retain custody of your coins.',
    url: 'https://staking.xx.network',
    tag: 'Staking',
    icon: staking,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Block Explorer',
    description:
    'Navigate through the block explorer to learn more about xx network blockchain and to inspect on-chain data, such as transfers, account balances, validators performance and staking activity.',
    url: 'https://explorer.xx.network',
    tag: 'Explorer',
    icon: explorer,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Cmix Dashboard',
    description:
    'Visit the cMix dashboard to see nodes processing messages in real time and check statistics on their performance, uptime, and overall network throughput.',
    url: 'https://dashboard.xx.network',
    blank: true,
    tag: 'Dashboard',
    icon: cmix,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
];

export default tools;
