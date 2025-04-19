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
            gap: 1,
            width: { xs: '100%', md: '50%' },
            alignItems: 'stretch'
          }}
        >
          <TextField
            label="Your Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            fullWidth
            InputProps={{
              startAdornment: <MailOutlineIcon sx={{ mr: 1, color: 'primary.main' }} />,
            }}
            sx={{
              bgcolor: 'white',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.light',
                },
              },
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
              '&:hover': {
                bgcolor: 'secondary.light',
              }
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
