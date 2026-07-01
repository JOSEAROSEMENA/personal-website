import React, { useState } from 'react';
import { Box, Typography, Link, Stack, Button } from '@mui/material';

const styles = {
  sidebar: {
    position: 'sticky',
    top: 0,
    alignSelf: 'flex-start',
    height: { xs: 'auto', md: '100vh' },
    width: { xs: '100%', md: 'auto' },
    padding: { xs: '1.25rem 1.5rem', md: '2.25rem 1.75rem' },
    borderRight: { xs: 'none', md: '1px solid var(--edge)' },
    borderBottom: { xs: '1px solid var(--edge)', md: 'none' },
    background: 'rgba(8, 11, 15, 0.78)',
    backdropFilter: 'blur(18px)',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'column' },
    gap: { xs: 2.5, md: 5 },
    minWidth: { md: 260 },
  },
  navLink: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    p: '0.35rem 0',
    minHeight: 44,
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.95rem',
    fontWeight: 600,
    transition: 'color 180ms ease',
    position: 'relative',
    color: 'var(--ink-muted)',
    textDecoration: 'none',
    textAlign: 'left',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 6,
      left: 0,
      width: '0%',
      height: '1px',
      background: 'var(--teal)',
      transition: 'width 180ms ease',
    },
    '&:focus-visible': {
      outline: '2px solid var(--teal)',
      outlineOffset: 4,
      borderRadius: 1,
    },
    '&:hover': {
      color: 'var(--ink)',
      '&::after': {
        width: '100%',
      },
    },
  },
  navLinkActive: {
    color: 'var(--ink)',
    '&::after': {
      width: '100%',
    },
  },
};

const NavLink = ({ section, currentSection, onNavigate }) => (
  <Link
    component="button"
    onClick={(event) => {
      event.preventDefault();
      if (typeof onNavigate === 'function') {
        onNavigate(section);
      }
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
      <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 2, md: 2 }} flexWrap="wrap" useFlexGap>
        {sections.map((section) => (
          <NavLink
            key={section}
            section={section}
            currentSection={currentSection}
            onNavigate={onNavigate}
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
            letterSpacing: '0.24em',
            color: 'var(--teal)',
            fontSize: '0.7rem',
          }}
        >
          Systems portfolio
        </Typography>
        <Typography variant="h5" sx={{ color: 'var(--ink)', mt: 1, mb: 0.5 }}>
          Jose Arosemena
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--ink-muted)' }}>
          Full Stack DevOps Engineer
        </Typography>
      </Box>

      <Navigation currentSection={currentSection} onNavigate={handleNavigation} />

      <Box sx={{ mt: { xs: 0, md: 'auto' } }}>
        <Button
          variant="contained"
          onClick={() => handleNavigation('contact')}
          sx={{ width: { xs: 'auto', md: '100%' } }}
        >
          Let&#39;s talk
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
