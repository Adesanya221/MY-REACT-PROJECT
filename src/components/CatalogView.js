import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ProductCard from './ProductCard';
import AuthRequiredNotification from './AuthRequiredNotification';
import plants from '../data/plants';
import LockIcon from '@mui/icons-material/Lock';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CatalogView = () => {
  // State for auth notification dialog
  const [showAuthNotification, setShowAuthNotification] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handle showing the auth notification
  const handleShowAuthNotification = (product) => {
    setSelectedProduct(product);
    setShowAuthNotification(true);
  };

  // Handle closing the auth notification
  const handleCloseAuthNotification = () => {
    setShowAuthNotification(false);
  };
  // Get unique categories
  const categories = [...new Set(plants.map(plant => plant.category))];

  // For catalog view, we'll show a limited number of products per category
  const productsPerCategory = 4;

  return (
    <>
      {/* Auth Required Notification Dialog */}
      <AuthRequiredNotification
        open={showAuthNotification}
        onClose={handleCloseAuthNotification}
        productName={selectedProduct?.name}
        redirectPath="/products"
      />
      <Container maxWidth="lg">
      {/* Catalog Header */}
      <Box
        sx={{
          mb: 5,
          animation: 'fadeIn 0.8s ease-out',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="primary"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)',
            position: 'relative',
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
            }
          }}
        >
          Product Catalog
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          sx={{
            mt: 2,
            maxWidth: '800px',
            mx: 'auto',
            animation: 'fadeIn 1s ease-out 0.3s both',
          }}
        >
          Browse our premium selection of cannabis products. Create an account or log in to purchase.
        </Typography>
      </Box>

      {/* Login/Signup Call to Action */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 6,
          borderRadius: 2,
          background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
          '@keyframes fadeInUp': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
            mb: { xs: 2, md: 0 }
          }}>
            <LockIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
            <Box>
              <Typography variant="h5" component="h2" color="primary.dark" gutterBottom fontWeight="bold">
                Create an Account to Shop
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Sign up or log in to add products to your cart and complete your purchase.
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-end' },
            width: { xs: '100%', md: 'auto' }
          }}>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              color="primary"
              startIcon={<ShoppingCartIcon />}
              sx={{
                px: 3,
                py: 1.5,
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                }
              }}
            >
              Log In
            </Button>
            <Button
              component={RouterLink}
              to="/signup"
              variant="outlined"
              color="secondary"
              startIcon={<PersonAddIcon />}
              sx={{
                px: 3,
                py: 1.5,
                fontWeight: 'bold',
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  borderWidth: 2
                }
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Product Categories */}
      {categories.map((category, index) => (
        <Box
          key={category}
          sx={{
            mb: 6,
            animation: 'fadeInUp 0.8s ease-out',
            animationFillMode: 'both',
            animationDelay: `${0.2}s`,
            '@keyframes fadeInUp': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
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
              .slice(0, productsPerCategory)
              .map(plant => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={plant.id}>
                  <ProductCard
                    plant={plant}
                    catalogMode={true}
                    onClick={() => handleShowAuthNotification(plant)}
                  />
                </Grid>
              ))
            }
          </Grid>

          {/* "See More" section at the end of each category */}
          {plants.filter(plant => plant.category === category).length > productsPerCategory && (
            <Box
              sx={{
                mt: 3,
                textAlign: 'center',
                p: 2,
                borderRadius: 2,
                bgcolor: 'rgba(76, 175, 80, 0.05)',
                border: '1px dashed rgba(76, 175, 80, 0.3)'
              }}
            >
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {plants.filter(plant => plant.category === category).length - productsPerCategory} more products available in this category
              </Typography>
              <Button
                component={RouterLink}
                to="/login?redirect=/products"
                variant="outlined"
                color="primary"
                sx={{
                  mt: 1,
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Log in to see all products
              </Button>
            </Box>
          )}
        </Box>
      ))}

      {/* Bottom Call to Action */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 6,
          borderRadius: 2,
          textAlign: 'center',
          background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
          animation: 'fadeIn 0.8s ease-out 0.6s both',
        }}
      >
        <Typography variant="h5" component="h2" color="primary.dark" gutterBottom fontWeight="bold">
          Ready to Start Shopping?
        </Typography>
        <Typography variant="body1" paragraph>
          Create an account to access our full product catalog, make purchases, and track your orders.
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/login"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
              }
            }}
          >
            Log In
          </Button>
          <Button
            component={RouterLink}
            to="/signup"
            variant="outlined"
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              borderWidth: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                borderWidth: 2
              }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
      </Container>
    </>
  );
};

export default CatalogView;
