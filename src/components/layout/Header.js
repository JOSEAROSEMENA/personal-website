import React from 'react';
import { Box, Typography, Link, Stack, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const styles = {
  header: {
    textAlign: 'center',
    py: 8,
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
  },
  title: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    color: 'primary.contrastText',
    mb: 4
  },
  navContainer: {
    mt: 2,
    '& .MuiLink-root': {
      transition: 'color 0.2s',
      '&:hover': {
        color: 'secondary.main'
      }
    }
  },
  navLink: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    p: 0
  }
};

// Navigation Link Component
const NavLink = ({ section, currentSection, onClick }) => (
  <Link 
    component="button"
    onClick={() => onClick(section)}
    color="inherit" 
    underline="hover"
    sx={{ 
      ...styles.navLink,
      color: currentSection === section ? 'secondary.main' : 'inherit',
    }}
  >
    {section.charAt(0).toUpperCase() + section.slice(1)}
  </Link>
);

// Navigation Component
const Navigation = ({ currentSection, onNavigate }) => {
  const sections = ['about', 'resume', 'projects', 'contact'];
  
  return (
    <nav>
      <Stack 
        direction="row" 
        spacing={4} 
        justifyContent="center"
        sx={styles.navContainer}
      >
        {sections.map(section => (
          <NavLink
            key={section}
            section={section}
            currentSection={currentSection}
            onClick={onNavigate}
          />
        ))}
      </Stack>
    </nav>
  );
};

// Main Header Component
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentSection = location.pathname.split('/')[1] || 'about';

  const handleNavigation = (section) => {
    navigate(`/${section}`);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box component="header" sx={styles.header}>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={styles.title}
        >
          Jose Arosemena
        </Typography>
        <Typography 
          variant="h5" 
          component="p" 
          gutterBottom
          sx={styles.subtitle}
        >
          Full Stack DevOps Engineer
        </Typography>
        <Navigation 
          currentSection={currentSection}
          onNavigate={handleNavigation}
        />
      </Container>
    </Box>
  );
};

export default Header;