import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(8, 11, 15, 0.92)',
        color: 'var(--ink)',
        py: 4,
        mt: 'auto',
        borderTop: '1px solid var(--edge)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={1}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Typography variant="body2" sx={{ color: 'var(--ink-muted)' }}>
            Jose Arosemena © {currentYear}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'var(--ink-faint)',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.78rem',
            }}
          >
            full stack devops engineer / cloud automation
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
