"use client";
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '@/app/theme';

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
  fontSize: '2rem', // Default font size
  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem', // Small screens and up: larger font size
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem', // Medium screens and up: larger font size
    marginBottom: 0, // Medium screens and up: no margin bottom
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '6rem', // Large screens and up: largest font size
  },
}));

const GeneralInfoComponent = () => {
  return (
    <HeroBox component="section" id='about'>
      <img src='/hero2.webp' alt='second hero image' />
      <ContentOverlay>
        <Typography 
          sx={{
            fontSize: '1.5rem',
            [theme.breakpoints.up('sm')]: {
              fontSize: '2rem',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '3rem',
            },
            [theme.breakpoints.up('lg')]: {
              fontSize: '4rem',
            },
          }}
        >
          47 Games and 100+ Game Awards 
        </Typography>
        <Typography 
          variant="h3" 
          component="p" 
          sx={{
            fontFamily: theme.myFont,
            fontSize: '1rem',
            [theme.breakpoints.up('sm')]: {
              fontSize: '1.5rem',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '2rem',
            },
            [theme.breakpoints.up('lg')]: {
              fontSize: '2.5rem',
            },
          }} 
          gutterBottom
        >
          Best In The Gaming Industry
        </Typography>
        <Button 
          href='/All' 
          variant="contained" 
          color="secondary" 
          size="large"
          sx={{
            fontSize: '0.75rem',
            [theme.breakpoints.up('sm')]: {
              fontSize: '1rem',
            },
            [theme.breakpoints.up('md')]: {
              fontSize: '1.25rem',
            },
            [theme.breakpoints.up('lg')]: {
              fontSize: '1.5rem',
            },
          }}
        >
          Discover All Games
        </Button>
      </ContentOverlay>
    </HeroBox>
  );
};

export default GeneralInfoComponent;