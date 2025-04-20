import React from 'react';
import ProductCard from '../components/ProductCard';
import plants from '../data/plants';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



const Products = ({ previewMode = false, previewCount = 2 }) => {
  // Get unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];

  // If in preview mode, only show a limited number of products
  const displayedCategories = previewMode ? categories.slice(0, 1) : categories;


  return (
    <Container maxWidth="lg" sx={{
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '200px',
        background: 'radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
        zIndex: -1,
      }
    }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
        sx={{
          mb: 5,
          position: 'relative',
          fontWeight: 'bold',
          textShadow: '0 4px 8px rgba(0,0,0,0.1)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -15,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '4px',
            background: 'linear-gradient(90deg, #1B5E20, #4CAF50, #1B5E20)',
            borderRadius: '2px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
          animation: 'fadeInDown 0.8s ease-out',
          '@keyframes fadeInDown': {
            '0%': {
              opacity: 0,
              transform: 'translateY(-20px)'
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0)'
            }
          }
        }}
      >
        Our Plants Collection
      </Typography>

      {displayedCategories.map((category, index) => (
        <Box
          key={category}
          sx={{
            mb: 6,
            animation: 'fadeInUp 0.8s ease-out',
            animationFillMode: 'both',
            animationDelay: `${0.2}s`,
            '@keyframes fadeInUp': {
              '0%': {
                opacity: 0,
                transform: 'translateY(20px)'
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)'
              }
            }
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            sx={{
              mb: 3,
              pb: 1,
              position: 'relative',
              display: 'inline-block',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #1B5E20, #4CAF50)',
                borderRadius: '3px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                animation: 'expandWidth 0.8s ease-out',
                '@keyframes expandWidth': {
                  '0%': { width: '0%' },
                  '100%': { width: '100%' }
                }
              }
            }}
          >
            {category}
          </Typography>

          <Grid container spacing={3}>
            {plants
              .filter(plant => plant.category === category)
              .slice(0, previewMode ? previewCount : undefined)
              .map(plant => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
                  <ProductCard plant={plant} />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      ))}
    </Container>
  );
};

export default Products;