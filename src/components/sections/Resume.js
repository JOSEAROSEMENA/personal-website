import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const Resume = () => {
  return (
    <section id="resume">
      <Typography variant="h4" component="h4" gutterBottom>
        Resume
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<DownloadIcon />}
          href="/resume.pdf"
          download
          sx={{
            '&:hover': {
              backgroundColor: 'primary.dark'
            }
          }}
        >
          Download Resume
        </Button>
      </Box>
    </section>
  );
};

export default Resume; 