import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Jose Arosemena. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer; 