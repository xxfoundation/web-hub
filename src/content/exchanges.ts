import type { Product } from '../types';

import mexc from '../assets/images/logos/mexc.png';
import uniswap from '../assets/images/logos/uniswap.png';

const exchanges: Product[] = [
  {
    description:
      'Founded in 2018, MEXC Global is known as the exchange of high performance and mega transaction matching technology. The team at MEXC Global are some of the first movers and pioneers of financial and blockchain technology. Currently, MEXC Global caters to 10 M+ users in more than 170 countries around the world.',
    urls: ['https://www.mexc.com/exchange/XX_USDT'],
    tags: ['CEX', 'Native'],
    logo: mexc,
    company: 'MEXC Global',
    companyUrl: 'https://www.mexc.com/',
  },
  {
    description:
      'Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens. An example of an automated market maker (AMM), Uniswap launched in November 2018, and has gained considerable popularity thanks to the DeFi phenomenon and associated surge in token trading.',
    urls: ['https://app.uniswap.org/explore/tokens/ethereum/0x171120219d3223e008558654ec3254a0f206edb2'],
    tags: ['DEX', 'Wrapped'],
    logo: uniswap,
    company: 'Uniswap',
    companyUrl: 'https://uniswap.org/',
  },
];

export default exchanges;
