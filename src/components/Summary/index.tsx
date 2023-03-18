import React from 'react';
import { Box, Button, Typography, SvgIcon } from '@mui/material';

// Hook
import useSummary from './useSummary';

// Daata
import data from '../../data/data.json';

//Type
import { TestElementType } from '../../types/type';

export default function Summary() {
  const { chooseColor, chooseIcon } = useSummary();

  return (
    <Box
      sx={{
        width: '50%',
        height: 'auto',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        '@media(max-width: 599px)': {
          width: 'auto',
          height: '50%',
        },
      }}
    >
      <Typography color="hsl(224, 30%, 27%)" sx={{ fontWeight: 'bold' }}>
        Summary
      </Typography>
      {data.map((singleItem: TestElementType) => (
        <Box
          sx={{
            width: 'auto',
            height: '50px',
            background: chooseColor(singleItem.category, 'background'),
            borderRadius: '.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingX: '1rem',
          }}
          key={singleItem.category}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <SvgIcon sx={{ marginTop: '2px' }}>
              {chooseIcon(singleItem.category)}
            </SvgIcon>
            <Typography
              color={`${chooseColor(singleItem.category, 'element')}`}
            >
              {singleItem.category}
            </Typography>
          </Box>
          <Typography color="hsl(224, 30%, 27%)">
            {singleItem.score}/100
          </Typography>
        </Box>
      ))}
      <Button
        variant="contained"
        sx={{
          textTransform: 'none',
          borderRadius: '20rem',
          background:
            'linear-gradient(0deg, hsl(241, 81%, 54%), hsl(252, 100%, 67%))',
          '&:hover': {
            background: 'hsl(224, 30%, 27%)',
          },
        }}
      >
        Continue
      </Button>
    </Box>
  );
}
