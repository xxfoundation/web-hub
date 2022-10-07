import type { Endpoint } from '../types';
import type { FC } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  Toolbar,
  Link,
  styled,
  MenuItem
} from '@mui/material';
import { useRef } from 'react';

import useToggle from '../hooks/useToggle';
import logo from '../assets/images/logos/xx-network-logo--white.svg';

export const MenuButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 14,
  color: theme.palette.text.primary,
  '&:hover': {
    background: 'none',
    '&:before': {
      content: '\'\'',
      display: 'block',
      height: 1,
      width: 20,
      background: theme.palette.text.secondary,
      position: 'absolute',
      top: 0,
      left: 6
    }
  }
}));

export const MenuLink = styled(Link)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 14,
  padding: 9,
  paddingLeft: 24,
  paddingRight: 24,
  display: 'block',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.text.secondary,
    textDecoration: 'none'
  },
  ':first-child': {
    paddingTop: 14
  },
  ':last-child': {
    paddingBottom: 14
  }
}));

const StyledContainer = styled(AppBar)(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  background: theme.gradients?.primary,
}));

const AppsMenu = () => {
  const button = useRef(null);
  const [opened, { toggle, toggleOff: close }] = useToggle();

  return (
    <>
      <MenuButton
        sx={{ color: 'white' }}
        ref={button}
        id='apps-button'
        aria-controls={opened ? 'apps-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={opened ? 'true' : undefined}
        onClick={toggle}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Apps
      </MenuButton>
      {button.current && (
        <Menu
          id='apps-menu'
          anchorEl={button.current}
          open={opened}
          onClose={close}
          MenuListProps={{
            'aria-labelledby': 'apps-button'
          }}
        >
          <MenuLink href='https://sleeve.xx.network' onClick={close}>
            Sleeve
          </MenuLink>
          <MenuLink href='https://wallet.xx.network'  onClick={close}>
            Block Explorer
          </MenuLink>
          <MenuLink href='https://explorer.xx.network/staking/simple' onClick={close}>
            Simple Staking
          </MenuLink>
          <MenuLink onClick={close}>
            Governance
          </MenuLink>
          <MenuLink href='https://dashboard.xx.network' onClick={close}>
            cmix Dashboard
          </MenuLink>
        </Menu>
      )}
    </>
  );
}

const WalletsMenu = () => {
  const button = useRef(null);
  const [opened, { toggle, toggleOff: close }] = useToggle();

  return (
    <>
      <MenuButton
        sx={{ color: 'white' }}
        ref={button}
        id='apps-button'
        aria-controls={opened ? 'wallets-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={opened ? 'true' : undefined}
        onClick={toggle}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Wallets
      </MenuButton>
      {button.current && (
        <Menu
          id='wallets-menu'
          anchorEl={button.current}
          open={opened}
          onClose={close}
          MenuListProps={{
            'aria-labelledby': 'wallets-button'
          }}
        >
          <MenuLink href='https://wallet.xx.network' onClick={close}>
            Web Wallet
          </MenuLink>
        </Menu>
      )}
    </>
  );
}

const DocsMenu = () => {
  const button = useRef(null);
  const [opened, { toggle, toggleOff: close }] = useToggle();

  return (
    <>
      <MenuButton
        sx={{ color: 'white' }}
        ref={button}
        id='apps-button'
        aria-controls={opened ? 'docs-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={opened ? 'true' : undefined}
        onClick={toggle}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Docs
      </MenuButton>
      {button.current && (
        <Menu
          id='docs-menu'
          anchorEl={button.current}
          open={opened}
          onClose={close}
          MenuListProps={{
            'aria-labelledby': 'docs-button'
          }}
        >
          <MenuLink href='#' onClick={close}>
            Blockchain API
          </MenuLink>
          <MenuLink href='#' onClick={close}>
            xxDK Dev
          </MenuLink>
          <MenuLink href='https://dashboard-api.xx.network/v1/docs/' onClick={close}>
            cmix Dashboard API
          </MenuLink>
          <MenuLink href='https://forum.xx.network/' onClick={close}>
            Blockchain API
          </MenuLink>
        </Menu>
      )}
    </>
  );
}

const EndpointsMenu: FC<{ endpoints: Endpoint[] }> = ({ endpoints }) => {
  const button = useRef(null);
  const [opened, { toggle, toggleOff: close }] = useToggle();

  return (
    <>
      <MenuButton
        sx={{ color: 'white' }}
        ref={button}
        id='apps-button'
        aria-controls={opened ? 'wallets-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={opened ? 'true' : undefined}
        onClick={toggle}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Endpoints
      </MenuButton>
      {button.current && (
        <Menu
          id='wallets-menu'
          anchorEl={button.current}
          open={opened}
          onClose={close}
          MenuListProps={{
            'aria-labelledby': 'wallets-button'
          }}
        >
            {endpoints.map((endpoint) => (
              <MenuItem>
                {endpoint.url},{' '}
                {endpoint.host},{' '}
                {endpoint.description}
              </MenuItem>
            ))}
          
        </Menu>
      )}
    </>
  );
}

const endpoints: Endpoint[] = [
  {
    url: 'wss://mainnet.xxnet.io',
    host: 'xxLabs',
    description: 'Ipsum lorem and stuff'
  }
]

const Header = () => (
  <StyledContainer position='static'>
    <Container maxWidth='lg'>
      <Toolbar sx={{ flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between'}}>
        <Link>
          <img src={logo} />
        </Link>
        <Box>
          <AppsMenu />
          <WalletsMenu />
          <DocsMenu />
          <EndpointsMenu endpoints={endpoints} />
        </Box>
      </Toolbar>
    </Container>
  </StyledContainer>
)

export default Header;
