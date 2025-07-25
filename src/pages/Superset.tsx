import { Box, Container } from '@mui/material';
import BasicTabs from '../components/BasicTabs';

function Superset() {
  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      <iframe
            src={'https://f341f250-e8a6-4013-93c0-b96133543814.bridges.rollbridge.app/?widget=true&fromChainId=1&toChainId=56&tokenAddress=0x171120219d3223E008558654ec3254A0F206edb2'}
            width='100%'
            height='700'
            frameBorder='0'
          />
    </Container>
  );
}

export default Superset;