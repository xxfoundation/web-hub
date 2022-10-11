import React, { FC } from 'react';
import { Container, Stack, Typography } from '@mui/material';

const Home: FC = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 12 }}>
      <Stack direction='column' spacing='60px'>
        <Typography variant='h3' align='center'>A unified website for xx network's tools, dapps, partnerships, etc...</Typography>
        <Typography variant='h2' align='center'>Coming Soon!</Typography>
      </Stack>
    </Container>
  );
};

export default Home;
