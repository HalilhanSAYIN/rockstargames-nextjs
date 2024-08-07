"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Drawer, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';

const HeaderBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.footerColor,
}));

const HeaderLink = styled(Link)(({ theme }) => ({
  color: 'inherit',
  textDecoration: 'none',
  margin: theme.spacing(0, 2),
  fontWeight: 300,
  letterSpacing: '0.05em',
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const DrawerFooter = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <DrawerContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Image src="/rslogo.svg" height={150} width={150} alt="Logo" />
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'white' }} />
      <List>
        <ListItem button component={Link} href="//#about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button component={Link} href="/All">
          <ListItemText primary="All Games" />
        </ListItem>
        <ListItem button component={Link} href="#visit">
          <ListItemText primary="Visit" />
        </ListItem>
      </List>
      <DrawerFooter>
        <Typography variant="body2">© Rockstar Games</Typography>
      </DrawerFooter>
    </DrawerContent>
  );

  return (
    <HeaderBar position="static">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <IconButton>
              <Image src="/rslogo.svg" height={150} width={150} alt="Logo" />
            </IconButton>
          </Link>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <HeaderLink href="//#about">About</HeaderLink>
            <HeaderLink href="/All">All Games</HeaderLink>
            <HeaderLink href="https://www.rockstargames.com/" target="_blank">Visit</HeaderLink>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </HeaderBar>
  );
};

export default Header;