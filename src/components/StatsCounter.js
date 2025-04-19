import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VerifiedIcon from '@mui/icons-material/Verified';

const stats = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    value: 10000,
    label: "Orders Delivered",
    suffix: "+"
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    value: 5000,
    label: "Happy Customers",
    suffix: "+"
  },
  {
    icon: <ThumbUpIcon fontSize="large" />,
    value: 98,
    label: "Satisfaction Rate",
    suffix: "%"
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    value: 100,
    label: "Quality Verified",
    suffix: "%"
  }
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set up intersection observer to trigger animation when component is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds for the animation
      const steps = 20; // Number of steps to reach the final value
      const stepValue = stat.value / steps;
      let currentStep = 0;

      return setInterval(() => {
        if (currentStep < steps) {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.min(Math.round(stepValue * (currentStep + 1)), stat.value);
            return newCounts;
          });
          currentStep++;
        } else {
          clearInterval(intervals[index]);
        }
      }, duration / steps);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <Box 
      id="stats-section"
      sx={{ 
        py: 6, 
        px: 2,
        bgcolor: 'primary.dark',
        color: 'white',
        borderRadius: 2,
        mb: 8,
        boxShadow: 3,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background pattern */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77), linear-gradient(60deg, #ffffff77 25%, transparent 25.5%, transparent 75%, #ffffff77 75%, #ffffff77)',
          backgroundSize: '40px 70px',
          backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px',
          zIndex: 0
        }}
      />
      
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            mb: 4,
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
          }}
        >
          Our Impact in Numbers
        </Typography>
        
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3, 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 2,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <Box 
                  sx={{ 
                    color: 'secondary.light',
                    mb: 2,
                    transform: 'scale(1.5)'
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography 
                  variant="h3" 
                  component="div"
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 1,
                    fontSize: { xs: '1.8rem', md: '2.5rem' }
                  }}
                >
                  {counts[index]}{stat.suffix}
                </Typography>
                <Typography variant="body1" color="rgba(255,255,255,0.8)">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StatsCounter;
