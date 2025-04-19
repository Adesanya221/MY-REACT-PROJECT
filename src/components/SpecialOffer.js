import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  Chip
} from '@mui/material';
import TimerIcon from '@mui/icons-material/Timer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link as RouterLink } from 'react-router-dom';

const SpecialOffer = () => {
  // Set the countdown to 3 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };
  
  return (
    <Box sx={{ mb: 8 }}>
      <Card 
        sx={{ 
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 3,
          boxShadow: 3,
          background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            bgcolor: 'secondary.main', 
            color: 'primary.dark',
            py: 1,
            px: 2,
            borderBottomLeftRadius: 16,
            fontWeight: 'bold',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <LocalOfferIcon fontSize="small" />
          <Typography variant="body2" fontWeight="bold">
            LIMITED TIME OFFER
          </Typography>
        </Box>
        
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                p: { xs: 3, md: 6 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'white'
              }}
            >
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 2,
                  textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }
                }}
              >
                Summer Special Bundle
              </Typography>
              
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 3,
                  opacity: 0.9,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                Get our premium starter kit with 3 top-rated strains at 25% off
              </Typography>
              
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                  gap: 1
                }}
              >
                <TimerIcon />
                <Typography variant="body1">
                  Offer ends in:
                </Typography>
              </Box>
              
              <Box 
                sx={{ 
                  display: 'flex',
                  gap: 2,
                  mb: 4,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <Box 
                    key={unit}
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <Box 
                      sx={{ 
                        bgcolor: 'rgba(255,255,255,0.15)',
                        borderRadius: 1,
                        p: 1,
                        minWidth: { xs: 40, md: 60 },
                        textAlign: 'center',
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Typography 
                        variant="h5" 
                        fontWeight="bold"
                        sx={{ fontSize: { xs: '1.2rem', md: '1.8rem' } }}
                      >
                        {formatTime(value)}
                      </Typography>
                    </Box>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        mt: 1,
                        textTransform: 'uppercase',
                        fontSize: { xs: '0.6rem', md: '0.75rem' }
                      }}
                    >
                      {unit}
                    </Typography>
                  </Box>
                ))}
              </Box>
              
              <Button 
                variant="contained" 
                color="secondary"
                size="large"
                component={RouterLink}
                to="/products"
                sx={{ 
                  alignSelf: { xs: 'center', md: 'flex-start' },
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  color: 'primary.dark',
                  '&:hover': {
                    bgcolor: 'secondary.light',
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  },
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                height: { xs: 250, md: '100%' },
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1603909223429-69bb7101f420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Special offer cannabis bundle"
                sx={{ 
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'brightness(0.9)'
                }}
              />
              <Box 
                sx={{ 
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  bgcolor: 'secondary.main',
                  color: 'primary.dark',
                  borderRadius: '50%',
                  width: 80,
                  height: 80,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  border: '2px solid white',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(1)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    },
                    '50%': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.3)'
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }
                  }
                }}
              >
                <Typography variant="h5" fontWeight="bold">25%</Typography>
                <Typography variant="body2" fontWeight="bold">OFF</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default SpecialOffer;
