import type { Product } from '../types'

import React, { FC } from 'react';
import { styled, Box, Link, Typography, Stack, Button } from '@mui/material';

import PaperWrap from './PaperWrap';

type Props = Product;

const StyledCard = styled(PaperWrap)({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: 'none',
  position: 'relative',
  borderRadius: 33,
  '&:after': {
    content: '" "',
    borderRadius: 33,
    position: 'absolute',
    border: '1px dashed #0DB9CB',
    zIndex: -1,
    width: '100%',
    height: '100%',
    top: 12,
    left: 12,
  },
  '&:before': {
    content: '" "',
    opacity: 0.3,
    borderRadius: 33,
    position: 'absolute',
    border: '1px dashed #0DB9CB',
    zIndex: -1,
    width: '100%',
    height: '100%',
    top: 24,
    left: 24,
  },
});

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 16,
  width: 80,
  height: 80,
}));

const ProductTitle = styled(Typography)(({ theme } ) => ({
  fontFamily: 'Roboto',
  color: theme.palette.secondary.main,
  fontWeight: 700,
  fontSize: 24
}));

const StyledButton = styled(Button)({
  padding: '10px 40px',
  borderRadius: 100,
});

const ProductCard: FC<Props> = ({ description, logo, title, url }) => {
  return (
    <StyledCard>
      <Stack spacing={2}>
        <ImageContainer>
          <img src={logo} alt={`${title} logo`} />
        </ImageContainer>
        <ProductTitle>
          {title}
        </ProductTitle>
        <Typography variant='body3'>
          {description}
        </Typography>
        <Box sx={{ pt: 2 }}>
          <StyledButton variant='contained' color='secondary' href={url}>
            Learn More
          </StyledButton>
        </Box>
      </Stack>
    </StyledCard>
  );
}

export default ProductCard;
