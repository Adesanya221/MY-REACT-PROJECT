import React from 'react';
import { useCart } from '../context/CartContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const ProductCard = ({ plant }) => {
  const { cartItems, addToCart } = useCart();

  // Check if this plant is already in the cart
  const isInCart = cartItems.some(item => item.id === plant.id);

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: 'perspective(1000px) rotateY(0deg)',
        '&:hover': {
          transform: 'perspective(1000px) rotateY(5deg) translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.1)',
          '& .card-media': {
            transform: 'scale(1.08)',
          },
          '& .card-chip': {
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {plant.featured && (
          <Chip
            label="Featured"
            color="primary"
            size="small"
            className="card-chip"
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              fontWeight: 'bold',
              zIndex: 1,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)',
                borderRadius: 'inherit',
                zIndex: -1
              }
            }}
          />
        )}
        <CardMedia
          component="img"
          height="180"
          image={plant.image}
          alt={plant.name}
          className="card-media"
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            filter: 'brightness(0.95)',
            '&:hover': {
              filter: 'brightness(1.05)'
            }
          }}
        />
      </Box>

      <CardContent sx={{
        flexGrow: 1,
        pt: 2,
        background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(76,175,80,0.05) 100%)',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(76,175,80,0.08) 100%)'
        }
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              mb: 0,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -2,
                left: 0,
                width: '30%',
                height: '2px',
                background: 'linear-gradient(90deg, #4CAF50, transparent)',
                transition: 'width 0.3s ease',
                opacity: 0.7,
                borderRadius: '1px'
              },
              '&:hover::after': {
                width: '70%'
              }
            }}
          >
            {plant.name}
          </Typography>
          <Typography variant="h6" color="primary" fontWeight="bold">
            ${plant.price.toFixed(2)}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={plant.rating || 4.5} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({plant.rating || 4.5})
          </Typography>
        </Box>

        <Chip
          label={plant.category}
          size="small"
          variant="outlined"
          sx={{
            mb: 1.5,
            fontSize: '0.75rem',
            borderRadius: '4px',
            transition: 'all 0.3s ease',
            borderColor: 'rgba(76, 175, 80, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(76, 175, 80, 0.08)',
              borderColor: 'rgba(76, 175, 80, 0.8)',
              transform: 'translateY(-2px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }
          }}
        />

        {plant.description && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
            {plant.description.length > 80 ? `${plant.description.substring(0, 80)}...` : plant.description}
          </Typography>
        )}
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => addToCart(plant)}
          disabled={isInCart}
          startIcon={isInCart ? <CheckCircleIcon /> : <AddShoppingCartIcon />}
          sx={{
            py: 1,
            fontWeight: isInCart ? 'normal' : 'bold',
            bgcolor: isInCart ? 'success.main' : 'primary.main',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: isInCart ? 'success.dark' : 'primary.dark',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
            },
            '&:active': {
              transform: 'translateY(1px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }
          }}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;