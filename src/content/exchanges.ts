import type { Product } from '../types';

import mexc from '../assets/images/logos/mexc.png';

const exchanges: Product[] = [
  {
    description:
      'Where you can buy and sell xx coin in multiple pairs.',
    url: 'https://www.mexc.com/exchange/XX_USDT',
    tag: 'CEX',
    logo: mexc,
    company: 'MEXC Global',
    companyUrl: 'https://www.mexc.com/'
  }
];

export default exchanges;
