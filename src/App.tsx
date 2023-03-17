import React from 'react';
// import data from './data/data.json';
import { Box } from '@mui/material';

// Components
import Result from './components/Result';
import Summary from './components/Summary';

export default function App() {
  // ? W:476px h:333px  mobile: w:345 h: full
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: 476,
          height: 333,
          borderRadius: '1.7rem',
          boxShadow: '23px 19px 16px 0 rgba(0, 0, 0, 0.1)',
          display: 'flex',
        }}
      >
        <Result />
        <Summary />
      </Box>
    </Box>
  );
}
