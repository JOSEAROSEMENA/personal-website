import React, { useState } from 'react';
import { Typography, Box, Link, IconButton, Tooltip, Container, Stack, Card, CardContent, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const email = 'josearosemena2@gmail.com';
  const [copyTooltip, setCopyTooltip] = useState('Copy email address');
  
  // Copies the email to the clipboard and shows a short-lived confirmation.
  const handleCopyClick = () => {
    navigator.clipboard.writeText(email);
    setCopyTooltip('Copied!');
    setTimeout(() => setCopyTooltip('Copy email address'), 2000);
  };

  // Social button config used to render icons/links consistently.
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/JOSEAROSEMENA', color: '#0f1217' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-arosemena/', color: '#0a66c2' },
  ];

  return (
    <section id="contact">
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography 
            variant="h2" 
            component="h2"
            sx={{
              color: 'var(--ink)',
              mb: 2,
            }}
          >
            Contact
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              color: 'var(--ink-muted)',
              mb: 3,
            }}
          >
            Let&#39;s talk about systems, product, or how to make teams ship faster.
          </Typography>
        </Box>

        <Card
          sx={{
            mb: 4,
            background: 'rgba(251, 246, 239, 0.9)',
            border: '1px solid rgba(15, 18, 23, 0.12)',
          }}
        >
          <CardContent sx={{ py: 4 }}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between">
              <Box>
                <Typography variant="overline" sx={{ letterSpacing: '0.3em', color: 'var(--ink-muted)', fontSize: '0.7rem' }}>
                  Direct line
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 1 }}>
                  <FaEnvelope size={24} style={{ color: 'var(--teal)' }} />
                  <Link 
                    href={`mailto:${email}`}
                    sx={{ 
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'var(--teal)',
                        textDecoration: 'underline',
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
                        color: 'var(--teal)',
                        '&:hover': {
                          backgroundColor: 'rgba(31, 122, 140, 0.12)',
                        }
                      }}
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
              <Button
                variant="contained"
                href={`mailto:${email}`}
                sx={{ minWidth: 180 }}
              >
                Start a project
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Box>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 2, 
              fontWeight: 600,
              color: 'var(--ink)',
            }}
          >
            Find me elsewhere
          </Typography>
          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="flex-start"
            sx={{ flexWrap: 'wrap', gap: 2 }}
          >
            {/* Map config into clickable icon buttons */}
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Tooltip key={social.label} title={social.label}>
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    onClick={(event) => {
                      event.preventDefault();
                      window.open(social.url, '_blank', 'noopener,noreferrer');
                    }}
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      background: '#f0e1d0',
                      border: '1px solid rgba(15, 18, 23, 0.12)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1f7a8c 0%, #155e6c 100%)',
                        border: '1px solid #1f7a8c',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 20px rgba(16, 20, 28, 0.18)',
                        '& svg': {
                          color: '#FFFFFF',
                        },
                      },
                    }}
                  >
                    <Icon size={28} style={{ color: social.color }} />
                  </IconButton>
                </Tooltip>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </section>
  );
};

export default Contact;
