import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';

const Header = () => {
  return (
    <Box 
      component="header" 
      sx={{ 
        textAlign: 'center', 
        py: 4, 
        backgroundColor: 'primary.main', 
        color: 'primary.contrastText' 
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Jose Arosemena
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Software Engineer
      </Typography>
      <nav>
        <Stack 
          direction="row" 
          spacing={4} 
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Link href="#about" color="inherit" underline="hover">
            About
          </Link>
          <Link href="#projects" color="inherit" underline="hover">
            Projects
          </Link>
          <Link href="#contact" color="inherit" underline="hover">
            Contact
          </Link>
        </Stack>
      </nav>
    </Box>
  );
};

export default Header;