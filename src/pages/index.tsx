

import React, { FC } from 'react';
import { Container, Grid } from '@mui/material';

import ProductCard from '../components/ProductCard';
import products from '../products';

const Home: FC = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      <Grid spacing={5} container>
        {products.map((product) => (
          <Grid md={4} sm={6} xs={12} item>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
