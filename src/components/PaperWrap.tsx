import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export type { PaperProps as Props } from '@mui/material';

export default styled(Paper)(({ theme }) => ({
  boxShadow: theme.boxShadow,
  border: theme.borders?.light,
  borderRadius: (theme.shape.borderRadius as number) * 3,
  padding: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem'
  }
}));
