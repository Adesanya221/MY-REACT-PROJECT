import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Chip
} from '@mui/material';
// ProductCard is not used directly in this component
import plants from '../data/plants';

const FeaturedProducts = () => {
  // Get featured products
  const featuredPlants = plants.filter(plant => plant.featured);

  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          sx={{ fontWeight: 'bold' }}
        >
          Featured Plants
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          component={RouterLink}
          to="/products"
        >
          View All
        </Button>
      </Box>

      <Grid container spacing={3}>
        {featuredPlants.map(plant => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 6
              }
            }}>
              <Box sx={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}>
                <Chip
                  label="Featured"
                  color="primary"
                  size="small"
                  sx={{ fontWeight: 'bold' }}
                />
              </Box>
              <CardMedia
                component="img"
                height="200"
                image={plant.image}
                alt={plant.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1, p: 2 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {plant.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Rating value={plant.rating} precision={0.5} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    ({plant.rating})
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {plant.description.substring(0, 80)}...
                </Typography>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  ${plant.price.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;
