import React from 'react';
import { Box, Container, Typography, Stack, Chip } from '@mui/material';

const Projects = () => {
  const handleSkillChipClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const projects = [
    {
      title: 'Cloud Cost Automation',
      status: 'Case study pending',
      description: 'Automation patterns for detecting and removing idle AWS resources while keeping remediation auditable.',
      technologies: ['AWS', 'Python', 'Boto3', 'Lambda'],
    },
    {
      title: 'Incident Signal Routing',
      status: 'Case study pending',
      description: 'Health alert centralization across cloud accounts with routing into operational response systems.',
      technologies: ['AWS Health', 'BigPanda', 'ServiceNow', 'Serverless'],
    },
    {
      title: 'Logging Standards Enforcement',
      status: 'Case study pending',
      description: 'Regional logging controls designed to improve consistency across a large multi-account AWS environment.',
      technologies: ['Lambda', 'S3', 'CloudWatch', 'Governance'],
    },
  ];

  return (
    <section id="projects">
      <Container maxWidth="lg">
        <Box sx={{ mb: 5, maxWidth: 760 }}>
          <Typography variant="h2" component="h2" sx={{ color: 'var(--ink)', mb: 2 }}>
            Selected Projects
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.05rem', color: 'var(--ink-muted)' }}>
            Representative work across automation, reliability, and cloud operations. Public case-study links will be added when details can be shared cleanly.
          </Typography>
        </Box>

        <Stack spacing={0} sx={{ borderTop: '1px solid var(--edge)' }}>
          {projects.map((project, index) => (
            <Box
              key={project.title}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '160px minmax(0, 1fr) 220px' },
                gap: { xs: 2, md: 4 },
                py: { xs: 3, md: 4 },
                borderBottom: '1px solid var(--edge)',
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{ letterSpacing: '0.2em', color: 'var(--teal)', fontSize: '0.68rem' }}
                >
                  0{index + 1}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: 'var(--ink)' }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--ink-muted)', lineHeight: 1.8, maxWidth: 680 }}>
                  {project.description}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'var(--rust)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.78rem',
                    mb: 1.5,
                  }}
                >
                  {project.status}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      component="span"
                      label={tech}
                      size="small"
                      clickable={false}
                      onClick={handleSkillChipClick}
                      sx={{
                        background: 'rgba(242, 246, 248, 0.05)',
                        color: 'var(--ink-muted)',
                        border: '1px solid var(--edge)',
                        borderRadius: 1,
                        cursor: 'default',
                        userSelect: 'none',
                        '& .MuiChip-label': {
                          whiteSpace: 'normal',
                        },
                        '&:focus, &:focus-visible, &:active': {
                          outline: 'none',
                          boxShadow: 'none',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default Projects;
