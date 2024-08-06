"use client";
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: 'black',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Hafif renkli arka plan
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

const GeneralInfoComponent = () => {
  return (
    <HeroBox component="section" id='about'>
      <img src='/hero2.webp' alt='second hero image' />
      <ContentOverlay>
        <Typography variant="h1" component="h1" gutterBottom >
          47 Games and 100+ Game Awards 
        </Typography>
        <Typography variant="h2" component="p" gutterBottom>
          Your subtitle or additional information here.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Discover All Games
        </Button>
      </ContentOverlay>
    </HeroBox>
  );
};

export default GeneralInfoComponent;