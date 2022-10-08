import * as React from 'react';
import { Box, Typography, Tab, Tabs, Grid, Stack } from '@mui/material';

import ProductCard from '../components/ProductCard';
import categories from '../content/categories';
import apps from '../content/apps';
import wallets from '../content/wallets';
import partnerships from '../content/partnerships';
import { Product } from '../types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, index, value, ...other } = props;

  return (
    <Stack
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Stack>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabTitles = () => (
  categories.map((category, index) => (
      <Tab label={<Typography variant='body4'>{category.title}</Typography>} {...a11yProps(index)} />
  ))
)

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ mx: '1.5em' }} >
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs'>
          {TabTitles()}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid spacing={5} container>  
          {apps.map((app: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <ProductCard {...app} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid spacing={5} container>  
          {wallets.map((wallet: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <ProductCard {...wallet} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid spacing={5} container>  
          {partnerships.map((partnership: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <ProductCard {...partnership} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
