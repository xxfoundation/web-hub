import type { Product } from '../types';

import mexc from '../assets/images/logos/mexc.png';

const exchanges: Product[] = [
  {
    title: 'Exchange',
    description:
      'Where you can buy and sell xx coin in multiple pairs.',
    url: 'https://www.mexc.com/exchange/XX_USDT',
    tag: 'CEX',
    companyUrl: 'https://www.mexc.com/',
    logo: mexc
  }
];

export default exchanges;
