import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Box, Typography, Button, Paper } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Link as RouterLink } from 'react-router-dom';
import CartAccessDenied from './CartAccessDenied';

const ProtectedRoute = ({ children, requireAuth = true, limitedContent }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  // If authentication is required and user is not authenticated, redirect to login
  if (requireAuth && !isAuthenticated()) {
    // Special case for cart page
    if (location.pathname === '/cart') {
      return <CartAccessDenied />;
    }

    // If limitedContent is provided, show that instead of redirecting
    if (limitedContent) {
      return (
        <Box sx={{ py: 4 }}>
          {limitedContent}

          <Paper
            elevation={3}
            sx={{
              p: 4,
              mt: 4,
              textAlign: 'center',
              borderRadius: 2,
              background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
              maxWidth: 'md',
              mx: 'auto'
            }}
          >
            <LockIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h5" component="h2" color="primary.dark" gutterBottom fontWeight="bold">
              Full Content Locked
            </Typography>
            <Typography variant="body1" paragraph>
              Please log in to view the complete content and access all features.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                component={RouterLink}
                to={`/login?redirect=${location.pathname}`}
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mr: 2,
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
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
                to={`/signup?redirect=${location.pathname}`}
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Paper>
        </Box>
      );
    }

    // Redirect to login page with the return url
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  // If we're here, either the user is authenticated or authentication is not required
  return children;
};

export default ProtectedRoute;
