import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, Stack, Chip, Divider } from '@mui/material';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const About = () => {
  const skills = [
    'React', 'Node.js', 'Docker', 'Kubernetes', 'AWS', 
    'DevOps', 'Full Stack', 'Python', 'JavaScript', 'CI/CD'
  ];

  const highlights = [
    {
      icon: <FaCode size={32} />,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies'
    },
    {
      icon: <FaServer size={32} />,
      title: 'DevOps & Infrastructure',
      description: 'Designing and maintaining cloud infrastructure and deployment pipelines'
    },
    {
      icon: <FaTools size={32} />,
      title: 'Problem Solving',
      description: 'Creating elegant solutions to complex technical challenges'
    },
  ];

  return (
    <section id="about">
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h2" 
              component="h2"
              sx={{
                color: 'var(--ink)',
                mb: 2,
              }}
            >
              About
            </Typography>
            <Typography 
              variant="body1" 
              sx={{
                fontSize: '1.1rem',
                color: 'var(--ink-muted)',
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              I&#39;m a Full Stack DevOps Engineer who bridges product polish with infrastructure depth. I build systems that survive scale, keep teams shipping, and leave a clean, predictable interface for users.
            </Typography>
            <Divider sx={{ borderColor: 'rgba(15, 18, 23, 0.1)', mb: 3 }} />
            <Typography
              variant="overline"
              sx={{
                letterSpacing: '0.28em',
                color: 'var(--ink-muted)',
                fontSize: '0.7rem',
              }}
            >
              Core toolkit
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    background: '#f0e1d0',
                    color: 'var(--ink)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    border: '1px solid rgba(15, 18, 23, 0.12)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(16, 20, 28, 0.12)',
                    },
                  }}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  sx={{
                    background: 'rgba(251, 246, 239, 0.9)',
                    border: '1px solid rgba(15, 18, 23, 0.08)',
                  }}
                >
                  <CardContent sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                    <Box sx={{ color: 'var(--teal)', mt: 0.5 }}>
                      {highlight.icon}
                    </Box>
                    <Box>
                      <Typography 
                        variant="h5" 
                        sx={{ mb: 1, fontWeight: 600, color: 'var(--ink)' }}
                      >
                        {highlight.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ color: 'var(--ink-muted)' }}
                      >
                        {highlight.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About; 
