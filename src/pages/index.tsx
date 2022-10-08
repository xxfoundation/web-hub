import React, { FC } from 'react';
import { Container } from '@mui/material';
import BasicTabs from '../components/BasicTabs';

const Home: FC = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      <BasicTabs />
    </Container>
  );
};

export default Home;
