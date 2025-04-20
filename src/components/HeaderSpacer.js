import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

// Pages where the header is not fixed (should match Header.js)
const NON_FIXED_HEADER_PATHS = [
  '/login',
  '/signup'
];

const HeaderSpacer = () => {
  const location = useLocation();
  
  // Don't render spacer on pages where header is not fixed
  if (NON_FIXED_HEADER_PATHS.includes(location.pathname)) {
    return null;
  }
  
  return (
    <Box 
      sx={{ 
        height: { xs: '64px', sm: '70px' }, // Match AppBar height
        mb: 2 // Match the margin-bottom of the AppBar
      }} 
    />
  );
};

export default HeaderSpacer;
