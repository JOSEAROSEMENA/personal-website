import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

const Contact = () => {
  const email = 'josearosemena2@gmail.com';
  const [copyTooltip, setCopyTooltip] = useState('Copy email address');
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(email);
    setCopyTooltip('Copied!');
    setTimeout(() => setCopyTooltip('Copy email address'), 2000);
  };

  return (
    <section id="contact">
      <Typography variant="h4" component="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        <Link 
          href={`mailto:${email}`}
          sx={{ 
            fontSize: '1.1rem',
            color: '#0000EE',
            '&:hover': {
              color: '#0000EE',
              opacity: 0.8
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
              color: '#0000EE',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 238, 0.04)'
              }
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </section>
  );
};

export default Contact; 