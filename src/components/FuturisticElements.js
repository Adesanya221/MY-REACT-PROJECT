import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

// Define animations
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Hexagon SVG component
const Hexagon = ({ size = 40, color = '#1B5E20', opacity = 0.2, ...props }) => (
  <svg 
    width={size} 
    height={size * 0.866} 
    viewBox="0 0 100 86.6" 
    fill={color}
    opacity={opacity}
    {...props}
  >
    <path d="M0 43.3L25 0h50l25 43.3-25 43.3H25z" />
  </svg>
);

// DNA-like structure
const DNAStructure = ({ position = 'right', top = '20%' }) => {
  const isRight = position === 'right';
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: top,
        [isRight ? 'right' : 'left']: -30,
        width: 100,
        height: 400,
        opacity: 0.15,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            width: '100%',
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transform: index % 2 === 0 ? 'scaleX(1)' : 'scaleX(-1)',
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: '#1B5E20',
              opacity: 0.5,
            }}
          />
          <Box
            sx={{
              width: '70%',
              height: 2,
              bgcolor: '#1B5E20',
              opacity: 0.3,
            }}
          />
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              bgcolor: '#1B5E20',
              opacity: 0.5,
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

// Rotating hexagon grid
const HexagonGrid = ({ position = 'left', bottom = '10%' }) => {
  const isLeft = position === 'left';
  
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: bottom,
        [isLeft ? 'left' : 'right']: -50,
        width: 200,
        height: 200,
        animation: `${rotate} 60s linear infinite`,
        opacity: 0.2,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <Hexagon
            key={index}
            size={30 + (index * 5)}
            color={index % 2 === 0 ? '#1B5E20' : '#4CAF50'}
            opacity={0.1 + (index * 0.02)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${index * 10}deg)`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

// Pulsing circle
const PulsingCircle = ({ position = 'right', top = '60%' }) => {
  const isRight = position === 'right';
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: top,
        [isRight ? 'right' : 'left']: 50,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(129,199,132,0.3) 0%, rgba(129,199,132,0) 70%)',
        animation: `${pulse} 5s infinite ease-in-out`,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

// Floating cannabis molecule
const CannabisMolecule = ({ position = 'left', top = '30%' }) => {
  const isLeft = position === 'left';
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: top,
        [isLeft ? 'left' : 'right']: 30,
        animation: `${float} 8s infinite ease-in-out`,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="15" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="60" cy="20" r="10" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="60" cy="100" r="10" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="20" cy="60" r="10" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="100" cy="60" r="10" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="30" cy="30" r="8" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="90" cy="30" r="8" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="30" cy="90" r="8" fill="#1B5E20" fillOpacity="0.2" />
        <circle cx="90" cy="90" r="8" fill="#1B5E20" fillOpacity="0.2" />
        <line x1="60" y1="35" x2="60" y2="85" stroke="#1B5E20" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="35" y1="60" x2="85" y2="60" stroke="#1B5E20" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="38" y1="38" x2="82" y2="82" stroke="#1B5E20" strokeOpacity="0.3" strokeWidth="2" />
        <line x1="38" y1="82" x2="82" y2="38" stroke="#1B5E20" strokeOpacity="0.3" strokeWidth="2" />
      </svg>
    </Box>
  );
};

const FuturisticElements = () => {
  return (
    <>
      <DNAStructure position="right" top="15%" />
      <DNAStructure position="left" top="50%" />
      <HexagonGrid position="left" bottom="15%" />
      <HexagonGrid position="right" bottom="40%" />
      <PulsingCircle position="right" top="25%" />
      <PulsingCircle position="left" top="70%" />
      <CannabisMolecule position="left" top="30%" />
      <CannabisMolecule position="right" top="60%" />
    </>
  );
};

export default FuturisticElements;
