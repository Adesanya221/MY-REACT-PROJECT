import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import AuthRequiredNotification from './AuthRequiredNotification';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// Container is not used in this component
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AnimatedLogo from './AnimatedLogo';
import { keyframes } from '@mui/system';


// Define a subtle glow animation for the header
const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(129, 199, 132, 0.2); }
  50% { box-shadow: 0 0 20px rgba(129, 199, 132, 0.4); }
  100% { box-shadow: 0 0 10px rgba(129, 199, 132, 0.2); }
`;

// Pages where the header should not be fixed
const NON_FIXED_HEADER_PATHS = [
  '/login',
  '/signup'
];

const Header = () => {
  const { getTotalItems } = useCart();
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the header should be fixed based on current path
  const [isFixed, setIsFixed] = useState(true);

  // State for menu and notifications
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser] = useState(null);
  const [showAuthNotification, setShowAuthNotification] = useState(false);

  // Update fixed state based on current path
  useEffect(() => {
    const shouldBeFixed = !NON_FIXED_HEADER_PATHS.includes(location.pathname);
    setIsFixed(shouldBeFixed);
  }, [location.pathname]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = async () => {
    await logout();
    handleCloseNavMenu();
    navigate('/');
  };

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const authPages = [
    { name: 'Login', path: '/login' },
    { name: 'Sign Up', path: '/signup' },
  ];

  // Handle closing the auth notification
  const handleCloseAuthNotification = () => {
    setShowAuthNotification(false);
  };

  return (
    <>
      {/* Auth Required Notification Dialog */}
      <AuthRequiredNotification
        open={showAuthNotification}
        onClose={handleCloseAuthNotification}
        productName=""
        redirectPath="/cart"
      />
    <AppBar
      position={isFixed ? "fixed" : "static"}
      sx={{
        mb: 2,
        background: 'linear-gradient(90deg, #1B5E20 0%, #2E7D32 100%)',
        animation: `${glow} 5s infinite ease-in-out`,
        width: '100%',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(129, 199, 132, 0.8), transparent)',
        }
      }}
    >
      <Box sx={{ width: '100%', px: 2 }}>
        <Toolbar disableGutters sx={{ width: '100%', justifyContent: 'space-between' }}>
          {/* Left Section: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Desktop Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <AnimatedLogo />
            </Box>

            {/* Mobile Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: { xs: 'flex', md: 'none' },
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <AnimatedLogo variant="minimal" />
            </Box>
          </Box>

          {/* Mobile Menu (Moved to right section) */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                borderRadius: 2,
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                border: '1px solid rgba(129, 199, 132, 0.2)',
                mt: 1.5,
                overflow: 'hidden',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #1B5E20, #4CAF50)',
                }
              }
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                component={RouterLink}
                to={page.path}
                sx={{
                  py: 1.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'rgba(76, 175, 80, 0.1)',
                  }
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    '&:hover': { pl: 0.5 }
                  }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
            <Divider sx={{
              my: 1.5,
              borderColor: 'rgba(129, 199, 132, 0.2)',
              width: '90%',
              mx: 'auto'
            }} />
            {!isAuthenticated() ? (
              // Show login/signup buttons if not authenticated
              authPages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  sx={{
                    py: 1.5,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: page.name === 'Sign Up' ? 'rgba(255, 193, 7, 0.1)' : 'rgba(76, 175, 80, 0.1)',
                    }
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color: page.name === 'Sign Up' ? 'secondary.main' : 'inherit',
                      fontWeight: page.name === 'Sign Up' ? 'bold' : 500,
                      transition: 'all 0.2s ease',
                      '&:hover': { pl: 0.5 }
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))
            ) : (
              // Show logout button if authenticated
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  handleLogout();
                }}
                sx={{
                  py: 1.5,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'rgba(76, 175, 80, 0.1)',
                  }
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    '&:hover': { pl: 0.5 }
                  }}
                >
                  Logout
                </Typography>
              </MenuItem>
            )}
          </Menu>

          {/* Empty middle section to push content to sides */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right Section: Navigation and Cart */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Navigation (Desktop only) */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 2
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    mx: 1,
                    my: 2,
                    color: 'white',
                    display: 'block',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}

              {!isAuthenticated() ? (
                // Show login/signup buttons if not authenticated
                authPages.map((page) => (
                  <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      mx: 1,
                      my: 2,
                      color: page.name === 'Sign Up' ? 'secondary.main' : 'white',
                      fontWeight: page.name === 'Sign Up' ? 'bold' : 'normal',
                      border: page.name === 'Sign Up' ? 1 : 0,
                      borderColor: 'secondary.main',
                      '&:hover': {
                        bgcolor: page.name === 'Sign Up' ? 'secondary.main' : 'rgba(255,255,255,0.1)',
                        color: page.name === 'Sign Up' ? 'white' : 'white',
                      }
                    }}
                  >
                    {page.name}
                  </Button>
                ))
              ) : (
                // Show user info and logout button if authenticated
                <Button
                  onClick={handleLogout}
                  sx={{
                    mx: 1,
                    my: 2,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  Logout
                </Button>
              )}
            </Box>

            {/* Mobile Menu Button (Moved from left section) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  background: 'linear-gradient(145deg, #2E7D32 0%, #1B5E20 100%)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.1) inset',
                  borderRadius: '50%',
                  p: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.3), 0 0 4px rgba(255,255,255,0.2) inset',
                  },
                  '&:active': {
                    transform: 'translateY(1px)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), 0 0 2px rgba(255,255,255,0.1) inset',
                  }
                }}
              >
                <MenuIcon sx={{ fontSize: '1.2rem' }} />
              </IconButton>
            </Box>

            {/* Cart Icon */}
            <Box>
              <IconButton
                component={isAuthenticated() ? RouterLink : 'button'}
                to={isAuthenticated() ? "/cart" : undefined}
                onClick={() => {
                  if (!isAuthenticated()) {
                    setShowAuthNotification(true);
                  }
                }}
                aria-label="cart"
                sx={{
                  color: 'white',
                  background: 'linear-gradient(145deg, #2E7D32 0%, #1B5E20 100%)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 0 4px rgba(255,255,255,0.1) inset',
                  borderRadius: '50%',
                  p: 1,
                  ml: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.3), 0 0 4px rgba(255,255,255,0.2) inset',
                  },
                  '&:active': {
                    transform: 'translateY(1px)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), 0 0 2px rgba(255,255,255,0.1) inset',
                  }
                }}
              >
                <Badge
                  badgeContent={getTotalItems()}
                  color="secondary"
                  sx={{
                    '& .MuiBadge-badge': {
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      fontWeight: 'bold',
                    }
                  }}
                >
                  <ShoppingCartIcon sx={{ fontSize: '1.2rem' }} />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
    </>
  );
};

export default Header;