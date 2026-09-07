import type { Product } from '../types';

import polkastats from '../assets/images/logos/polkastats.png';
import polkassembly from '../assets/images/logos/polkassembly.svg';
// import dwellir from '../assets/images/logos/dwellir.svg';
import sqd from '../assets/images/logos/sqd.svg'
import onfinality from '../assets/images/logos/onfinality.png';
import crust from '../assets/images/logos/crust.png';
import zondax from '../assets/images/logos/zondax.png';
import chainsafe from '../assets/images/logos/chainsafe.png';
import world from '../assets/images/logos/world.svg';
import carbon from '../assets/images/logos/carbon.png';

const partners: Product[] = [
  {
    description:
      'Carbon Mobile Browser is a Web 3.0 browser offering AdBlock, dVPN, a crypto wallet, and privacy features. It aims for a faster, secure, and private web experience with a multi-chain wallet and rewards for browsing, ensuring data protection without selling user data.',
    urls: ['https://carbon.website/'],
    tags: ['Web3', 'Browser', 'Privacy'],
    logo: carbon,
    company: 'Carbon Browser',
    companyUrl: 'https://carbon.website/'
  },
  {
    description:
      'World aims to create a global identity and financial network, emphasizing privacy with its "Orb" device for secure, anonymous proof of personhood. Partnering with the xx network, the World Foundation seeks to enhance privacy protections, advancing its mission for financial inclusion and a decentralized economy.',
    urls: ['https://world.org/'],
    tags: ['R&D', 'Grants', 'Privacy'],
    logo: world,
    company: 'World Foundation',
    companyUrl: 'https://foundation.world.org/'
  },
  {
    description:
      'Chainsafe is a blockchain research and development company that provides solutions for scalable, decentralized systems. Their services include node deployment, protocol development, and consulting. Chainsafe is highly regarded for their contributions to the blockchain community through open-source software and collaboration.',
    urls: ['https://chainsafe.io/'],
    tags: ['R&D', 'Audits'],
    logo: chainsafe,
    company: 'ChainSafe',
    companyUrl: 'https://chainsafe.io/'
  },
  {
    description:
      'Zondax is a blockchain security company that provides a range of hardware and software solutions for secure key management and transaction signing. Their products include hardware wallets, SDKs, and development tools that enable businesses to integrate blockchain technology securely.',
    urls: ['https://zondax.ch/'],
    tags: ['Ledger App'],
    logo: zondax,
    company: 'Zondax',
    companyUrl: 'https://zondax.ch/'
  },
  {
    description:
    'Empowering Web3 developers with easy-to-use, reliable and scalable blockchain infrastructure. OnFinality is a blockchain infrastructure provider that offers managed node services, tooling, and analytics for multiple blockchain networks.',
    urls: ['https://onfinality.io/'],
    tags: ['Infrastructure', 'API Dev'],
    logo: onfinality,
    company: 'onFinality',
    companyUrl: 'https://onfinality.io'
  },
  {
    description:
    'The onchain data layer for dApps, analytics, wallets and payments. SQD serves real-time and historical blockchain data across 130+ networks through a decentralized data network, a streaming Portal API, an SDK for transforming that data, and a managed cloud to run it all on.',
    urls: ['https://sqd.dev/'],
    tags: ['API Dev'],
    logo: sqd,
    company: 'SQD',
    companyUrl: 'https://sqd.dev'
  },
  {
    description:
      'Participate in Democracy on the xx network!\nPolkassembly is a unified platform to discuss and vote on Governance proposals, motions and referanda.',
    urls: ['https://xx.polkassembly.io'],
    tags: ['Governance'],
    logo: polkassembly,
    company: 'Polkassembly',
    companyUrl: 'https://polkassembly.io'
  },
  {
    description:
      'Polkastats built one of the first block explorers in the Polkadot ecosystem, and the explorer that served xx network. The team works as a blockchain engineering group, building explorers, indexers and data tooling for Substrate and Cosmos chains.',
    urls: ['https://polkastats.io/'],
    tags: ['R&D'],
    logo: polkastats,
    company: 'Polkastats',
    companyUrl: 'https://polkastats.io'
  },
  {
    description:
      'Crust is a decentralized cloud storage provider that allows users to store and share files securely and efficiently. It leverages the power of the InterPlanetary File System (IPFS) and other decentralized storage protocols to ensure that data is distributed across multiple nodes and can be accessed from anywhere.',
    urls: ['https://crust.network/'],
    tags: ['Storage'],
    logo: crust,
    company: 'Crust',
    companyUrl: 'https://crust.network'
  },
];

export default partners;
