import type { Product } from '../types';
import xxmessenger from '../assets/images/logos/xx_messenger_logotype_color.svg';
import speakeasy from '../assets/images/logos/codename_speakeasy_logotype_black.png';
import proxxy from '../assets/images/logos/proxxy.png';
import phoenixx from '../assets/images/logos/phoenixx.png'

const dapps: Product[] = [
  {
    title: 'phoenixx.tech',
    description:
      'A versatile dApp featuring web3-friendly private communications. Highlights include account abstraction, social login, private AI-prompts, in-group chat bill splitting, ENS integration, multi-chain support, payment requests, and encrypted IPFS file transfers, all powered by the privacy-focused xx network.',
    urls: ['https://phoenixx.io/'],
    tags: ['Communication', 'dApp', 'Web3'],
    company: 'BitFashioned',
    companyUrl: 'https://bitfashioned.com',
    logo: phoenixx
  },
  {
    title: 'Codename Speakeasy',
    description:
      'True Freedom to express yourself, your thoughts, your beliefs.\nSpeak easily to a group of friends or a global community. Talk about what you want. Surveillance free. Censorship proof. Your speakeasy is yours.',
    urls: ['http://alpha.speakeasy.tech/'],
    tags: ['Private Social Network'],
    company: 'Elixxir',
    companyUrl: 'https://elixxir.io',
    logo: speakeasy
  },
  {
    title: 'Proxxy',
    description:
      'Protect your privacy when using web3. With Proxxy, any wallet can integrate better privacy, in order to avoid metadata being collected by RPC providers. Proxxy is currently available as a desktop application seamlessly integrated with MetaMask.',
    urls: ['https://proxxy.xx.network/'],
    tags: ['Privacy', 'Web3'],
    company: 'xx foundation',
    companyUrl: 'https://xx.network',
    logo: proxxy
  },
  {
    title: 'xx messenger',
    description:
      'The first and only messenger that truly protects communication between sender and receiver. All messages are not only end-to-end encrypted using quantum secure cryptography, but no metadata is ever – or can be – collected.',
    urls: ['https://elixxir.io/'],
    tags: ['Private Messenger'],
    company: 'Elixxir',
    companyUrl: 'https://elixxir.io',
    logo: xxmessenger
  }
];

export default dapps;
