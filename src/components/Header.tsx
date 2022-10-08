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
  Stack
} from '@mui/material';
import { useRef } from 'react';

import useToggle from '../hooks/useToggle';
// import logo from '../assets/images/logos/xx-network-logo--white.svg';
// import hub from '../assets/images/logos/xx_hub_logotype.svg';
import hub_white from '../assets/images/logos/xx_hub_logotype_white.svg';

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

// const WalletsMenu = () => {
//   const button = useRef(null);
//   const [opened, { toggle, toggleOff: close }] = useToggle();

//   return (
//     <>
//       <MenuButton
//         sx={{ color: 'white' }}
//         ref={button}
//         id='apps-button'
//         aria-controls={opened ? 'wallets-menu' : undefined}
//         aria-haspopup='true'
//         aria-expanded={opened ? 'true' : undefined}
//         onClick={toggle}
//         endIcon={<KeyboardArrowDownIcon />}
//       >
//         Wallets
//       </MenuButton>
//       {button.current && (
//         <Menu
//           id='wallets-menu'
//           anchorEl={button.current}
//           open={opened}
//           onClose={close}
//           MenuListProps={{
//             'aria-labelledby': 'wallets-button'
//           }}
//         >
//           <MenuLink href='https://wallet.xx.network' onClick={close}>
//             Web Wallet
//           </MenuLink>
//         </Menu>
//       )}
//     </>
//   );
// }

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

const Header = () => (
  <StyledContainer position='static'>
    <Container maxWidth='lg'>
      <Toolbar sx={{ flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-between'}}>
        <Link>
          <img src={hub_white} />
        </Link>
        <Stack direction={'row'} spacing={2} sx={{flexWrap: 'wrap', p: { xs: '1em 0 0 1.5em' }}}>
          {/* <MenuButton href='https://wallet.xx.network/' sx={{ color: 'white' }}>
            Wallet
          </MenuButton> */}
          <Box>
            {/* <WalletsMenu /> */}
            <DocsMenu />
            {/* <EndpointsMenu endpoints={endpoints} /> */}
          </Box>
        </Stack>
        {/* <Button variant='contained' sx={{backgroundColor: 'white', p: '0.75em'}}>
          <img src={hub} />
        </Button> */}
      </Toolbar>
    </Container>
  </StyledContainer>
)

export default Header;
