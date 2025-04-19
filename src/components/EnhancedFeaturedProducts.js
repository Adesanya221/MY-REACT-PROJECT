import React, { useState } from 'react';
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
  Chip,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useCart } from '../context/CartContext';
import plants from '../data/plants';

const EnhancedFeaturedProducts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { addToCart, cartItems } = useCart();
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  // Get featured products
  const featuredPlants = plants.filter(plant => plant.featured);
  
  // Get products by category for tabs
  const categories = [...new Set(plants.map(plant => plant.category))];
  const productsByCategory = categories.map(category => {
    return {
      name: category,
      products: plants.filter(plant => plant.category === category).slice(0, 4)
    };
  });
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };
  
  return (
    <Box sx={{ mb: 8 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 4,
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 2, md: 0 }
      }}>
        <Typography 
          variant="h4" 
          component="h2" 
          color="primary"
          sx={{ 
            fontWeight: 'bold',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '60px',
              height: '4px',
              backgroundColor: 'secondary.main',
              borderRadius: '2px'
            }
          }}
        >
          Featured Products
        </Typography>
        <Button 
          variant="outlined" 
          color="primary"
          component={RouterLink}
          to="/products"
          endIcon={<Box component="span" sx={{ ml: 1 }}>→</Box>}
          sx={{
            borderRadius: '50px',
            px: 3,
            '&:hover': {
              transform: 'translateX(5px)',
              transition: 'transform 0.3s'
            }
          }}
        >
          View All Products
        </Button>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : false}
          allowScrollButtonsMobile
          centered={!isMobile}
          sx={{ 
            mb: 4,
            '& .MuiTabs-indicator': {
              height: 3,
              borderRadius: '3px'
            },
            '& .MuiTab-root': {
              fontWeight: 'bold',
              fontSize: '1rem',
              textTransform: 'none',
              minWidth: 100,
              transition: 'all 0.3s',
              '&:hover': {
                color: 'primary.main',
                opacity: 1
              },
              '&.Mui-selected': {
                color: 'primary.main'
              }
            }
          }}
        >
          <Tab 
            label="Featured" 
            icon={<LocalFireDepartmentIcon />} 
            iconPosition="start"
          />
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
        
        <Grid container spacing={3}>
          {(activeTab === 0 ? featuredPlants : productsByCategory[activeTab - 1]?.products || []).slice(0, 4).map(product => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.4s, box-shadow 0.4s',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.2)'
                  },
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Box sx={{ position: 'relative' }}>
                  {product.featured && (
                    <Chip 
                      icon={<LocalFireDepartmentIcon />}
                      label="Featured" 
                      color="secondary" 
                      size="small"
                      sx={{ 
                        position: 'absolute', 
                        top: 10, 
                        left: 10, 
                        fontWeight: 'bold',
                        zIndex: 1,
                        px: 1
                      }}
                    />
                  )}
                  
                  <IconButton
                    sx={{ 
                      position: 'absolute', 
                      top: 10, 
                      right: 10,
                      bgcolor: 'rgba(255,255,255,0.8)',
                      color: 'grey.600',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.9)',
                        color: 'error.main'
                      },
                      zIndex: 1,
                      transition: 'all 0.3s',
                      transform: hoveredProduct === product.id ? 'scale(1)' : 'scale(0)',
                      opacity: hoveredProduct === product.id ? 1 : 0
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      objectFit: 'cover',
                      transition: 'transform 0.5s',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '100%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)',
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      pb: 2
                    }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => addToCart(product)}
                      disabled={isInCart(product.id)}
                      sx={{ 
                        fontWeight: 'bold',
                        transform: hoveredProduct === product.id ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'transform 0.3s',
                        opacity: hoveredProduct === product.id ? 1 : 0,
                        bgcolor: isInCart(product.id) ? 'success.main' : 'secondary.main',
                        color: 'primary.dark'
                      }}
                    >
                      {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                    </Button>
                  </Box>
                </Box>
                
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 0 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      ${product.price.toFixed(2)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={product.rating} precision={0.5} size="small" readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      ({product.rating})
                    </Typography>
                  </Box>
                  
                  <Chip
                    label={product.category}
                    size="small"
                    variant="outlined"
                    sx={{ mb: 1.5, fontSize: '0.75rem' }}
                  />
                  
                  {product.description && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                      {product.description.length > 80 ? `${product.description.substring(0, 80)}...` : product.description}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default EnhancedFeaturedProducts;
