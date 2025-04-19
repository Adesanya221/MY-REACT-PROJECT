import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, Box } from '@mui/material';
import heroImages from '../data/heroImages';

const HeroCarousel = () => {
  return (
    <Carousel
      animation="slide"
      interval={6000}
      navButtonsAlwaysVisible={true}
      indicators={true}
      sx={{
        mb: 6,
        '& .MuiPaper-root': {
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 3,
        }
      }}
    >
      {heroImages.map((item) => (
        <Paper
          key={item.id}
          sx={{
            position: 'relative',
            height: { xs: '50vh', sm: '60vh', md: '70vh' },
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              color: 'white',
              p: { xs: 2, sm: 4, md: 6 },
              maxWidth: '800px',
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' }
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
              }}
            >
              {item.description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to={item.link}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                px: 4,
                py: 1.5,
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'primary.dark',
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              {item.buttonText}
            </Button>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
