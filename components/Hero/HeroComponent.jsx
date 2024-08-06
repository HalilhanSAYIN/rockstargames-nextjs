"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  backgroundColor: '#141E61',
}));

const glowAnimation = `
  @keyframes glow {
    0% { box-shadow: 0 0 20px rgba(255, 191, 0, 0.7); }
    50% { box-shadow: 0 0 40px rgba(255, 191, 0, 1); }
    100% { box-shadow: 0 0 20px rgba(255, 191, 0, 0.7); }
  }
`;

const LogoContainer = styled('div')(({ theme }) => ({
  width: '500px',
  height: '500px',
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
}));

const Hero = () => {
  return (
    <HeroBox component="section">
      <Typography variant="h1" component="p" sx={{ marginRight: 2, color: 'white' }}>
        ROCKSTAR GAMES
      </Typography>
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