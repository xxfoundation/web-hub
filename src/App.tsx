import './assets/styles/index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import Home from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return(
    <Router>
      <Stack sx={{ minHeight: '100vh', minWidth: '370px' }}>
        <Header />
        <Box flexGrow={1}>
          <Routes>
            <Route path='*' element={<Home />} />
          </Routes>
        </Box>
        <Footer />
      </Stack>
    </Router>
  )
}

export default App
