import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

type ErrorType = 'data-unavailable' | 'general';

const messages: Record<ErrorType, string> = {
  'data-unavailable': 'Data unavailable...',
  'general': 'Something went wrong...'
}

type Props = TypographyProps & {
  message?: string;
  type?: ErrorType;
  error?: boolean;
}

const Error: FC<Props> = ({ children, error, message, type = 'data-unavailable', ...rest }) => (
  <>
    {
      error === undefined || !!error
        ? <Typography color='red' {...rest}>{message || messages[type]}</Typography>
        : children
    }
  </>
  
);

export default Error;
