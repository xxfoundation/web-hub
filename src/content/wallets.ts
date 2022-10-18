import type { Product } from '../types';

import wallet from '../assets/images/icons/wallet.svg';
import foundation from '../assets/images/logos/xx-foundation-logo-color.svg';

const wallets: Product[] = [
  {
    title: 'Web Wallet',
    description:
    'Use the official web-based wallet app to create quantum-ready wallets, stake your xx coins, and vote on network issues. This is the most complex and complete tool used to interact with xx network blockchain.',
    url: 'https://wallet.xx.network',
    tag: 'Wallet',
    icon: wallet,
    logo: foundation,
    company: 'xx Foundation',
    companyUrl: 'https://xxfoundation.org'
  }
];

export default wallets;
