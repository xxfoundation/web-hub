import type { Product } from '../types';

import polkastats from '../assets/images/logos/polkastats.png';
import polkassembly from '../assets/images/logos/polkassembly.svg';

const partners: Product[] = [
  {
    description:
      'Find all the information about democracy on xx network blockchain here, from referenda to treasury tips, passing by council motions and tech committee updates on chain. Keep posted and do not miss any voting details or upcoming events.',
    url: 'https://xx.polkassembly.io',
    tag: 'Governance',
    logo: polkassembly,
    company: 'Polkassembly',
    companyUrl: 'https://polkassembly.io'
  },
  {
    description:
      'Navigate through the block explorer to learn more about xx network blockchain and to inspect on-chain data, such as transfers, account balances, validators performance and staking activity.',
    url: 'https://dev.xx-network.polkastats.io/',
    tag: 'Explorer',
    logo: polkastats,
    company: 'Polkastats',
    companyUrl: 'https://polkastats.io'
  },
];

export default partners;
