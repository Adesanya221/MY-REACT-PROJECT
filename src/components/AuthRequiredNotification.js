import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  Typography, 
  Box,
  Slide,
  Divider,
  Avatar
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Slide transition for dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AuthRequiredNotification = ({ open, onClose, productName, redirectPath = '/products' }) => {
  // Animation states
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);

  // Trigger animations sequentially
  useEffect(() => {
    if (open) {
      const timer1 = setTimeout(() => setShowStep1(true), 300);
      const timer2 = setTimeout(() => setShowStep2(true), 800);
      const timer3 = setTimeout(() => setShowStep3(true), 1300);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    } else {
      setShowStep1(false);
      setShowStep2(false);
      setShowStep3(false);
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="auth-required-dialog"
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          overflow: 'hidden'
        }
      }}
    >
      <DialogTitle 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          py: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5
        }}
      >
        <LockIcon />
        <Typography variant="h6" component="div" fontWeight="bold">
          Sign In Required
        </Typography>
      </DialogTitle>
      
      <DialogContent sx={{ py: 3, px: { xs: 2, sm: 3 } }}>
        <Typography variant="subtitle1" gutterBottom fontWeight="medium" color="primary.dark">
          {productName ? `You're trying to add "${productName}" to your cart.` : "You're trying to add a product to your cart."}
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          To complete your purchase, you'll need to sign in or create an account first.
        </Typography>
        
        <Box sx={{ my: 4 }}>
          <Typography variant="h6" gutterBottom color="text.secondary" sx={{ mb: 2, fontWeight: 'medium' }}>
            Complete these steps to make a purchase:
          </Typography>
          
          {/* Step 1: Sign In */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2.5,
              opacity: showStep1 ? 1 : 0.4,
              transform: showStep1 ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.5s ease',
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: showStep1 ? 'primary.main' : 'grey.300',
                mr: 2,
                boxShadow: showStep1 ? '0 4px 8px rgba(0,0,0,0.15)' : 'none',
                transition: 'all 0.5s ease',
              }}
            >
              <PersonAddIcon />
            </Avatar>
            <Box>
              <Typography variant="body1" fontWeight="bold">
                Sign In or Create Account
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Access your personal shopping cart
              </Typography>
            </Box>
          </Box>
          
          {/* Step 2: Add to Cart */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2.5,
              opacity: showStep2 ? 1 : 0.4,
              transform: showStep2 ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.5s ease',
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: showStep2 ? 'secondary.main' : 'grey.300',
                mr: 2,
                boxShadow: showStep2 ? '0 4px 8px rgba(0,0,0,0.15)' : 'none',
                transition: 'all 0.5s ease',
              }}
            >
              <ShoppingCartIcon />
            </Avatar>
            <Box>
              <Typography variant="body1" fontWeight="bold">
                Add Products to Cart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Build your personalized collection
              </Typography>
            </Box>
          </Box>
          
          {/* Step 3: Complete Payment */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              opacity: showStep3 ? 1 : 0.4,
              transform: showStep3 ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.5s ease',
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: showStep3 ? 'success.main' : 'grey.300',
                mr: 2,
                boxShadow: showStep3 ? '0 4px 8px rgba(0,0,0,0.15)' : 'none',
                transition: 'all 0.5s ease',
              }}
            >
              <PaymentIcon />
            </Avatar>
            <Box>
              <Typography variant="body1" fontWeight="bold">
                Complete Secure Payment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Checkout and receive your products
              </Typography>
            </Box>
          </Box>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Box 
          sx={{ 
            p: 2, 
            bgcolor: 'success.light', 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <CheckCircleIcon color="success" sx={{ fontSize: 40 }} />
          <Typography variant="body2" color="success.dark">
            <strong>Your privacy is protected.</strong> We use secure payment processing and never share your personal information.
          </Typography>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, py: 2, bgcolor: 'grey.50' }}>
        <Button 
          onClick={onClose} 
          color="inherit"
          sx={{ fontWeight: 'medium' }}
        >
          Continue Browsing
        </Button>
        <Button 
          component={RouterLink}
          to={`/login?redirect=${redirectPath}`}
          variant="contained" 
          color="primary"
          sx={{ 
            px: 3,
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
        <Button 
          component={RouterLink}
          to={`/signup?redirect=${redirectPath}`}
          variant="outlined" 
          color="secondary"
          sx={{ 
            px: 3,
            fontWeight: 'bold',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }
          }}
        >
          Create Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AuthRequiredNotification;
