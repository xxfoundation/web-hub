import * as React from 'react';
import { Box, Typography, Tab, Tabs, Grid, Stack } from '@mui/material';

import InternalCard from './InternalCard';
import categories from '../content/categories';
import tools from '../content/tools';
import wallets from '../content/wallets';
import dapps from '../content/dapps';
import partners from '../content/partners';
import exchanges from '../content/exchanges';
import { Product } from '../types';
import ExternalCard from './ExternalCard';

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
    <Box sx={{ mx: '1.25em', marginRight: '3.25em' }} >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs'
          variant='scrollable'
          scrollButtons
          allowScrollButtonsMobile
        >
          {TabTitles()}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid spacing={5} container>  
          {tools.map((app: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <InternalCard {...app} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid spacing={5} container>  
          {wallets.map((wallet: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <ExternalCard {...wallet} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid spacing={5} container>  
          {dapps.map((dapp: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <ExternalCard {...dapp} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid spacing={5} container>  
          {partners.map((partner: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <ExternalCard {...partner} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid spacing={5} container>  
          {exchanges.map((exchange: Product) => (
            <Grid md={6} sm={6} xs={12} item>
              <ExternalCard {...exchange} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
