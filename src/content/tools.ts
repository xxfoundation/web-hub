import type { Product } from '../types';

import bridge from '../assets/images/icons/bridge.svg';
import sleeve from '../assets/images/icons/sleeve.svg';
import wallet from '../assets/images/icons/wallet.svg';
import staking from '../assets/images/icons/staking.svg';
import explorer from '../assets/images/icons/explorer.svg';
import cmix from '../assets/images/icons/cmix.svg';
import foundation from '../assets/images/logos/xx-foundation-logo-color.svg';

const tools: Product[] = [
  {
    title: 'Bridge',
    description:
    'Use the xx network Bridge to convert between native xx coins on the xx network blockchain and wrapped xx ERC20 tokens on the Ethereum Mainnet.',
    urls: ['https://bridge.xx.network'],
    tags: ['Bridge'],
    icon: bridge,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Sleeve',
    description:
    'Use this app to create your first quantum-ready wallet!\nSleeve is the novel Wallet generation algorithm used by xx network. With Sleeve, a backup quantum secure Wallet is embedded into a standard non quantum secure Wallet.',
    urls: ['https://sleeve.xx.network'],
    tags: ['Wallet Generation'],
    icon: sleeve,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Web Wallet',
    description:
    'Use the official web-based wallet app to create quantum-ready wallets, stake your xx coins, and vote on network issues. This is the most complex and complete tool used to interact with xx network blockchain.',
    urls: ['https://wallet.xx.network'],
    tags: ['Wallet'],
    icon: wallet,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Simple Staking',
    description:
    'Stake your xx coins!\nHelp secure the network and earn rewards. This app helps you stake (or unstake) your xx coins and redeem your rewards with only a handful of clicks while ensuring you retain custody of your coins.',
    urls: ['https://staking.xx.network'],
    tags: ['Staking'],
    icon: staking,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Block Explorer',
    description:
    'Navigate through the block explorer to learn more about xx network blockchain and to inspect on-chain data, such as transfers, account balances, validators performance and staking activity.',
    urls: ['https://explorer.xx.network'],
    tags: ['Explorer'],
    icon: explorer,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
  {
    title: 'Cmix Dashboard',
    description:
    'Visit the cMix dashboard to see nodes processing messages in real time and check statistics on their performance, uptime, and overall network throughput.',
    urls: ['https://dashboard.xx.network'],
    blank: true,
    tags: ['Dashboard'],
    icon: cmix,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  },
];

export default tools;
