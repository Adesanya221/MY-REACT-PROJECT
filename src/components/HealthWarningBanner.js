import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const HealthWarningBanner = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: 'rgba(255, 152, 0, 0.05)', 
        py: 0.75,
        borderBottom: '1px solid rgba(255, 152, 0, 0.1)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}
        >
          <WarningAmberIcon 
            fontSize="small" 
            sx={{ 
              color: 'warning.main',
              opacity: 0.7,
              fontSize: '0.875rem'
            }} 
          />
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.7rem',
              fontWeight: 'medium',
              letterSpacing: '0.01em',
              opacity: 0.9
            }}
          >
            WARNING: Smoking cannabis products can expose you to chemicals that may increase your risk of dying young.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HealthWarningBanner;
