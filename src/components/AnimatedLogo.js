import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Define animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

// SVG Cannabis Leaf Icon
const CannabisLeafIcon = ({ color = '#fff', size = 40, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill={color}
    className={className}
  >
    <path d="M12,2C9.97,2 8.1,2.67 6.6,3.8L8,5.6C9.08,4.85 10.5,4.5 12,4.5C13.5,4.5 14.92,4.85 16,5.6L17.4,3.8C15.9,2.67 14.03,2 12,2M3.8,6.6L5.6,8C4.85,9.08 4.5,10.5 4.5,12C4.5,13.5 4.85,14.92 5.6,16L3.8,17.4C2.67,15.9 2,14.03 2,12C2,9.97 2.67,8.1 3.8,6.6M20.2,6.6C21.33,8.1 22,9.97 22,12C22,14.03 21.33,15.9 20.2,17.4L18.4,16C19.15,14.92 19.5,13.5 19.5,12C19.5,10.5 19.15,9.08 18.4,8L20.2,6.6M8,18.4L6.6,20.2C8.1,21.33 9.97,22 12,22C14.03,22 15.9,21.33 17.4,20.2L16,18.4C14.92,19.15 13.5,19.5 12,19.5C10.5,19.5 9.08,19.15 8,18.4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" />
  </svg>
);

const AnimatedLogo = ({ variant = "default" }) => {
  // Different animation styles based on variant
  if (variant === "minimal") {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1
        }}
      >
        <Box
          sx={{
            animation: `${float} 3s ease-in-out infinite`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CannabisLeafIcon color="#81C784" />
        </Box>
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            background: 'linear-gradient(45deg, #1B5E20 30%, #81C784 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          GreenThumb
        </Typography>
      </Box>
    );
  }

  // Default animated logo (more elaborate)
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        gap: 1.5
      }}
    >
      {/* Animated background circle */}
      <Box
        sx={{
          position: 'absolute',
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,199,132,0.3) 0%, rgba(129,199,132,0) 70%)',
          animation: `${pulse} 4s ease-in-out infinite`,
          zIndex: 0,
        }}
      />
      
      {/* Main leaf icon */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          animation: `${float} 3s ease-in-out infinite`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CannabisLeafIcon color="#81C784" size={36} />
        
        {/* Small rotating leaf */}
        <Box
          sx={{
            position: 'absolute',
            top: -5,
            right: -5,
            animation: `${rotate} 8s linear infinite`,
            transformOrigin: 'center',
          }}
        >
          <CannabisLeafIcon color="#4CAF50" size={16} />
        </Box>
      </Box>
      
      {/* Text part of logo */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          component="span"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            background: 'linear-gradient(45deg, #1B5E20 30%, #81C784 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: `${shimmer} 3s ease-in-out infinite`,
          }}
        >
          GreenThumb
        </Typography>
        <Typography
          variant="caption"
          component="span"
          sx={{
            fontWeight: 500,
            letterSpacing: 0.5,
            color: '#4CAF50',
            opacity: 0.9,
            marginTop: -0.5,
          }}
        >
          Cannabis
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimatedLogo;
