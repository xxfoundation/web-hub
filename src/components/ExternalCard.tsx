/* eslint-disable @typescript-eslint/no-shadow */
import type { Product } from '../types'

import React, { FC } from 'react';
import { styled, Box, Typography, Stack, Button, useMediaQuery } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import PaperWrap from './PaperWrap';
import Tag from './Tag';

type Props = Product;

const StyledCard = styled(PaperWrap)({
  backgroundColor: 'rgba(255, 255, 255, 1)',
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
    top: 8,
    left: 8,
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
    top: 16,
    left: 16,
  },
});

const LogoContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 150,
  maxWidth: 150,
  maxHeight: 75,
  marginRight: '0.5em'
}));

const LaunchButton: FC<{ url: string; alignSelf?: string }> = ({ alignSelf = 'end', url }) => (
  <Button 
    variant='text' 
    href={url} 
    sx={{ borderRadius: '5px', minWidth: '2em', maxHeight: '2em', alignSelf }} 
    target='_blank'
  >
    <LaunchIcon />
  </Button>
);

const ProductCard: FC<Props> = ({ company, description, logo, tags, urls }) => {
  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <StyledCard>
      <Stack spacing={2}>
        <Stack spacing={2} direction={isMobile ? 'column' : 'row'} sx={{justifyContent: 'space-between', minHeight: 60, alignItems: 'center'}}>
          <LogoContainer>
            <img src={logo} alt={`${company} logo`}/>
          </LogoContainer>
          <Stack spacing={1} direction='column' sx={{ justifyContent: 'space-between', paddingBottom: '0.5em'}}>
            {!isMobile && (
              <Stack direction='row' alignSelf={'end'}>
                {urls.map((url, index) => (
                  <LaunchButton key={`desktop-${url}-${index}`} url={url} />
                ))}
              </Stack>
            )}
            <Stack direction='row' spacing={1} sx={{pr: 0.5}} alignSelf={'end'}>
              {tags?.map((tag, index) => (
                <Tag key={`${tag}-${index}`} filled>{tag}</Tag>
              ))}
              {isMobile && urls.map((url, index) => (
                <LaunchButton key={`mobile-${url}-${index}`} url={url} alignSelf='center' />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Typography variant='body3' sx={{minHeight: {xs: '150px', ml: '100px', lg: '100px'} }}>
          {description}
        </Typography>
      </Stack>
    </StyledCard>
  );
}

export default ProductCard;
