import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  useTheme
} from '@mui/material';
import plants from '../data/plants';

const CategoryShowcase = () => {
  const theme = useTheme();
  
  // Get unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];
  
  // Get a representative image for each category
  const categoryImages = categories.map(category => {
    const categoryPlants = plants.filter(plant => plant.category === category);
    return {
      name: category,
      image: categoryPlants[0].image,
      count: categoryPlants.length
    };
  });
  
  return (
    <Box sx={{ mb: 8 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        color="primary"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        Shop by Category
      </Typography>
      
      <Grid container spacing={3}>
        {categoryImages.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                position: 'relative',
                height: 200,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  '& .MuiButton-root': {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              <Typography 
                variant="h5" 
                component="h3"
                sx={{ 
                  fontWeight: 'bold',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
                  mb: 1
                }}
              >
                {category.name}
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                  mb: 2
                }}
              >
                {category.count} Products
              </Typography>
              <Button 
                variant="contained" 
                component={RouterLink}
                to="/products"
                size="small"
                sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: theme.palette.primary.main,
                  '&:hover': {
                    bgcolor: 'white',
                  },
                  opacity: 0.9,
                  transform: 'translateY(10px)',
                  transition: 'opacity 0.3s, transform 0.3s'
                }}
              >
                Shop Now
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryShowcase;
