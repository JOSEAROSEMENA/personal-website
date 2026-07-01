import React from 'react';
import { Box, Button, Container, Typography, Stack, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  const handleSkillChipClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const projects = [
    {
      title: 'AWS Terraform CI/CD Pipeline',
      repoUrl: 'https://github.com/JOSEAROSEMENA/aws-terraform-github-cicd',
      description: 'Terraform-powered AWS networking baseline that deploys a multi-AZ VPC, public/private subnets, route tables, VPC Flow Logs IAM roles, and CI/CD automation through GitHub Actions.',
      technologies: ['AWS', 'Terraform', 'GitHub Actions'],
    },
    {
      title: 'Personal Website',
      repoUrl: 'https://github.com/JOSEAROSEMENA/personal-website',
      description: 'A responsive personal website built with React and Material-UI. Deployed on AWS S3 and CloudFront with CI/CD automation through GitHub Actions.',
      technologies: ['React', 'Material-UI', 'JavaScript'],
    },
    {
      title: 'Coming Soon',
      repoUrl: '',
      description: 'Project is currently under developement.',
      technologies: ['Under', 'Development'],
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
                <Button
                  component={project.repoUrl ? 'a' : 'button'}
                  href={project.repoUrl || undefined}
                  target={project.repoUrl ? '_blank' : undefined}
                  rel={project.repoUrl ? 'noopener noreferrer' : undefined}
                  disabled={!project.repoUrl}
                  startIcon={<GitHubIcon fontSize="small" />}
                  variant="outlined"
                  sx={{
                    justifyContent: 'flex-start',
                    color: 'var(--rust)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.78rem',
                    borderColor: 'rgba(195, 108, 72, 0.45)',
                    borderRadius: 1,
                    mb: 1.5,
                    minHeight: 44,
                    px: 1.5,
                    textTransform: 'none',
                    width: '100%',
                    '&:hover': {
                      borderColor: 'var(--rust)',
                      backgroundColor: 'rgba(195, 108, 72, 0.08)',
                    },
                    '&.Mui-disabled': {
                      borderColor: 'var(--edge)',
                      color: 'var(--ink-muted)',
                      opacity: 0.7,
                    },
                  }}
                >
                  {project.repoUrl ? 'View GitHub repo' : 'Repo pending'}
                </Button>
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
