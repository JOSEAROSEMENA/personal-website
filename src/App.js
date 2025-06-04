import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import theme from './theme';
import Header from './components/layout/Header';

function App() {
  const email = 'josearosemena2@gmail.com';
  const [copyTooltip, setCopyTooltip] = useState('Copy email address');
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(email);
    setCopyTooltip('Copied!');
    setTimeout(() => setCopyTooltip('Copy email address'), 2000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />
        <main>
          <section id="about">
            <h2>About Me</h2>
            <p>Welcome to my personal website. I'm a software engineer passionate about building web applications.</p>
          </section>
          <section id="projects">
            <h2>My Projects</h2>
            <p>Here are some projects I've worked on...</p>
          </section>
          <section id="contact">
            <h2>Contact Me</h2>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
              <Link 
                href={`mailto:${email}`}
                sx={{ 
                  fontSize: '1.1rem',
                  color: '#0000EE',
                  '&:hover': {
                    color: '#0000EE',
                    opacity: 0.8
                  }
                }}
              >
                {email}
              </Link>
              <Tooltip title={copyTooltip}>
                <IconButton 
                  onClick={handleCopyClick}
                  size="small"
                  sx={{ 
                    color: '#0000EE',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 238, 0.04)'
                    }
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </section>
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Jose Arosemena. All rights reserved.</p>
        </footer>
      </Box>
    </ThemeProvider>
  );
}

export default App;