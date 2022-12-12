import type { Product } from '../types';

import polkastats from '../assets/images/logos/polkastats.png';
import polkassembly from '../assets/images/logos/polkassembly.svg';

const partners: Product[] = [
  {
    description:
      'Participate in Democracy on the xx network!\nPolkassembly is a unified platform to discuss and vote on Governance proposals, motions and referanda.',
    url: 'https://xx.polkassembly.io',
    tags: ['Governance'],
    logo: polkassembly,
    company: 'Polkassembly',
    companyUrl: 'https://polkassembly.io'
  },
  {
    description:
      'An alternative to the official xx network block explorer.\nPolkastats allows you to connect to the polkadot-js extension to easily select, compare and nominate validators.',
    url: 'https://xx.polkastats.io/',
    tags: ['Explorer'],
    logo: polkastats,
    company: 'Polkastats',
    companyUrl: 'https://polkastats.io'
  }
];

export default partners;
