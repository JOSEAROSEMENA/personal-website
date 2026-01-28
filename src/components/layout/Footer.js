import React from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #10151c 0%, #0b0f14 100%)',
        color: '#f6efe6',
        py: 4,
        mt: 'auto',
        borderTop: '1px solid rgba(246, 239, 230, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(246, 239, 230, 0.75)',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              Made with <FaHeart size={14} color="#c86a3f" /> by Jose Arosemena © {currentYear}
            </Typography>
          </Box>
          
          <Stack direction="row" spacing={2}>
            <Link
              href="#"
              sx={{
                color: 'rgba(246, 239, 230, 0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#f6efe6',
                },
              }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(246, 239, 230, 0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#f6efe6',
                },
              }}
            >
              Terms
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
