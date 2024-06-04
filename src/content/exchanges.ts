import type { Product } from '../types';

import mexc from '../assets/images/logos/mexc.png';
import uniswap from '../assets/images/logos/uniswap.png';
import biconomy from '../assets/images/logos/biconomy.png';
import coinstore from '../assets/images/logos/coinstore.png';
import lbank from '../assets/images/logos/lbank.png';

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
  {
    description:
      'Biconomy is a global digital asset trading platform that provides transparent exchange services for various cryptocurrencies. It supports KYC for users in the US and Canada, and facilitates crypto purchases using Visa and Mastercard. Emphasizing blockchain\'s potential for trust and efficiency, Biconomy promotes growth and collaboration with leading partners worldwide.',
    urls: ['https://www.biconomy.com/exchange/WXX_USDT'],
    tags: ['CEX', 'Wrapped', 'Native'],
    logo: biconomy,
    company: 'Biconomy',
    companyUrl: 'https://www.biconomy.com',
  },
  {
    description:
      'Coinstore is a cryptocurrency exchange offering spot and futures trading globally. It features a user-friendly interface, robust security measures, and supports multiple languages. The platform provides educational resources and responsive customer support to ensure a secure and efficient trading experience for both novice and experienced traders.',
    urls: ['https://www.coinstore.com/#/spot/XXUSDT', 'https://www.coinstore.com/#/spot/WXXUSDT'],
    tags: ['CEX', 'Native', 'Wrapped'],
    logo: coinstore,
    company: 'Coinstore',
    companyUrl: 'https://www.coinstore.com/',
  },
  {
    description:
      'LBank is a global digital asset trading platform that provides transparent exchange services for various cryptocurrencies. It supports KYC for users in the US and Canada, and facilitates crypto purchases using Visa and Mastercard. Emphasizing blockchain\'s potential for trust and efficiency, LBank promotes growth and collaboration with leading partners worldwide.',
    urls: ['https://www.lbank.com/trade/xx_usdt'],
    tags: ['CEX', 'Native'],
    logo: lbank,
    company: 'LBank',
    companyUrl: 'https://www.lbank.com/',
  },
];

export default exchanges;
