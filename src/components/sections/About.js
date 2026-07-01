import React, { useEffect, useMemo, useState } from 'react';
import { Box, Container, Typography, Grid, Stack, Chip, Divider } from '@mui/material';

const About = () => {
  const skills = [
    'Python', 'AWS', 'DevOps', 'Cloud Automation', 'Boto3', 'IaC (CloudFormation / Terraform)',
    'Full Stack', 'React', 'JavaScript', 'CI/CD', 'Docker', 'Node.js',
  ];

  const terminalLines = useMemo(
    () => [
      '$ whoami',
      'jose_arosemena',
      '',
      '$ cat engineer-profile.json',
      '{',
      '  "status": "building cloud automation and full stack apps",',
      '  "stack": ["aws", "python", "react", "ci/cd"],',
      '  "focus": "serverless workflows + deployment systems",',
      '  "bias": "automate repeatable work",',
      '  "mode": "product polish + infrastructure depth"',
      '}',
      '',
      '$ ./ready-check',
      'ready: true',
    ],
    []
  );
  const terminalText = useMemo(() => terminalLines.join('\n'), [terminalLines]);
  const [typedTerminalText, setTypedTerminalText] = useState('');

  const handleSkillChipClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      setTypedTerminalText(terminalText);
      return undefined;
    }

    let index = 0;
    let timeoutId;

    const typeNextCharacter = () => {
      index += 1;
      setTypedTerminalText(terminalText.slice(0, index));

      if (index < terminalText.length) {
        const nextCharacter = terminalText[index];
        const delay = nextCharacter === '\n' ? 180 : 18;
        timeoutId = window.setTimeout(typeNextCharacter, delay);
      }
    };

    timeoutId = window.setTimeout(typeNextCharacter, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [terminalText]);


  return (
    <section id="about">
      <Container maxWidth="lg">
        <Grid container spacing={7} alignItems="flex-start">
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: '0.24em', color: 'var(--teal)', fontSize: '1.5rem' }}
            >
              Jose Arosemena
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              className="about-marquee"
              sx={{
                color: 'var(--ink)',
                fontSize: { xs: '3rem', md: '5.4rem' },
                mt: 1.5,
                mb: 2,
              }}
            >
              <span className="about-marquee__track">
                <span>Designing systems. Automating work. Solving problems.</span>
                <span aria-hidden="true">Designing systems. Automating work. Solving problems.</span>
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1.08rem', md: '1.22rem' },
                color: 'var(--ink-muted)',
                lineHeight: 1.75,
                mb: 3,
                maxWidth: 720,
              }}
            >
              I'm Jose, a Cloud Engineer with experience in AWS, Python, and DevOps who also enjoys building full-stack applications from frontend to production deployment.
            </Typography>


            <Divider sx={{ borderColor: 'var(--edge)', mb: 3 }} />
            <Typography
              variant="overline"
              sx={{ letterSpacing: '0.24em', color: 'var(--ink-muted)', fontSize: '0.7rem' }}
            >
              Core toolkit
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  component="span"
                  label={skill}
                  clickable={false}
                  onClick={handleSkillChipClick}
                  sx={{
                    background: 'rgba(82, 215, 232, 0.08)',
                    color: 'var(--ink)',
                    fontWeight: 600,
                    fontSize: '0.82rem',
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
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              className="engineer-terminal"
              sx={{
                border: '1px solid rgba(82, 215, 232, 0.28)',
                background:
                  'linear-gradient(180deg, rgba(12, 18, 24, 0.96) 0%, rgba(5, 8, 12, 0.98) 100%)',
                boxShadow: '0 24px 70px rgba(0, 0, 0, 0.36), inset 0 1px 0 rgba(255, 255, 255, 0.04)',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  minHeight: 42,
                  px: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.1,
                  borderBottom: '1px solid rgba(242, 246, 248, 0.09)',
                  background: 'rgba(242, 246, 248, 0.045)',
                }}
              >
                <Box sx={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
                <Box sx={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e' }} />
                <Box sx={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
                <Typography
                  component="span"
                  sx={{
                    ml: 1,
                    color: 'var(--ink-faint)',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.72rem',
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  jose@portfolio: ~/engineer-profile
                </Typography>
              </Box>
              <Box
                component="pre"
                aria-label={terminalText}
                sx={{
                  m: 0,
                  minHeight: { xs: 360, sm: 330 },
                  p: { xs: 2.25, sm: 3 },
                  color: 'var(--ink-muted)',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: { xs: '0.72rem', sm: '0.82rem' },
                  lineHeight: 1.75,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  tabSize: 2,
                }}
              >
                <span>{typedTerminalText}</span>
                <span className="terminal-cursor" aria-hidden="true" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
