import type { Product } from '../types';

import mexc from '../assets/images/logos/mexc.png';
import coinw from '../assets/images/logos/coinw.svg';

const exchanges: Product[] = [
  {
    description:
      'Founded in 2018, MEXC Global is known as the exchange of high performance and mega transaction matching technology. The team at MEXC Global are some of the first movers and pioneers of financial and blockchain technology. Currently, MEXC Global caters to 10 M+ users in more than 170 countries around the world',
    url: 'https://www.mexc.com/exchange/XX_USDT',
    tags: ['CEX'],
    logo: mexc,
    company: 'MEXC Global',
    companyUrl: 'https://www.mexc.com/'
  },
  {
    description:
      'Launched in 2017, CoinW is an exchange based in Hong Kong known for its strong security features, such as two-factor authentication and cold storage of user funds. Starting from July 13th, 2022, CoinW decided to completely eliminate both maker and taker fees on all spot pairs. Thus, all spot trades can be executed without any fees at all.',
    url: 'https://www.coinw.com/frontSpot/spottrade?symbol=1297',
    tags: ['CEX'],
    logo: coinw,
    company: 'CoinW',
    companyUrl: 'https://www.coinw.com/'
  }
];

export default exchanges;
