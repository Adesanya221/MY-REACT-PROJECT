import React from 'react';
import { useCart } from '../context/CartContext';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        mb: 2,
        p: 2,
        alignItems: isMobile ? 'stretch' : 'center',
      }}
      elevation={2}
    >
      <CardMedia
        component="img"
        sx={{
          width: isMobile ? '100%' : 80,
          height: isMobile ? 100 : 80,
          objectFit: 'cover',
          borderRadius: 1,
          mr: isMobile ? 0 : 2,
          mb: isMobile ? 2 : 0
        }}
        image={item.image}
        alt={item.name}
      />

      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price.toFixed(2)}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: isMobile ? 2 : 0,
          justifyContent: isMobile ? 'space-between' : 'flex-end',
          width: isMobile ? '100%' : 'auto',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="small"
            onClick={() => decreaseQuantity(item.id)}
            sx={{
              border: 1,
              borderColor: 'primary.main',
              color: 'primary.main',
              p: 0.5,
              mr: 1
            }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>

          <Typography sx={{ minWidth: 20, textAlign: 'center' }}>
            {item.quantity}
          </Typography>

          <IconButton
            size="small"
            onClick={() => increaseQuantity(item.id)}
            sx={{
              border: 1,
              borderColor: 'primary.main',
              color: 'primary.main',
              p: 0.5,
              ml: 1,
              mr: 2
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>

        <Typography
          variant="body1"
          fontWeight="bold"
          color="primary.main"
          sx={{ mx: 2 }}
        >
          ${(item.price * item.quantity).toFixed(2)}
        </Typography>

        <IconButton
          color="error"
          onClick={() => removeFromCart(item.id)}
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CartItem;