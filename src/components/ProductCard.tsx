/* eslint-disable @typescript-eslint/no-shadow */
import type { Product } from '../types'

import React, { FC } from 'react';
import { styled, Box, Typography, Stack, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import PaperWrap from './PaperWrap';

type Props = Product;

const StyledCard = styled(PaperWrap)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
  // border: '1px solid #0DB9CB',
  border: 'none',
  position: 'relative',
  borderRadius: 33,
  padding: '1.5em',
  '&:after': {
    content: '" "',
    borderRadius: 33,
    position: 'absolute',
    border: '1px dashed #00A2D6',
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
    border: '1px dashed #00A2D6',
    zIndex: -1,
    width: '100%',
    height: '100%',
    top: 24,
    left: 24,
  },
});

const ImageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#00A2D6',
  borderRadius: 16,
  maxWidth: 60,
  maxHeight: 60,
  padding: '0.5em'
}));

const ProductTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  color: '#00A2D6',
  fontWeight: 700,
  fontSize: 20
}));

// const StyledButton = styled(Button)({
//   padding: '5px 40px',
//   borderRadius: 100,
// });

const ProductCard: FC<Props> = ({ description, logo, title, url }) => {
  return (
    <StyledCard>
      <Stack spacing={2 }>
        <Stack direction='row' sx={{justifyContent: 'space-between'}}>
          <ImageContainer>
            <img src={logo} alt={`${title} logo`} />
          </ImageContainer>
          <Button variant='text' href={url} sx={{ borderRadius: '5px', p: '0.25em', minWidth: '2em', maxHeight: '2em'}}>
            <LaunchIcon />
          </Button>
        </Stack>
        <ProductTitle>
          {title}
        </ProductTitle>
        <Typography variant='body3' sx={{minHeight: '75px'}}>
          {description}
        </Typography>
        {/* <StyledButton variant='contained' href={url} sx={{ maxWidth: '9em', alignSelf: 'start' }}>
          Explore
        </StyledButton> */}
      </Stack>
    </StyledCard>
  );
}

export default ProductCard;
