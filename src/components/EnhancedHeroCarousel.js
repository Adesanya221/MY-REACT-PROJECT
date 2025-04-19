import React, { useState, useEffect, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
  Button,
  Typography,
  Box,
  Container,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import heroImages from '../data/heroImages';

// Memoize the carousel item to prevent unnecessary re-renders
const CarouselItem = memo(({ item, index, activeStep, isAnimating }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        position: 'relative',
        height: { xs: '60vh', sm: '70vh', md: '80vh' },
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        willChange: 'transform, opacity', // Optimize for animations
      }}
    >
      {/* Simplified background overlay with reduced complexity */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
          opacity: 0.7,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            color: 'white',
            p: { xs: 2, sm: 4, md: 6 },
            maxWidth: '800px',
            animation: isAnimating && activeStep === index ? 'fadeIn 0.8s ease-out' : 'none',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              display: 'inline-block',
              mb: 2,
              color: theme.palette.secondary.light,
              fontWeight: 'bold',
              letterSpacing: 2,
              backgroundColor: 'rgba(0,0,0,0.3)',
              px: 2,
              py: 0.5,
              borderRadius: 1,
            }}
          >
            Premium Quality
          </Typography>

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
              lineHeight: 1.2,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              opacity: 0.9,
              maxWidth: '600px',
            }}
          >
            {item.description}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to={item.link}
              sx={{
                bgcolor: 'secondary.main',
                color: 'primary.dark',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'secondary.light',
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
            >
              {item.buttonText}
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to="/products"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'secondary.light',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-4px)',
                },
                transition: 'transform 0.3s',
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Slide indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          right: 40,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0,0,0,0.5)',
          color: 'white',
          borderRadius: 2,
          px: 2,
          py: 1,
          backdropFilter: 'blur(5px)',
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {`${index + 1}`}
        </Typography>
        <Typography variant="body2" sx={{ mx: 1, color: 'rgba(255,255,255,0.7)' }}>
          /
        </Typography>
        <Typography variant="body2" color="rgba(255,255,255,0.7)">
          {heroImages.length}
        </Typography>
      </Box>
    </Paper>
  );
});

const EnhancedHeroCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Optimized animation effect when slide changes
  useEffect(() => {
    if (activeStep !== null) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const handleChange = (next) => {
    setActiveStep(next);
  };

  return (
    <Box sx={{ position: 'relative', mb: 8 }}>
      <Carousel
        animation="fade"
        autoPlay={true}
        interval={6000}
        timeout={500} // Reduced timeout for smoother transitions
        navButtonsAlwaysVisible={!isMobile}
        indicators={true}
        onChange={handleChange}
        fullHeightHover={false}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: theme.palette.primary.main,
            borderRadius: '50%',
            padding: '10px',
            margin: '0 20px',
          }
        }}
        NextIcon={<KeyboardArrowRightIcon />}
        PrevIcon={<KeyboardArrowLeftIcon />}
        indicatorContainerProps={{
          style: {
            position: 'absolute',
            bottom: '20px',
            zIndex: 10,
            marginTop: '20px',
          }
        }}
        indicatorIconButtonProps={{
          style: {
            color: 'rgba(255, 255, 255, 0.5)',
            padding: '5px',
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.secondary.main,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }
        }}
        sx={{
          mb: 6,
          '& .MuiPaper-root': {
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 5,
          }
        }}
      >
        {heroImages.map((item, index) => (
          <CarouselItem
            key={item.id}
            item={item}
            index={index}
            activeStep={activeStep}
            isAnimating={isAnimating}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default EnhancedHeroCarousel;
