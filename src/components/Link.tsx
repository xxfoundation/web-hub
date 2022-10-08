import { Link as MaterialLink } from '@mui/material';
import { LinkProps } from '@mui/material/Link';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkRouterProps extends LinkProps {
  to?: string;
  replace?: boolean;
}

const Link: React.FC<LinkRouterProps> = React.forwardRef(({ children, ...props }, ref) => {
  const LinkComponent = props.to?.startsWith('/') ? RouterLink : 'a';

  return (
    <MaterialLink
      underline='hover'
      component={LinkComponent}
      {...props}
      href={props.to}
      ref={ref}>
      {children}
    </MaterialLink>
  );
});

export default Link;