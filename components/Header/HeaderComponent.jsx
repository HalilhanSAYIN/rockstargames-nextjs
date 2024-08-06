"use client"
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const HeaderBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.footerColor,
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
    <List>
      <ListItem href="#about">
        <ListItemText primary="About" />
      </ListItem>
      <ListItem href="#allgames">
        <ListItemText primary="All Games" />
      </ListItem>
      <ListItem href="#steam">
        <ListItemText primary="Steam" />
      </ListItem>
    </List>
  );

  return (
    <HeaderBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Image
            src={"/rslogo.svg"}
            height={150}
            width={150}
          />
          <div sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link  href="#about" >
              About
            </Link>
            <Link href="/All" >
              All Games
            </Link>
            <Link href="#steam">
              Steam
            </Link>
          </div>
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