import React from 'react';
import { Box, Typography, Link, Stack, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    navigate(`/${section}`);
    // Smooth scroll to the section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get the current section from the hash URL
  const currentSection = location.pathname.split('/')[1] || 'about';

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
            <Link 
              component="button"
              onClick={() => handleNavigation('about')}
              color="inherit" 
              underline="hover"
              sx={{ 
                color: currentSection === 'about' ? 'secondary.main' : 'inherit',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                p: 0
              }}
            >
              About
            </Link>
            <Link 
              component="button"
              onClick={() => handleNavigation('resume')}
              color="inherit" 
              underline="hover"
              sx={{ 
                color: currentSection === 'resume' ? 'secondary.main' : 'inherit',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                p: 0
              }}
            >
              Resume
            </Link>
            <Link 
              component="button"
              onClick={() => handleNavigation('projects')}
              color="inherit" 
              underline="hover"
              sx={{ 
                color: currentSection === 'projects' ? 'secondary.main' : 'inherit',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                p: 0
              }}
            >
              Projects
            </Link>
            <Link 
              component="button"
              onClick={() => handleNavigation('contact')}
              color="inherit" 
              underline="hover"
              sx={{ 
                color: currentSection === 'contact' ? 'secondary.main' : 'inherit',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                p: 0
              }}
            >
              Contact
            </Link>
          </Stack>
        </nav>
      </Container>
    </Box>
  );
};

export default Header;