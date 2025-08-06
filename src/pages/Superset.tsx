import { Box, Container } from '@mui/material';

function Superset() {
  return (
    <Container maxWidth='lg' sx={{ py: 4, my: 4, bgcolor: '#1e1e1e', border: '2px solid black', borderRadius: '25px' }}>
      <Box sx={{ textAlign: 'center', 
        bgcolor: 'white', 
        color: 'black', 
        borderTop: '3px solid white', 
        borderBottom: '0', 
        padding: '5px 10px', 
        borderTopLeftRadius: '25px', 
        borderTopRightRadius: '25px'
        }}>
        <h2>Wrapped xx Superbridge</h2>
      </Box>
      <iframe
      src='https://f341f250-e8a6-4013-93c0-b96133543814.bridges.rollbridge.app/?widget=true&fromChainId=1&toChainId=56&tokenAddress=0x171120219d3223E008558654ec3254A0F206edb2&scopedTokens=0x6Eb8f07D04278330b90a196F21708165529DB783,0x171120219d3223E008558654ec3254A0F206edb2'
      style={{ 
        width: '100%', 
        height: '450px',
        border: 'none',
      }}
    ></iframe>
    </Container>
  );
}

export default Superset;