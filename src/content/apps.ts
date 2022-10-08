import type { Product } from '../types';

import msgerLogo from '../assets/images/logos/logo_white.svg';

const apps: Product[] = [
  {
    logo: msgerLogo,
    title: 'Wallet Generation (Sleeve)',
    description:
      'Sleeve is a novel way of embedding a quantum secure key in the generation of curve based, non quantum secure keys.',
    url: 'https://sleeve.xx.network',
  },
  {
    logo: msgerLogo,
    title: 'Simple Staking',
    description:
      '< missing >',
    url: 'https://staking.xx.network',
  },
  {
    logo: msgerLogo,
    title: 'Block Explorer',
    description:
      'Navigate through the block explorer to learn more about xx network blockchain and to inspect on-chain data, such as transfers, votes and staking activity.',
    url: 'https://explorer.xx.network',
  },
  {
    logo: msgerLogo,
    title: 'Cmix Dashboard',
    description:
      'Visit the cMix dashboard to see nodes processing messages in real time while checking statistics on their performance, uptime, and network throughput.',
    url: 'https://dashboard.xx.network',
  },
];

export default apps;
