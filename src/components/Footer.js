import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

// Define wave animations - faster for smaller footer
const waveAnimation1 = keyframes`
  0% { transform: translateX(-100%) translateZ(0); }
  50% { transform: translateX(0) translateZ(0); }
  100% { transform: translateX(100%) translateZ(0); }
`;

const waveAnimation2 = keyframes`
  0% { transform: translateX(0) translateZ(0); }
  50% { transform: translateX(-100%) translateZ(0); }
  100% { transform: translateX(0) translateZ(0); }
`;

const waveAnimation3 = keyframes`
  0% { transform: translateX(100%) translateZ(0); }
  50% { transform: translateX(0) translateZ(0); }
  100% { transform: translateX(-100%) translateZ(0); }
`;

// Wave SVG components
const WaveTop = ({ color = '#1B5E20', opacity = 0.1 }) => (
  <Box
    sx={{
      position: 'absolute',
      top: -50,
      left: 0,
      width: '100%',
      height: 50,
      overflow: 'hidden',
      zIndex: 1,
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: 'absolute',
        bottom: 0,
        width: '200%',
        height: '100%',
        animation: `${waveAnimation1} 25s linear infinite`,
        willChange: 'transform',
      }}
    >
      <path
        fill={color}
        fillOpacity={opacity}
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: 'absolute',
        bottom: 0,
        width: '200%',
        height: '100%',
        animation: `${waveAnimation2} 20s linear infinite`,
        willChange: 'transform',
      }}
    >
      <path
        fill={color}
        fillOpacity={opacity * 0.8}
        d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={{
        position: 'absolute',
        bottom: 0,
        width: '200%',
        height: '100%',
        animation: `${waveAnimation3} 15s linear infinite`,
        willChange: 'transform',
      }}
    >
      <path
        fill={color}
        fillOpacity={opacity * 0.6}
        d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,186.7C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </Box>
);

// Animated wave component for the footer
const AnimatedWaves = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '25px',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {/* First wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '200%',
          height: '100%',
          animation: `${waveAnimation1} 25s linear infinite`,
          willChange: 'transform',
        }}
      >
        <path
          fill="#4CAF50"
          fillOpacity="0.2"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Second wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '200%',
          height: '100%',
          animation: `${waveAnimation2} 20s linear infinite`,
          willChange: 'transform',
        }}
      >
        <path
          fill="#2E7D32"
          fillOpacity="0.15"
          d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Third wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          width: '200%',
          height: '100%',
          animation: `${waveAnimation3} 15s linear infinite`,
          willChange: 'transform',
        }}
      >
        <path
          fill="#1B5E20"
          fillOpacity="0.1"
          d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,186.7C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: 4,
        pt: 2,
        pb: 2,
        backgroundColor: '#1B5E20',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Footer content */}
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%', px: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            width: '100%',
            gap: { xs: 2, sm: 0 }
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedLogo variant="minimal" />
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 3 }
            }}
          >
            <Link component={RouterLink} to="/products" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Products
            </Link>
            <Link component={RouterLink} to="/about" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              About
            </Link>
            <Link component={RouterLink} to="/faq" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              FAQ
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Contact
            </Link>
            <Link component={RouterLink} to="/terms" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Terms
            </Link>
            <Link component={RouterLink} to="/privacy" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Privacy
            </Link>
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" sx={{ color: 'white', padding: '4px' }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', padding: '4px' }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', padding: '4px' }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: 'white', padding: '4px' }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 1,
            pt: 1,
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} GreenThumb Cannabis. All rights reserved. For adults 21+ only.
          </Typography>
        </Box>
      </Box>

      {/* Animated waves at the bottom */}
      <AnimatedWaves />
    </Box>
  );
};

export default Footer;
