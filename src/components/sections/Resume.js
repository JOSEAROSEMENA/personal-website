import React from 'react';
import { Typography, Box, Button, Container, Grid, Stack, Chip, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  return (
    <section id="resume">
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="start">
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h2" 
              component="h2"
              sx={{
                color: 'var(--ink)',
                mb: 2,
              }}
            >
              Resume
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'var(--ink-muted)', mb: 3 }}
            >
              A concise look at recent roles, impact, and the systems I&#39;ve built.
            </Typography>
            <Stack spacing={2}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                href="/resume.pdf"
                download
                size="large"
              >
                Download resume
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{
                  borderColor: 'rgba(15, 18, 23, 0.2)',
                  color: 'var(--ink)',
                  '&:hover': {
                    borderColor: 'var(--ink)',
                    backgroundColor: 'rgba(15, 18, 23, 0.04)',
                  },
                }}
              >
                Open PDF
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                border: '1px solid rgba(15, 18, 23, 0.12)',
                borderRadius: 4,
                background: '#fffaf3',
                boxShadow: '0 16px 40px rgba(16, 20, 28, 0.08)',
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography variant="h5" sx={{ color: 'var(--ink)', mb: 2 }}>
                Snapshot
              </Typography>
              <Typography variant="body1" sx={{ color: 'var(--ink-muted)', mb: 3 }}>
                DevOps Engineer focused on automating and optimizing cloud-native systems across AWS, Azure, and GCP. Experienced in serverless architecture, CI/CD, and reliability initiatives that reduce cost and improve response times.
              </Typography>

              <Divider sx={{ borderColor: 'rgba(15, 18, 23, 0.08)', mb: 3 }} />

              <Typography variant="overline" sx={{ letterSpacing: '0.3em', color: 'var(--ink-muted)' }}>
                Key skills
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1, mb: 3 }}>
                {[
                  'Python',
                  'SQL',
                  'Boto3',
                  'AWS CLI',
                  'AWS CloudFormation',
                  'AWS Lambda',
                  'CI/CD',
                  'Git (GitLab/GitHub)',
                  'Azure',
                  'GCP',
                  'Serverless Architecture',
                  'Cloud Automation',
                  'AWS VPC',
                  'Splunk',
                ].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      background: '#f0e1d0',
                      color: 'var(--ink)',
                      fontWeight: 600,
                      border: '1px solid rgba(15, 18, 23, 0.12)',
                    }}
                  />
                ))}
              </Stack>

              <Divider sx={{ borderColor: 'rgba(15, 18, 23, 0.08)', mb: 3 }} />

              <Typography variant="overline" sx={{ letterSpacing: '0.3em', color: 'var(--ink-muted)' }}>
                Experience highlights
              </Typography>
              <Stack spacing={2} sx={{ mt: 2, mb: 3 }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'var(--ink)' }}>
                    Asurion — DevOps Engineer
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)', mb: 1 }}>
                    Nashville, TN · September 2022 — November 2024
                  </Typography>
                  <Stack component="ul" sx={{ pl: 3, color: 'var(--ink-muted)', m: 0 }} spacing={1}>
                    <Typography component="li" variant="body2">
                      Built and maintained serverless apps with Python, SAM, DynamoDB, Lambda, and API Gateway to automate critical workflows.
                    </Typography>
                    <Typography component="li" variant="body2">
                      Automated removal of idle AWS resources, cutting related costs by 100%.
                    </Typography>
                    <Typography component="li" variant="body2">
                      Centralized AWS Health Alerts into BigPanda and ServiceNow for faster incident response.
                    </Typography>
                    <Typography component="li" variant="body2">
                      Enforced logging standards across 200+ AWS accounts with Lambda and regional S3 storage.
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'var(--ink)' }}>
                    Asurion — Software Engineer Intern
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)', mb: 1 }}>
                    Nashville, TN · May 2022 — August 2022
                  </Typography>
                  <Stack component="ul" sx={{ pl: 3, color: 'var(--ink-muted)', m: 0 }} spacing={1}>
                    <Typography component="li" variant="body2">
                      Built proof-of-concept automation in BigPanda using GitHub Actions and Python.
                    </Typography>
                    <Typography component="li" variant="body2">
                      Retagged enterprise servers with PowerShell to improve inventory accuracy.
                    </Typography>
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'var(--ink)' }}>
                    CodePath — Android Tech Fellow
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)', mb: 1 }}>
                    Miami, FL · January 2022 — May 2022
                  </Typography>
                  <Stack component="ul" sx={{ pl: 3, color: 'var(--ink-muted)', m: 0 }} spacing={1}>
                    <Typography component="li" variant="body2">
                      Mentored students in Android labs and assignments while coordinating hybrid course operations.
                    </Typography>
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ borderColor: 'rgba(15, 18, 23, 0.08)', mb: 3 }} />

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="overline" sx={{ letterSpacing: '0.3em', color: 'var(--ink-muted)' }}>
                    Certifications
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)', mt: 1 }}>
                    AWS Certified Solutions Architect (Associate)
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)' }}>
                    AWS Certified Cloud Practitioner
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="overline" sx={{ letterSpacing: '0.3em', color: 'var(--ink-muted)' }}>
                    Education
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)', mt: 1 }}>
                    B.S. in Computer Science
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'var(--ink-muted)' }}>
                    Florida International University · May 2019 — May 2022
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
