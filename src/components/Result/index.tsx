import React from 'react';
import { Box, Typography } from '@mui/material';

// Hook
import useResult from './useResult';

// Daata
import data from '../../data/data.json';

export default function Result() {
  const { showResult } = useResult();

  return (
    <Box
      sx={{
        width: '50%',
        height: 'auto',
        background:
          'linear-gradient(0deg, hsl(241, 81%, 54%), hsl(252, 100%, 67%))',
        borderRadius: '1.7rem',
        paddingX: '45px',
        paddingY: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        '@media(max-width: 599px)': {
          width: 'auto',
          height: '50%',
          borderRadius: '0 0 1.7rem 1.7rem',
        },
      }}
    >
      <Typography variant="h6" color="hsl(241, 100%, 89%)">
        Your Result
      </Typography>
      <Box
        sx={{
          width: '140px',
          height: '140px',
          background:
            'linear-gradient(180deg, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))',
          borderRadius: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" color="white">
          {showResult(data)}
        </Typography>
        <Typography color="hsl(241, 100%, 89%)" fontSize={13}>
          of 100
        </Typography>
      </Box>
      <Typography variant="h6" color="white">
        Great
      </Typography>
      <Typography color="hsl(241, 100%, 89%)" textAlign="center" fontSize={13}>
        You scored higher than 65% of the people who have taken these tests.
      </Typography>
    </Box>
  );
}
