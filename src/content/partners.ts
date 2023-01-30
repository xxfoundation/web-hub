import type { Product } from '../types';

import polkastats from '../assets/images/logos/polkastats.png';
import polkassembly from '../assets/images/logos/polkassembly.svg';
import dwellir from '../assets/images/logos/dwellir.svg';
import onfinality from '../assets/images/logos/onfinality.png';
import crust from '../assets/images/logos/crust.png';

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
  },
  {
    description:
      'Specialized in providing infrastructure for the decentralized web. The pioneer Swedish Proof of Stake infrastructure provider.',
    url: 'https://dwellir.com/',
    tags: ['Infrastructure'],
    logo: dwellir,
    company: 'Dwellir',
    companyUrl: 'https://dwellir.io'
  },
  {
    description:
      'Empowering Web3 developers with easy-to-use, reliable and scalable blockchain infrastructure.',
    url: 'https://onfinality.io/',
    tags: ['Infrastructure', 'API Development'],
    logo: onfinality,
    company: 'onFinality',
    companyUrl: 'https://onfinality.io'
  },
  {
    description:
      'A decentralized cloud storage provider which was designed to realize our three core values: decentralization, privacy, and assurance.',
    url: 'https://crust.network/',
    tags: ['Storage'],
    logo: crust,
    company: 'Crust',
    companyUrl: 'https://crust.network'
  },
];

export default partners;
