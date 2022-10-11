import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00A2D6',
      light: '#00A2D6',
      contrastText: '#FFFFFF'
    }
  },
  typography: {
    fontSize: 12
  },
  shape: {
    borderRadius: 5
  }
});