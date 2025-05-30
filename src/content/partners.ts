import type { Product } from '../types';

import polkastats from '../assets/images/logos/polkastats.png';
import polkassembly from '../assets/images/logos/polkassembly.svg';
// import dwellir from '../assets/images/logos/dwellir.svg';
import subsquid from '../assets/images/logos/subsquid.svg'
import onfinality from '../assets/images/logos/onfinality.png';
import crust from '../assets/images/logos/crust.png';
import zondax from '../assets/images/logos/zondax.png';
import chainsafe from '../assets/images/logos/chainsafe.png';
import worldcoin from '../assets/images/logos/worldcoin.png';
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
      'Worldcoin aims to create a global digital currency, emphasizing privacy with its "Orb" device for secure, anonymous biometric ID. Partnering with the xx Network, it seeks to enhance privacy protections, advancing its mission for financial inclusion and a decentralized economy.',
    urls: ['https://worldcoin.org/'],
    tags: ['R&D', 'Grants', 'Privacy'],
    logo: worldcoin,
    company: 'Wordcoin Foundation',
    companyUrl: 'https://www.worldcoin.foundation/'
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
    'The most dev-friendly way to develop and deploy custom GraphQL APIs and ETLs for advanced blockchain use cases. Squid SDK is a complete indexing toolkit and hosted service for the next generation of dApps, on-chain analytics, and world-changing blockchain tech.',
    urls: ['https://subsquid.io/'],
    tags: ['API Dev'],
    logo: subsquid,
    company: 'Subsquid',
    companyUrl: 'https://subsquid.io'
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
      'An alternative to the official xx network block explorer.\nPolkastats allows you to connect to the polkadot-js extension to easily select, compare and nominate validators.',
    urls: ['https://xx.polkastats.io/'],
    tags: ['Explorer'],
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
