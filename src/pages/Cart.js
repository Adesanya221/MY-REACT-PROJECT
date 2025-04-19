import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Cart = () => {
  const { cartItems, getTotalItems, getTotalCost } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!');
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="primary"
        gutterBottom
        sx={{ mb: 4 }}
      >
        Your Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Paper
          elevation={2}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 2
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your cart is empty.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/"
            size="large"
          >
            Continue Shopping
          </Button>
        </Paper>
      ) : (
        <>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              mb: 3,
              borderRadius: 2,
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: isMobile ? 'stretch' : 'center',
              gap: 2
            }}
          >
            <Box>
              <Typography variant="h6" color="text.secondary">
                Total Items: <Box component="span" fontWeight="bold" color="primary.main">{getTotalItems()}</Box>
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight="bold" color="primary.main">
                Total Cost: ${getTotalCost().toFixed(2)}
              </Typography>
            </Box>
          </Paper>

          <Box sx={{ mb: 4 }}>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="space-between"
            sx={{ mt: 4 }}
          >
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/"
              size="large"
            >
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleCheckout}
              startIcon={<ShoppingCartIcon />}
              sx={{
                fontWeight: 'bold',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 3
                }
              }}
            >
              Checkout
            </Button>
          </Stack>
        </>
      )}
    </Container>
  );
};

export default Cart;