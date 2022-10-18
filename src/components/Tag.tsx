import { Box, BoxProps } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { FC } from 'react';
import { theme } from '../theme/tags';
import { styled } from '@mui/material/styles';


export const TagStyle = (filled?: boolean) => styled(Box)(() => ({
  display: 'inline-flex',
  paddingTop: 3,
  paddingBottom: 3,
  paddingLeft: 9,
  paddingRight: 9,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  color: filled ? theme.palette.primary.contrastText : theme.palette.primary.main,
  backgroundColor: filled ? theme.palette.primary.light : theme.palette.primary.contrastText,
  width: 'max-content',
  fontSize: '12px'
}));

type Props = {
  filled?: boolean;
} & BoxProps;

const Tag: FC<Props> = ({ children, filled, ...props }) => {
  const TagWrap = TagStyle(filled);
  return (
    <ThemeProvider theme={theme}>
      <TagWrap {...props}>{children}</TagWrap>
    </ThemeProvider>
  );
};

export default Tag;
