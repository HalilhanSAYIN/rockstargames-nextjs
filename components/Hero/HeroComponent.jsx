"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import localFont from "next/font/local"

const myFont = localFont({
  src: [
    {
      path: '../../fonts/pricedownbl.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

const HeroBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',  // Small screens: column direction
  width: '100%',
  height: '100vh',
  backgroundColor: '#141E61',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',  // Medium screens and up: row direction
  },
}));

const GlowingText = styled(Typography)(({ theme }) => ({
  position: 'relative',
  color: 'white',
  fontSize: '4rem',  // Default font size
  transition: 'text-shadow 0.3s, font-size 0.3s',
  marginBottom: theme.spacing(2),  // Small screens: margin bottom
  margin: 4,
  '&:hover': {
    textShadow: '0 0 10px rgba(255, 191, 0, 1), 0 0 20px rgba(255, 191, 0, 1), 0 0 30px rgba(255, 191, 0, 1)',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',  // Medium screens and up: larger font size
    marginBottom: 0,  // Medium screens and up: no margin bottom
   
  },
}));

const LogoContainer = styled('div')(({ theme }) => ({
  width: '200px',  // Default width
  height: '200px',  // Default height
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: '100%',
    animation: 'pulse 2s infinite',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    zIndex: -1,
    boxShadow: '0 0 20px rgba(255, 191, 0, 0.7)',
    animation: 'glow 2s infinite',
    borderRadius: '50%',
  },
  '@global': {
    '@keyframes pulse': {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' },
    },
    '@keyframes glow': {
      '0%': { boxShadow: '0 0 20px rgba(255, 191, 0, 0.7)' },
      '50%': { boxShadow: '0 0 40px rgba(255, 191, 0, 1)' },
      '100%': { boxShadow: '0 0 20px rgba(255, 191, 0, 0.7)' },
    },
  },
  [theme.breakpoints.up('md')]: {
    width: '500px',  // Medium screens and up: larger width
    height: '500px',  // Medium screens and up: larger height
  },
}));

const Hero = () => {
  return (
    <HeroBox component="section">
      <GlowingText sx={{ fontFamily: myFont.style.fontFamily }}>
        ROCKSTAR GAMES
      </GlowingText>
      <LogoContainer>
        <img
          src="/rslogo.svg"
          alt="Logo"
        />
      </LogoContainer>
    </HeroBox>
  );
};

export default Hero;