import React from 'react';
import { Box } from '@mui/material';

//? padding 30px by x and 20px by y
export default function Result() {
  return (
    <Box
      sx={{
        width: '50%',
        height: 'auto',
        background:
          'linear-gradient(0deg, hsl(241, 81%, 54%), hsl(252, 100%, 67%))',
        borderRadius: '1.7rem',
      }}
    ></Box>
  );
}
