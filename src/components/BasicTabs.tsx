import * as React from 'react';
import { Box, Typography, Tab, Tabs, Grid, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
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

// Card shape follows the data, not the tab: anything carrying an `icon` is an
// xx Foundation product and gets the titled InternalCard; everything else is a
// third party and gets ExternalCard, which renders neither `title` nor `icon`.
const CardGrid = ({ items }: { items: Product[] }) => (
  <Grid spacing={5} container>
    {items.map((item: Product) => (
      <Grid key={item.urls[0]} md={6} sm={12} xs={12} item>
        {item.icon ? <InternalCard {...item} /> : <ExternalCard {...item} />}
      </Grid>
    ))}
  </Grid>
);

const TabTitles = () => (
  categories.map((category, index) => (
      <Tab
        label={<Typography variant='body4'>{category.title}</Typography>}
        {...a11yProps(index)}
        to={category.title.toLocaleLowerCase()} component={Link}
      />
  ))
)

export default function BasicTabs() {
  const { pathname } = useLocation();
  const initialValue = categories.findIndex(category => category.title.toLocaleLowerCase() === pathname.slice(1));
  const [value, setValue] = React.useState(initialValue === -1 ? 0 : initialValue);

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
        <CardGrid items={tools} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CardGrid items={wallets} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CardGrid items={dapps} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CardGrid items={partners} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CardGrid items={exchanges} />
      </TabPanel>
    </Box>
  );
}
