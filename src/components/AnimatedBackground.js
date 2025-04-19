import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

// Define animations
const floatUp = keyframes`
  0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 0.3; }
  90% { opacity: 0.2; }
  100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
`;

const floatAcross = keyframes`
  0% { transform: translateX(-100px) rotate(0deg); opacity: 0; }
  10% { opacity: 0.1; }
  90% { opacity: 0.1; }
  100% { transform: translateX(100vw) rotate(360deg); opacity: 0; }
`;

const sway = keyframes`
  0% { transform: rotate(0deg) translateY(0px); }
  25% { transform: rotate(5deg) translateY(-15px); }
  50% { transform: rotate(0deg) translateY(0px); }
  75% { transform: rotate(-5deg) translateY(15px); }
  100% { transform: rotate(0deg) translateY(0px); }
`;

const wave = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

// SVG Cannabis Leaf Icon
const CannabisLeafIcon = ({ color = '#81C784', size = 24, style, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    style={style}
    className={className}
  >
    <path d="M12,2C9.97,2 8.1,2.67 6.6,3.8L8,5.6C9.08,4.85 10.5,4.5 12,4.5C13.5,4.5 14.92,4.85 16,5.6L17.4,3.8C15.9,2.67 14.03,2 12,2M3.8,6.6L5.6,8C4.85,9.08 4.5,10.5 4.5,12C4.5,13.5 4.85,14.92 5.6,16L3.8,17.4C2.67,15.9 2,14.03 2,12C2,9.97 2.67,8.1 3.8,6.6M20.2,6.6C21.33,8.1 22,9.97 22,12C22,14.03 21.33,15.9 20.2,17.4L18.4,16C19.15,14.92 19.5,13.5 19.5,12C19.5,10.5 19.15,9.08 18.4,8L20.2,6.6M8,18.4L6.6,20.2C8.1,21.33 9.97,22 12,22C14.03,22 15.9,21.33 17.4,20.2L16,18.4C14.92,19.15 13.5,19.5 12,19.5C10.5,19.5 9.08,19.15 8,18.4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" />
  </svg>
);

// Alternative cannabis leaf design
const CannabisLeafAlt = ({ color = '#4CAF50', size = 24, style, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    fill={color}
    style={style}
    className={className}
  >
    <path d="M256,0c-15.5,32.5-35,59.6-58.3,82.8c-23.3,23.3-50.4,42.8-82.8,58.3c32.5,15.5,59.6,35,82.8,58.3 c23.3,23.3,42.8,50.4,58.3,82.8c15.5-32.5,35-59.6,58.3-82.8c23.3-23.3,50.4-42.8,82.8-58.3c-32.5-15.5-59.6-35-82.8-58.3 C291,59.6,271.5,32.5,256,0z M74.1,171.6c-15.5,32.5-35,59.6-58.3,82.8c32.5,15.5,59.6,35,82.8,58.3c23.3,23.3,42.8,50.4,58.3,82.8 c15.5-32.5,35-59.6,58.3-82.8c-23.3-23.3-42.8-50.4-58.3-82.8c-15.5,32.5-35,59.6-58.3,82.8C75.3,335.9,56,363,40.5,395.4 c-15.5-32.5-35-59.6-58.3-82.8c23.3-23.3,42.8-50.4,58.3-82.8c-15.5,32.5-35,59.6-58.3,82.8c-23.3,23.3-50.4,42.8-82.8,58.3 c32.5,15.5,59.6,35,82.8,58.3c23.3,23.3,42.8,50.4,58.3,82.8c15.5-32.5,35-59.6,58.3-82.8c23.3-23.3,50.4-42.8,82.8-58.3 c-32.5-15.5-59.6-35-82.8-58.3C99.5,289.6,80,262.5,64.5,230c15.5,32.5,35,59.6,58.3,82.8c23.3,23.3,50.4,42.8,82.8,58.3 c-32.5-15.5-59.6-35-82.8-58.3C99.5,289.6,80,262.5,64.5,230c-15.5,32.5-35,59.6-58.3,82.8c-23.3,23.3-50.4,42.8-82.8,58.3 c32.5,15.5,59.6,35,82.8,58.3c23.3,23.3,42.8,50.4,58.3,82.8c15.5-32.5,35-59.6,58.3-82.8c23.3-23.3,50.4-42.8,82.8-58.3 c-32.5-15.5-59.6-35-82.8-58.3C99.5,289.6,80,262.5,64.5,230c15.5,32.5,35,59.6,58.3,82.8c23.3,23.3,50.4,42.8,82.8,58.3 c-32.5-15.5-59.6-35-82.8-58.3C99.5,289.6,80,262.5,64.5,230c-15.5,32.5-35,59.6-58.3,82.8c-23.3,23.3-50.4,42.8-82.8,58.3 c32.5,15.5,59.6,35,82.8,58.3c23.3,23.3,42.8,50.4,58.3,82.8c15.5-32.5,35-59.6,58.3-82.8c23.3-23.3,50.4-42.8,82.8-58.3 c-32.5-15.5-59.6-35-82.8-58.3C99.5,289.6,80,262.5,64.5,230" />
  </svg>
);

// Four-leaf clover pattern made with cannabis leaves
const FourLeafClover = ({ color = '#4CAF50', size = 40, rotation = 0, style, className }) => {
  const leafSize = size * 0.7;

  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      className={className}
    >
      {/* Top leaf */}
      <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%) rotate(0deg)' }}>
        <CannabisLeafIcon color={color} size={leafSize} />
      </Box>

      {/* Right leaf */}
      <Box sx={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%) rotate(90deg)' }}>
        <CannabisLeafIcon color={color} size={leafSize} />
      </Box>

      {/* Bottom leaf */}
      <Box sx={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%) rotate(180deg)' }}>
        <CannabisLeafIcon color={color} size={leafSize} />
      </Box>

      {/* Left leaf */}
      <Box sx={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%) rotate(270deg)' }}>
        <CannabisLeafIcon color={color} size={leafSize} />
      </Box>

      {/* Center dot */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: size * 0.15,
          height: size * 0.15,
          borderRadius: '50%',
          backgroundColor: color,
          opacity: 0.8,
        }}
      />
    </Box>
  );
};

// Floating leaf component that rises up
const FloatingLeaf = ({ index }) => {
  // Random properties for each leaf
  const size = Math.floor(Math.random() * 20) + 10; // 10-30px
  const duration = Math.floor(Math.random() * 15) + 15; // 15-30s
  const delay = Math.random() * 10;
  const leftPosition = Math.random() * 100; // 0-100%
  const opacity = Math.random() * 0.25 + 0.15; // 0.15-0.4 (more visible)
  const color = index % 3 === 0 ? '#1B5E20' : (index % 3 === 1 ? '#81C784' : '#4CAF50');

  return (
    <Box
      sx={{
        position: 'absolute',
        left: `${leftPosition}%`,
        bottom: '-50px',
        opacity: opacity,
        animation: `${floatUp} ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        zIndex: -1,
        pointerEvents: 'none',
        filter: 'blur(0px)',
      }}
    >
      <CannabisLeafIcon
        color={color}
        size={size}
      />
    </Box>
  );
};

// Floating leaf component that moves horizontally
const HorizontalLeaf = ({ index }) => {
  // Random properties for each leaf
  const size = Math.floor(Math.random() * 15) + 8; // 8-23px
  const duration = Math.floor(Math.random() * 20) + 30; // 30-50s (slower)
  const delay = Math.random() * 15;
  const topPosition = 5 + (Math.random() * 90); // 5-95% (avoid very top and bottom)
  const opacity = Math.random() * 0.2 + 0.1; // 0.1-0.3 (more visible)
  const color = index % 3 === 0 ? '#1B5E20' : (index % 3 === 1 ? '#81C784' : '#4CAF50');
  const leafType = index % 2 === 0;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: `${topPosition}%`,
        left: '-50px',
        opacity: opacity,
        animation: `${floatAcross} ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        zIndex: -1,
        pointerEvents: 'none',
        filter: 'blur(0px)',
      }}
    >
      {leafType ? (
        <CannabisLeafIcon color={color} size={size} />
      ) : (
        <CannabisLeafAlt color={color} size={size} />
      )}
    </Box>
  );
};

// Swaying leaf component (fixed position, just sways)
const SwayingLeaf = ({ index }) => {
  // Properties for each leaf
  const size = 12 + (index % 3) * 4; // 12, 16, or 20px
  const duration = 8 + (index % 4) * 2; // 8-14s
  const delay = index * 0.5;

  // Calculate position - distribute around the edges
  let topPosition, leftPosition;

  if (index % 4 === 0) {
    // Top edge
    topPosition = '5%';
    leftPosition = `${10 + (index * 15) % 80}%`;
  } else if (index % 4 === 1) {
    // Right edge
    topPosition = `${10 + (index * 12) % 80}%`;
    leftPosition = '95%';
  } else if (index % 4 === 2) {
    // Bottom edge
    topPosition = '90%';
    leftPosition = `${15 + (index * 17) % 70}%`;
  } else {
    // Left edge
    topPosition = `${15 + (index * 13) % 75}%`;
    leftPosition = '5%';
  }

  const opacity = 0.15 + (index % 3) * 0.05; // 0.15-0.25 (more visible)
  const color = index % 3 === 0 ? '#1B5E20' : (index % 3 === 1 ? '#81C784' : '#4CAF50');
  const leafType = index % 2 === 0;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: topPosition,
        left: leftPosition,
        opacity: opacity,
        animation: `${sway} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        zIndex: -1,
        pointerEvents: 'none',
        transform: 'rotate(0deg)',
        transformOrigin: 'center center',
      }}
    >
      {leafType ? (
        <CannabisLeafIcon color={color} size={size} />
      ) : (
        <CannabisLeafAlt color={color} size={size} />
      )}
    </Box>
  );
};

// Wave component
const Wave = ({ index, total }) => {
  const baseColor = '#1B5E20';
  const opacity = 0.03 - (index * 0.005);
  const animationDuration = 20 + (index * 5); // seconds
  const animationDelay = index * -3; // seconds
  const height = 120 - (index * 10); // px

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: `${index * 15}px`,
        left: 0,
        width: '200%',
        height: `${height}px`,
        background: `${baseColor}`,
        opacity: opacity,
        borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        animation: `${wave} ${animationDuration}s linear infinite`,
        animationDelay: `${animationDelay}s`,
        zIndex: -1,
        transformOrigin: 'center bottom',
        pointerEvents: 'none',
      }}
    />
  );
};

// Random cannabis leaves component
const RandomLeaves = () => {
  // Create random cannabis leaves
  const leaves = [];
  // Use fewer leaves on mobile for better performance
  const isMobile = window.innerWidth < 600;
  const leafCount = isMobile ? 8 : 15;

  for (let i = 0; i < leafCount; i++) {
    // Smaller leaves on mobile
    const size = isMobile ?
      (20 + Math.random() * 25) : // 20-45px on mobile
      (30 + Math.random() * 40); // 30-70px on desktop
    const rotation = Math.random() * 360; // 0-360 degrees (completely random)
    const color = [
      '#1B5E20', // Dark green
      '#2E7D32', // Medium green
      '#388E3C', // Light green
      '#43A047', // Lighter green
    ][Math.floor(Math.random() * 4)];

    const opacity = 0.1 + Math.random() * 0.15; // 0.1-0.25 (subtle)

    // Completely random positions
    const topPosition = Math.random() * 100; // 0-100%
    const leftPosition = Math.random() * 100; // 0-100%

    leaves.push(
      <Box
        key={`leaf-${i}`}
        sx={{
          position: 'absolute',
          top: `${topPosition}%`,
          left: `${leftPosition}%`,
          opacity: opacity,
          transform: `rotate(${rotation}deg) scale(${0.7 + Math.random() * 0.6})`, // 0.7-1.3 scale with rotation
        }}
      >
        {Math.random() > 0.5 ? (
          <CannabisLeafIcon color={color} size={size} />
        ) : (
          <CannabisLeafAlt color={color} size={size} />
        )}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {leaves}
    </Box>
  );
};

const AnimatedBackground = ({
  verticalLeafCount = 5,
  horizontalLeafCount = 4,
  swayingLeafCount = 6,
  waveCount = 3,
  showRandomLeaves = true
}) => {
  // Detect mobile for performance optimization
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  // Only show animations after component is mounted to prevent SSR issues
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Random cannabis leaves background */}
      {showRandomLeaves && <RandomLeaves />}

      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      >
        {/* Vertically floating leaves - fewer on mobile */}
        {Array.from({ length: isMobile ? Math.ceil(verticalLeafCount/2) : verticalLeafCount }).map((_, index) => (
          <FloatingLeaf key={`vleaf-${index}`} index={index} />
        ))}

        {/* Horizontally floating leaves - fewer on mobile */}
        {Array.from({ length: isMobile ? Math.ceil(horizontalLeafCount/2) : horizontalLeafCount }).map((_, index) => (
          <HorizontalLeaf key={`hleaf-${index}`} index={index} />
        ))}

        {/* Swaying leaves - fewer on mobile */}
        {Array.from({ length: isMobile ? Math.ceil(swayingLeafCount/2) : swayingLeafCount }).map((_, index) => (
          <SwayingLeaf key={`sleaf-${index}`} index={index} />
        ))}

        {/* Waves at bottom */}
        {Array.from({ length: waveCount }).map((_, index) => (
          <Wave key={`wave-${index}`} index={index} total={waveCount} />
        ))}
      </Box>
    </>
  );
};

export default AnimatedBackground;
