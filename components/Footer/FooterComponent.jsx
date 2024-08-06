import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" align="center">
          {'© '}
          <Link  href="https://www.rockstargames.com/" target="_blank">
            Halilhan SAYIN
          </Link>
          {' '}{new Date().getFullYear()}
        </Typography>
        <Box>
          <Link color="inherit" href="https://github.com/" target="_blank" sx={{ marginRight: 1 }} > 
            <GitHubIcon />
          </Link>
          <Link color="inherit" href="https://www.linkedin.com/" target="_blank">
            <LinkedInIcon />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;