import React, { useState } from 'react';
import { Typography, Box, Link, IconButton, Tooltip, Container, Stack, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const email = 'josearosemena2@gmail.com';
  const [copyTooltip, setCopyTooltip] = useState('Copy email address');

  const handleCopyClick = () => {
    navigator.clipboard.writeText(email);
    setCopyTooltip('Copied');
    setTimeout(() => setCopyTooltip('Copy email address'), 2000);
  };

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/JOSEAROSEMENA' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-arosemena/' },
  ];

  return (
    <section id="contact">
      <Container maxWidth="lg">
        <Box sx={{ mb: 5, maxWidth: 760 }}>
          <Typography variant="h2" component="h2" sx={{ color: 'var(--ink)', mb: 2 }}>
            Contact
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'var(--ink-muted)', mb: 3 }}>
            Let&#39;s talk about systems, product, or how to make teams ship faster.
          </Typography>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid var(--edge)',
            borderBottom: '1px solid var(--edge)',
            py: { xs: 3, md: 4 },
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems={{ xs: 'flex-start', md: 'center' }}
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="overline" sx={{ letterSpacing: '0.24em', color: 'var(--teal)', fontSize: '0.7rem' }}>
                Direct line
              </Typography>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 1, flexWrap: 'wrap' }}>
                <FaEnvelope size={22} style={{ color: 'var(--teal)' }} />
                <Link
                  href={`mailto:${email}`}
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                    fontWeight: 600,
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    '&:hover': { color: 'var(--teal)', textDecoration: 'underline' },
                  }}
                >
                  {email}
                </Link>
                <Tooltip title={copyTooltip}>
                  <IconButton
                    onClick={handleCopyClick}
                    aria-label="Copy email address"
                    size="small"
                    sx={{
                      color: 'var(--teal)',
                      minWidth: 44,
                      minHeight: 44,
                      '&:hover': { backgroundColor: 'rgba(82, 215, 232, 0.1)' },
                    }}
                  >
                    <ContentCopyIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
            <Button variant="contained" href={`mailto:${email}`} sx={{ minWidth: 180 }}>
              Start a project
            </Button>
          </Stack>
        </Box>

        <Stack direction="row" spacing={1.5} justifyContent="flex-start" sx={{ flexWrap: 'wrap', gap: 1.5, mt: 4 }}>
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
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 1,
                    color: 'var(--ink)',
                    background: 'rgba(242, 246, 248, 0.04)',
                    border: '1px solid var(--edge)',
                    transition: 'border-color 180ms ease, color 180ms ease, background-color 180ms ease',
                    '&:hover': {
                      color: 'var(--teal)',
                      background: 'rgba(82, 215, 232, 0.08)',
                      borderColor: 'var(--edge-strong)',
                    },
                  }}
                >
                  <Icon size={25} />
                </IconButton>
              </Tooltip>
            );
          })}
        </Stack>
      </Container>
    </section>
  );
};

export default Contact;
