/* eslint-disable @typescript-eslint/no-shadow */
import type { Product } from '../types'

import React, { FC } from 'react';
import { styled, Box, Typography, Stack, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

import PaperWrap from './PaperWrap';
import Tag from './Tag';

type Props = Product;
const color = '#00A2D6'

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
    border: `1px dashed ${color}`,
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
    border: `1px dashed ${color}`,
    zIndex: -1,
    width: '100%',
    height: '100%',
    top: 16,
    left: 16,
  },
});

const ImageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: color,
  borderRadius: 16,
  width: 50,
  height: 50,
  padding: '0.5em'
}));

const LogoContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'end',
  maxWidth: 85,
  maxHeight: 85,
  marginRight: '0.5em'
}));

const ProductTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  color: color,
  fontWeight: 500,
  fontSize: 20
}));

const InternalCard: FC<Props> = ({ blank, company, description, icon, logo, tags, title, urls }) => {
  return (
    <StyledCard>
      <Stack spacing={2}>
        <Stack direction='row' sx={{justifyContent: 'space-between', minHeight:60, alignItems: 'initial'}}>
          <Stack direction='row' spacing={1.5}>
            <ImageContainer>
              <img src={icon} alt={`${title} icon`} />
            </ImageContainer>
          </Stack>
          <Stack direction='column' justifyContent={'space-between'}>
            {urls.map((url) => <Button variant='text' href={url} sx={{ borderRadius: '5px', p: '0.25em', minWidth: '2em', maxHeight: '2em', alignSelf: 'end'}} target={blank ? '_blank' : ''}>
              <LaunchIcon />
            </Button>)}
          </Stack>
        </Stack>
        <Stack direction='row' sx={{justifyContent: 'space-between', alignItems: 'end', pr: '0.5em'}}>
          <ProductTitle>{title}</ProductTitle>
          <Stack direction='row' spacing={1}>
            {tags?.map((tag) => (<Tag filled>{tag}</Tag>))}
          </Stack>
        </Stack>
        <Typography variant='body3' sx={{minHeight: {xs: '150px', ml: '100px', lg: '100px'}}}>
          {description}
        </Typography>
        <LogoContainer>
          <img src={logo} alt={`${company} logo`}/>
        </LogoContainer>
      </Stack>
    </StyledCard>
  );
}

export default InternalCard;
