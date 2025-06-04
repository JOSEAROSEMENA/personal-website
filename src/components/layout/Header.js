import React from 'react';
import { Box, Typography, Link, Stack, Container } from '@mui/material';

const Header = () => {
  return (
    <Box 
      component="header" 
      sx={{ 
        textAlign: 'center', 
        py: 6,
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        boxShadow: 3,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'secondary.main',
        }
      }}
    >
      <Container maxWidth="md">
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        >
          Jose Arosemena
        </Typography>
        <Typography 
          variant="h6" 
          component="p" 
          gutterBottom
          sx={{
            color: 'primary.contrastText',
            mb: 4
          }}
        >
          Full Stack DevOps Engineer
        </Typography>
        <nav>
          <Stack 
            direction="row" 
            spacing={4} 
            justifyContent="center"
            sx={{ 
              mt: 2,
              '& .MuiLink-root': {
                transition: 'color 0.2s',
                '&:hover': {
                  color: 'secondary.main'
                }
              }
            }}
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
      </Container>
    </Box>
  );
};

export default Header;