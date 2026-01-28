import React, { useState } from 'react';
import { Box, Typography, Link, Stack, Button } from '@mui/material';

const styles = {
  sidebar: {
    position: 'sticky',
    top: 0,
    alignSelf: 'flex-start',
    height: '100vh',
    padding: '2.5rem 2rem',
    borderRight: '1px solid rgba(15, 18, 23, 0.08)',
    background: 'rgba(246, 239, 230, 0.9)',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    minWidth: 240,
  },
  navLink: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    p: 0,
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    position: 'relative',
    color: 'rgba(15, 18, 23, 0.7)',
    textDecoration: 'none',
    textAlign: 'left',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -6,
      left: 0,
      width: '0%',
      height: '2px',
      background: 'linear-gradient(90deg, #1f7a8c, #c86a3f)',
      transition: 'width 0.3s ease',
    },
    '&:hover': {
      color: '#0f1217',
      '&::after': {
        width: '100%',
      },
    },
  },
  navLinkActive: {
    color: '#0f1217',
    '&::after': {
      width: '100%',
    },
  },
};

const NavLink = ({ section, currentSection, onClick }) => (
  <Link
    component="button"
    onClick={(event) => {
      event.preventDefault();
      onClick(section);
    }}
    sx={{
      ...styles.navLink,
      ...(currentSection === section && styles.navLinkActive),
    }}
  >
    {section.charAt(0).toUpperCase() + section.slice(1)}
  </Link>
);

const Navigation = ({ currentSection, onNavigate }) => {
  const sections = ['about', 'projects', 'resume', 'contact'];

  return (
    <nav>
      <Stack spacing={2}>
        {sections.map((section) => (
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

const Header = () => {
  const [currentSection, setCurrentSection] = useState('about');

  const handleNavigation = (section) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCurrentSection(section);
  };

  return (
    <Box component="aside" sx={styles.sidebar}>
      <Box>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: '0.3em',
            color: 'rgba(15, 18, 23, 0.6)',
            fontSize: '0.7rem',
          }}
        >
          Portfolio
        </Typography>
        <Typography variant="h5" sx={{ color: '#0f1217', mt: 1, mb: 0.5 }}>
          Jose Arosemena
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(15, 18, 23, 0.65)' }}>
          Full Stack DevOps Engineer
        </Typography>
      </Box>

      <Navigation currentSection={currentSection} onNavigate={handleNavigation} />

      <Box sx={{ mt: 'auto' }}>
        <Button
          variant="contained"
          onClick={() => handleNavigation('contact')}
          sx={{ width: '100%' }}
        >
          Let&#39;s talk
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
