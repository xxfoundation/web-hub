import type { Product } from '../types';
import xxmessenger from '../assets/images/logos/xx_messenger_logotype_color.svg';
import speakeasy from '../assets/images/logos/haven-logo.svg';
import proxxy from '../assets/images/logos/proxxy.png';
import conexxus from '../assets/images/logos/conexxus.svg';

const dapps: Product[] = [
  {
    title: 'Codename Speakeasy',
    description:
      'True Freedom to express yourself, your thoughts, your beliefs.\nSpeak easily to a group of friends or a global community. Talk about what you want. Surveillance free. Censorship proof. Your speakeasy is yours.',
    urls: ['https://haven.xx.network'],
    tags: ['Private Social Network'],
    company: 'Elixxir',
    companyUrl: 'https://elixxir.io',
    logo: speakeasy
  },
  {
    title: 'co-nexx.us',
    description:
      'A social network where you are not the product.\nDirect messages, group chats, and feeds, all carried over the cMixx mixnet so that neither the contents of a conversation nor the metadata around it is left behind for anyone to collect. There are no ads, no algorithmic feed, and no account to hand over. Currently in public alpha.',
    urls: ['https://co-nexx.us'],
    tags: ['Private Social Network'],
    company: 'co-nexx.us',
    companyUrl: 'https://co-nexx.us',
    logo: conexxus
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
    urls: ['https://xx.network/developers-mixnet/#:~:text=About%20xx%20Messenger'],
    tags: ['Private Messenger'],
    company: 'Elixxir',
    companyUrl: 'https://elixxir.io',
    logo: xxmessenger
  }
];

export default dapps;
