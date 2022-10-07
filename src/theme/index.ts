import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#00A2D6',
    contrastText: '#FFF'
  },
  secondary: {
    main: '#08CDD7',
    contrastText: '#FFF'
  },
  warning: {
    main: '#FFC908'
  },
  success: {
    main: '#59BD1C'
  },
  text: {
    primary: '#4f4f4f',
  },
  grey: {
    50: '#FFFFFF',
    100: '#FCFCFC', // light backgrounds
    200: '#EAEAEA', // line grey
    300: '#D2D2D2', // grey
    400: '#9A9A9A', // med grey 2
    500: '#7A7A7A', // med grey
    600: '#4F4F4F', // backgrounds
    700: '#3D3D3D', // dark grey
    800: '#27272B' // black header
  }
};

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 24
        }
      }
    }
  },
  palette,
  typography: {
    fontFamily: '\'Roboto\', sans-serif',
    h1: {
      fontSize: 46,
      fontWeight: 800,
      color: palette.grey[700],
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    h2: {
      fontSize: 36,
      fontWeight: 700
    },
    h3: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: palette.grey[600]
    },
    h4: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: 0.5,
    },
    h5: {
      fontSize: 12,
      fontWeight: 700,
    },
    h6: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: 1.5,
      color: palette.grey[500],
    },
    subheader4: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.5,
      color: palette.grey[400]
    },
    body1: {
      fontWeight: 500
    },
    body2: {
      fontWeight: 700,
      fontSize: 14,
      color: palette.grey[500]
    },
    body3: {
      fontWeight: 400,
      letterSpacing: 0.5,
      fontSize: 14,
      lineHeight: 1.75,
      color: palette.grey[600]
    },
    body4: {
      fontWeight: 400,
      fontSize: 12
    },
    body5: {
      fontWeight: 400,
      fontSize: 10
    },
    button: {
      fontWeight: 500
    },
    subtitle2: {
      fontSize: '20px',
      fontWeight: 400,
      color: palette.grey[500]
    }
  },
  gradients: {
    primary:
      'linear-gradient(68.04deg, #4668BF 14.57%, #2581D6 41.33%, #019CB1 72.19%, #01ACAC 96.47%, #959595 112.54%)',
    secondary: 'linear-gradient(68.04deg, #62A3FF 14.57%, #3FBAFD 41.33%, #38CCE8 72.19%, #7AEBEF 96.47%, #FFFFFF 112.54%)',
  },
  shape: {
    borderRadius: 11
  },
  borders: {
    light: '1px solid #EAEAEA'
  },
  boxShadow: '0px 35px 84px 3px rgba(0, 0, 0, 0.04)'
});

export type { Theme } from '@mui/material';
