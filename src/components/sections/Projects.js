import React from 'react';
import { Box, Container, Typography, Button, Stack, Chip, Divider } from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React and Node.js for managing and tracking projects efficiently.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      github: '#',
      live: '#',
    },
    {
      title: 'Project Two',
      description: 'Cloud infrastructure automation tool that simplifies deployment and scaling using Kubernetes and Terraform.',
      technologies: ['Kubernetes', 'Terraform', 'AWS', 'Python'],
      github: '#',
      live: '#',
    },
    {
      title: 'Project Three',
      description: 'Real-time data visualization platform with interactive dashboards and analytics built with modern web technologies.',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects">
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
            Selected work
          </Typography>
          <Typography 
            variant="body1" 
            sx={{
              fontSize: '1.05rem',
              color: 'var(--ink-muted)',
            }}
          >
            A few projects where infrastructure, product craft, and performance meet.
          </Typography>
        </Box>

        <Stack spacing={3}>
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                border: '1px solid rgba(15, 18, 23, 0.1)',
                background: 'rgba(251, 246, 239, 0.9)',
                boxShadow: '0 16px 40px rgba(16, 20, 28, 0.08)',
              }}
            >
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="flex-start">
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: '0.3em',
                      color: 'var(--ink-muted)',
                      fontSize: '0.7rem',
                    }}
                  >
                    Project {index + 1}
                  </Typography>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 1.5, 
                      fontWeight: 600,
                      color: 'var(--ink)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'var(--ink-muted)',
                      mb: 2.5,
                      lineHeight: 1.8,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          background: '#f0e1d0',
                          color: 'var(--ink)',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          border: '1px solid rgba(15, 18, 23, 0.12)',
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, borderColor: 'rgba(15, 18, 23, 0.08)' }} />
                <Stack spacing={1.5} sx={{ minWidth: { md: 180 } }}>
                  <Button
                    size="small"
                    startIcon={<FaGithub />}
                    variant="outlined"
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'var(--ink)',
                      borderColor: 'rgba(15, 18, 23, 0.2)',
                      '&:hover': {
                        borderColor: 'var(--ink)',
                        backgroundColor: 'rgba(15, 18, 23, 0.04)',
                      },
                    }}
                  >
                    View code
                  </Button>
                  <Button
                    size="small"
                    startIcon={<FaExternalLinkAlt />}
                    variant="contained"
                    component="a"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      background: 'linear-gradient(135deg, #1f7a8c 0%, #155e6c 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #2a8da2 0%, #1f7a8c 100%)',
                      },
                    }}
                  >
                    Live demo
                  </Button>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Projects; 
