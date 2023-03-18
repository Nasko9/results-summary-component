import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Components
import Result from './components/Result';
import Summary from './components/Summary';

// Create MuiTheme
const theme = createTheme({
  typography: {
    fontFamily: ['Hanken Grotesk', 'sans-serif'].join(','),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: 550,
            height: 390,
            borderRadius: '1.7rem',
            boxShadow: '23px 19px 16px 0 rgba(0, 0, 0, 0.1)',
            display: 'flex',
            '@media(max-width: 599px)': {
              width: 375,
              height: 'auto',
              borderRadius: '1.7rem',
              boxShadow: '23px 19px 16px 0 rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Result />
          <Summary />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
