import './assets/styles/index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Home from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return(
    <Router>
      <Stack sx={{ minHeight: '100vh' }}>
        <Header />
        <Box flexGrow={1}>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Box>
        <Footer />
      </Stack>
    </Router>
  )
}

export default App
