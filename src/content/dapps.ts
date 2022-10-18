import type { Product } from '../types';

import xxmessenger from '../assets/images/logos/xx_messenger_logotype_color.svg';
import speakeasy from '../assets/images/logos/alpha_speakeasy_logotype_black.png';

const dapps: Product[] = [
  {
    title: 'xx messenger',
    description:
      'The first and only messenger that truly protects communication between sender and receiver. All messages are not only end-to-end encrypted, but no metadata is ever – or can be – collected.',
    url: 'https://elixxir.io/',
    tag: 'Private Messenger',
    company: 'Elixxir',
    companyUrl: 'https://elixxir.io',
    logo: xxmessenger
  },
  {
    title: 'Speakeasy',
    description:
      'True Freedom to express yourself, your thoughts, your beliefs.\nSpeak easily to a group of friends or a global community. Talk about what you want. Surveillance free. Censorship proof. Your speakeasy is yours.',
    url: 'http://alpha.speakeasy.tech/',
    tag: 'Private Social Network',
    company: 'Elixxir',
    companyUrl: 'https://elixxir.io',
    logo: speakeasy
  }
];

export default dapps;
