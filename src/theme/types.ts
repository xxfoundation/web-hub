import { TypographyStyle } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    borders?: { light?: string };
    boxShadow?: string;
    gradients?: { primary: string, secondary: string };
  }

  interface ThemeOptions {
    borders?: { light?: string }
    boxShadow?: string;
    gradients?: { primary: string, secondary: string };
  }

  interface TypographyVariantsOptions {
    code?: TypographyStyle;
    body3?: TypographyStyle;
    body4?: TypographyStyle;
    body5?: TypographyStyle;
    subheader4?: TypographyStyle;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true;
    body3: true;
    body4: true;
    body5: true;
    subheader4: true;
  }
}

export type { Theme } from '@mui/material';
