import React from 'react';
import { Typography, Box, Button, Container, Grid, Stack, Chip, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  const skills = [
    'Python', 'SQL', 'Boto3', 'AWS CLI', 'AWS CloudFormation', 'AWS Lambda', 'CI/CD',
    'Git (GitLab/GitHub)', 'Azure', 'GCP', 'Serverless Architecture', 'Cloud Automation',
    'AWS VPC', 'Splunk',
  ];

  const handleSkillChipClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const roles = [
    {
      title: 'DevOps Engineer',
      company: 'Asurion',
      location: 'Nashville, TN',
      dates: 'September 2022 - November 2024',
      bullets: [
        'Built and maintained serverless apps with Python, SAM, DynamoDB, Lambda, and API Gateway to automate critical workflows.',
        'Developed an event-driven infrastructure monitoring and incident management pipeline integrating AWS EventBridge, Lambda, BigPanda, ServiceNow, and internal databases to improve operational visibility, automate alerting workflows, and accelerate incident response across enterprise AWS environments',
        'Automated AWS resource cleanup workflows using Python and Boto3 to identify and remove idle infrastructure, reducing unnecessary cloud spend and improving operational efficiency',
        'Enforced logging standards across 200+ AWS accounts using Python, Lambda, and S3 integrations, improving compliance and deployment consistency',
        'Implemented GitLab-to-GitHub repository mirroring using GitLab and GitHub APIs, improving repository redundancy and CI/CD resiliency'
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Asurion',
      location: 'Nashville, TN',
      dates: 'May 2022 - August 2022',
      bullets: [
        'Built proof-of-concept automation in BigPanda using GitHub Actions and Python.',
        'Retagged enterprise servers with PowerShell to improve inventory accuracy.',
      ],
    },
    {
      title: 'Android Tech Fellow',
      company: 'CodePath',
      location: 'Miami, FL',
      dates: 'January 2022 - May 2022',
      bullets: [
        'Mentored students in Android labs and assignments while coordinating hybrid course operations.',
      ],
    },
  ];

  return (
    <section id="resume">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="start">
          <Grid item xs={12} md={4}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 32 } }}>
              <Typography variant="h2" component="h2" sx={{ color: 'var(--ink)', mb: 2 }}>
                Resume
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--ink-muted)', mb: 3 }}>
                Recent roles, measurable impact, and the cloud systems behind the work.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ border: '1px solid var(--edge)', background: 'var(--surface)', p: { xs: 3, md: 4 } }}>
              <Typography variant="overline" sx={{ letterSpacing: '0.24em', color: 'var(--teal)' }}>
                Snapshot
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--ink-muted)', mt: 1, mb: 3, maxWidth: 760 }}>
                DevOps Engineer focused on automating and optimizing cloud-native systems in AWS. Experienced in serverless architecture, CI/CD, and reliability initiatives that reduce cost and improve response times.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
                <Button variant="contained" color="primary" startIcon={<DownloadIcon />} href="/resume.pdf" download size="large">
                  Download resume
                </Button>
                <Button variant="outlined" color="primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer" size="large">
                  Open PDF
                </Button>
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    component="span"
                    label={skill}
                    size="small"
                    clickable={false}
                    onClick={handleSkillChipClick}
                    sx={{
                      background: 'rgba(82, 215, 232, 0.08)',
                      color: 'var(--ink)',
                      fontWeight: 600,
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

              <Divider sx={{ borderColor: 'var(--edge)', mb: 4 }} />

              <Typography variant="overline" sx={{ letterSpacing: '0.24em', color: 'var(--ink-muted)' }}>
                Experience
              </Typography>
              <Stack spacing={0} sx={{ mt: 2 }}>
                {roles.map((role, index) => (
                  <Box
                    key={`${role.company}-${role.title}`}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: '190px minmax(0, 1fr)' },
                      gap: { xs: 1, md: 4 },
                      py: 3,
                      borderTop: index === 0 ? 'none' : '1px solid var(--edge)',
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ color: 'var(--rust)', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.78rem' }}
                      >
                        {role.dates}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'var(--ink-faint)', mt: 0.5 }}>
                        {role.location}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'var(--ink)' }}>
                        {role.company} / {role.title}
                      </Typography>
                      <Stack component="ul" sx={{ pl: 2.25, color: 'var(--ink-muted)', m: 0, mt: 1 }} spacing={1}>
                        {role.bullets.map((bullet) => (
                          <Typography component="li" variant="body2" key={bullet}>
                            {bullet}
                          </Typography>
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ borderColor: 'var(--edge)', my: 4 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="overline" sx={{ letterSpacing: '0.24em', color: 'var(--ink-muted)' }}>
                    Certifications
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink)', mt: 1 }}>
                    AWS Certified Solutions Architect (Associate)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)' }}>
                    AWS Certified Cloud Practitioner
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="overline" sx={{ letterSpacing: '0.24em', color: 'var(--ink-muted)' }}>
                    Education
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink)', mt: 1 }}>
                    B.S. in Computer Science
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)' }}>
                    Florida International University / May 2019 - May 2022
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Resume;
