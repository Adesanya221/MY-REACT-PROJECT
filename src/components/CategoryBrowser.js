import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import plants from '../data/plants';

const CategoryBrowser = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Get unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];
  
  // Get a representative image for each category
  const categoryImages = categories.map(category => {
    const categoryPlants = plants.filter(plant => plant.category === category);
    return {
      name: category,
      image: categoryPlants[0].image,
      count: categoryPlants.length,
      description: getCategoryDescription(category)
    };
  });
  
  function getCategoryDescription(category) {
    switch(category) {
      case 'Premium Strains':
        return 'Our selection of top-shelf cannabis strains, carefully cultivated for exceptional quality and effects.';
      case 'CBD Hemp':
        return 'High-CBD, low-THC hemp flowers for therapeutic benefits without intoxication.';
      case 'Cultivation Supplies':
        return 'Everything you need to grow your own cannabis at home, from lights to nutrients.';
      case 'Seeds':
        return 'Start your growing journey with our premium selection of cannabis seeds.';
      default:
        return 'Explore our selection of high-quality cannabis products.';
    }
  }
  
  return (
    <Box sx={{ mb: 8 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        color="primary"
        align="center"
        sx={{ 
          fontWeight: 'bold', 
          mb: 1,
          position: 'relative',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '25%',
            width: '50%',
            height: '4px',
            backgroundColor: 'secondary.main',
            borderRadius: '2px'
          }
        }}
      >
        Browse by Category
      </Typography>
      
      <Typography 
        variant="body1" 
        color="text.secondary" 
        align="center"
        sx={{ mb: 6, maxWidth: 700, mx: 'auto' }}
      >
        Discover our wide range of cannabis products organized by category to help you find exactly what you're looking for
      </Typography>
      
      {isMobile ? (
        // Mobile view - vertical cards
        <Grid container spacing={3}>
          {categoryImages.map((category, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card 
                sx={{ 
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={category.image}
                  alt={category.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {category.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="primary.main" fontWeight="bold">
                      {category.count} Products
                    </Typography>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="small"
                      component={RouterLink}
                      to="/products"
                      endIcon={<ArrowForwardIcon />}
                    >
                      Browse
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        // Desktop view - interactive category browser
        <Box sx={{ position: 'relative' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'sticky', top: 20 }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  color="primary.dark" 
                  fontWeight="bold"
                  sx={{ mb: 3 }}
                >
                  Our Categories
                </Typography>
                
                {categoryImages.map((category, index) => (
                  <Paper
                    key={index}
                    elevation={activeCategory === index ? 3 : 1}
                    sx={{ 
                      p: 2, 
                      mb: 2, 
                      cursor: 'pointer',
                      borderRadius: 2,
                      borderLeft: activeCategory === index ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: 'rgba(0,0,0,0.02)',
                        transform: 'translateX(5px)'
                      },
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onClick={() => setActiveCategory(index)}
                    onMouseEnter={() => setActiveCategory(index)}
                  >
                    <Box>
                      <Typography variant="h6" fontWeight={activeCategory === index ? 'bold' : 'medium'}>
                        {category.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {category.count} Products
                      </Typography>
                    </Box>
                    <IconButton 
                      size="small" 
                      color={activeCategory === index ? 'primary' : 'default'}
                      sx={{ 
                        opacity: activeCategory === index ? 1 : 0,
                        transition: 'opacity 0.3s'
                      }}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Paper>
                ))}
                
                <Button 
                  variant="contained" 
                  color="primary"
                  fullWidth
                  component={RouterLink}
                  to="/products"
                  sx={{ 
                    mt: 2,
                    py: 1.5,
                    fontWeight: 'bold',
                    borderRadius: 2
                  }}
                >
                  View All Products
                </Button>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Box 
                sx={{ 
                  height: '500px',
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 4
                }}
              >
                {categoryImages.map((category, index) => (
                  <Box
                    key={index}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${category.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'flex-end',
                      p: 4,
                      opacity: activeCategory === index ? 1 : 0,
                      transition: 'opacity 0.5s ease-in-out',
                      pointerEvents: activeCategory === index ? 'auto' : 'none'
                    }}
                  >
                    <Box 
                      sx={{ 
                        color: 'white',
                        maxWidth: '80%',
                        animation: activeCategory === index ? 'fadeInUp 0.5s ease-out' : 'none',
                        '@keyframes fadeInUp': {
                          '0%': { opacity: 0, transform: 'translateY(20px)' },
                          '100%': { opacity: 1, transform: 'translateY(0)' }
                        }
                      }}
                    >
                      <Typography 
                        variant="h3" 
                        component="h2" 
                        fontWeight="bold"
                        sx={{ mb: 2 }}
                      >
                        {category.name}
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ mb: 3, opacity: 0.9 }}
                      >
                        {category.description}
                      </Typography>
                      <Button 
                        variant="contained" 
                        color="secondary"
                        size="large"
                        component={RouterLink}
                        to="/products"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ 
                          fontWeight: 'bold',
                          color: 'primary.dark',
                          '&:hover': {
                            bgcolor: 'secondary.light',
                            transform: 'translateY(-4px)',
                            boxShadow: 3
                          },
                          transition: 'transform 0.3s, box-shadow 0.3s'
                        }}
                      >
                        Explore {category.name}
                      </Button>
                    </Box>
                  </Box>
                ))}
                
                {activeCategory === null && (
                  <Box
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(0,0,0,0.05)',
                      color: 'text.secondary'
                    }}
                  >
                    <Typography variant="h6">
                      Hover over a category to explore
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default CategoryBrowser;
