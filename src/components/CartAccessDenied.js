import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Container,
  Grid
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

const CartAccessDenied = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          color="primary"
          gutterBottom
          sx={{ 
            mb: 2,
            fontWeight: 'bold',
            position: 'relative',
            display: 'inline-block',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #1B5E20, #4CAF50)',
              borderRadius: '2px'
            }
          }}
        >
          Shopping Cart
        </Typography>
        
        <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 5 }}>
          Sign in to view your cart and complete your purchase
        </Typography>
        
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, md: 5 }, 
            borderRadius: 2,
            background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
            mb: 4,
            maxWidth: 'md',
            mx: 'auto'
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                <LockIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h4" component="h2" color="primary.dark" gutterBottom fontWeight="bold">
                  Cart Access Restricted
                </Typography>
                <Typography variant="body1" paragraph>
                  You need to be signed in to view your shopping cart and make purchases.
                </Typography>
                <Typography variant="body1" paragraph>
                  Creating an account allows you to:
                </Typography>
                <Box sx={{ textAlign: 'left', mb: 3 }}>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <ShoppingCartIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
                    Add products to your cart
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <ShoppingCartIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
                    Save your shopping cart
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                    <ShoppingCartIcon color="primary" fontSize="small" sx={{ mr: 1 }} />
                    Complete secure checkout
                  </Typography>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  p: 3, 
                  bgcolor: 'white', 
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <Typography variant="h6" gutterBottom fontWeight="bold" color="primary">
                  Access Your Cart
                </Typography>
                
                <Button 
                  component={RouterLink} 
                  to="/login?redirect=/cart" 
                  variant="contained" 
                  color="primary"
                  size="large"
                  fullWidth
                  startIcon={<LoginIcon />}
                  sx={{ 
                    py: 1.5,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Sign In
                </Button>
                
                <Typography variant="body2" align="center" sx={{ my: 1 }}>
                  Don't have an account?
                </Typography>
                
                <Button 
                  component={RouterLink} 
                  to="/signup?redirect=/cart" 
                  variant="outlined" 
                  color="secondary"
                  size="large"
                  fullWidth
                  startIcon={<PersonAddIcon />}
                  sx={{ 
                    py: 1.5,
                    fontWeight: 'bold',
                    borderWidth: 2,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                      borderWidth: 2
                    }
                  }}
                >
                  Create Account
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        
        <Button
          variant="outlined"
          color="primary"
          component={RouterLink}
          to="/products"
          size="large"
          sx={{ 
            mt: 2,
            fontWeight: 'medium',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }
          }}
        >
          Continue Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default CartAccessDenied;
