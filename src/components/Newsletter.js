import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert
} from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Subscribing email:', email);
    setOpen(true);
    setEmail('');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Paper
      sx={{
        p: { xs: 3, md: 6 },
        mb: 8,
        bgcolor: 'primary.main',
        color: 'white',
        borderRadius: 2
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'stretch', md: 'center' },
        justifyContent: 'space-between',
        gap: 4
      }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 'bold', mb: 2 }}
          >
            Join Our Cannabis Community
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
            Subscribe to our newsletter for growing tips, legal updates, and first access to new strain releases.
            We'll send you a 10% discount code for your first order!
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 1 },
            width: { xs: '100%', md: '50%' },
            alignItems: 'stretch',
            '& > *': { // Apply to all direct children
              flex: { xs: '1 1 auto', sm: 'unset' } // Full width on mobile
            }
          }}
        >
          <TextField
            placeholder="Enter your email address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            fullWidth
            InputProps={{
              startAdornment: <MailOutlineIcon sx={{ mr: 1, color: 'primary.main' }} />,
              sx: {
                height: '56px', // Ensure consistent height
                pl: 1.5, // Add left padding for better text positioning
                '&::placeholder': {
                  opacity: 1, // Make placeholder more visible
                  verticalAlign: 'middle', // Center vertically
                }
              }
            }}
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.light',
                },
              },
              '& .MuiOutlinedInput-input': {
                paddingLeft: '0.5rem', // Fine-tune text position
                verticalAlign: 'middle', // Center text vertically
              },
              '& .MuiInputBase-input::placeholder': {
                opacity: 0.7,
                color: 'text.secondary',
                verticalAlign: 'middle',
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              bgcolor: 'secondary.main',
              color: 'primary.main',
              fontWeight: 'bold',
              px: 3,
              height: '56px', // Match input field height
              boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'secondary.light',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you for subscribing! Check your email for your discount code.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default Newsletter;
