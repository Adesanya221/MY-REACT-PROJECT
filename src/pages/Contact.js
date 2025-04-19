import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Container,
  MenuItem,
  Snackbar,
  Alert,
  Divider,
  Breadcrumbs,
  Link,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link as RouterLink } from 'react-router-dom';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      // Show error message
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form.',
        severity: 'error'
      });
    }
  };
  
  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };
  
  // Contact information
  const contactInfo = [
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: 'Our Location',
      details: [
        '123 Green Street',
        'Portland, OR 97205',
        'United States'
      ]
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: 'Phone Numbers',
      details: [
        'Main: (800) GREEN-THUMB',
        'Support: (800) 123-4567',
        'Wholesale: (800) 765-4321'
      ]
    },
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: 'Email Addresses',
      details: [
        'General: info@greenthumb.com',
        'Support: support@greenthumb.com',
        'Wholesale: wholesale@greenthumb.com'
      ]
    },
    {
      icon: <AccessTimeIcon fontSize="large" color="primary" />,
      title: 'Business Hours',
      details: [
        'Monday-Friday: 9 AM - 5 PM EST',
        'Saturday: 10 AM - 3 PM EST',
        'Sunday: Closed'
      ]
    }
  ];
  
  // Subject options for dropdown
  const subjectOptions = [
    'Product Inquiry',
    'Order Status',
    'Return/Refund',
    'Growing Advice',
    'Wholesale Inquiry',
    'Website Feedback',
    'Other'
  ];

  return (
    <Container maxWidth="lg">
      {/* Page Header with Animation */}
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
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link component={RouterLink} to="/" color="inherit" underline="hover">
            Home
          </Link>
          <Typography color="text.primary">Contact Us</Typography>
        </Breadcrumbs>
        
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
          Contact Us
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
          Have questions or need assistance? We're here to help! Fill out the form below or use one of our contact methods to get in touch with our team.
        </Typography>
      </Box>

      {/* Contact Information Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {contactInfo.map((info, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                height: '100%', 
                borderRadius: 2,
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animation: 'fadeInUp 0.8s ease-out',
                animationFillMode: 'both',
                animationDelay: `${index * 0.1}s`,
                '@keyframes fadeInUp': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' }
                },
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {info.icon}
              </Box>
              <Typography variant="h6" component="h3" color="primary.dark" gutterBottom fontWeight="bold">
                {info.title}
              </Typography>
              <Divider sx={{ my: 1.5, width: '50%', mx: 'auto' }} />
              {info.details.map((detail, i) => (
                <Typography key={i} variant="body2" color="text.secondary" sx={{ my: 0.5 }}>
                  {detail}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Contact Form and Map */}
      <Grid 
        container 
        spacing={4} 
        sx={{ 
          mb: 6,
          animation: 'fadeIn 0.8s ease-out 0.4s both',
        }}
      >
        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 2,
              height: '100%',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            }}
          >
            <Typography variant="h5" component="h2" color="primary" gutterBottom fontWeight="bold">
              Send Us a Message
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Fill out the form below and we'll get back to you as soon as possible.
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    variant="outlined"
                    sx={{ 
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number (Optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    required
                    variant="outlined"
                  >
                    <MenuItem value="">Select a subject</MenuItem>
                    {subjectOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ 
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
                      },
                      '&:active': {
                        transform: 'translateY(1px)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
        
        {/* Map */}
        <Grid item xs={12} md={5}>
          <Paper 
            elevation={3} 
            sx={{ 
              borderRadius: 2,
              height: '100%',
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            }}
          >
            <Box sx={{ p: 0, height: isMobile ? '300px' : '100%', position: 'relative' }}>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  p: 2, 
                  bgcolor: 'rgba(255,255,255,0.9)',
                  zIndex: 1,
                  borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                Our Location
              </Typography>
              <Box 
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178132.74110255178!2d-122.70676087521196!3d45.54760351095434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1651271824088!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GreenThumb Location"
                sx={{ filter: 'grayscale(0.2)' }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* FAQ Section */}
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
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" paragraph>
          Find answers to common questions in our comprehensive FAQ section.
        </Typography>
        <Button 
          component={RouterLink} 
          to="/faq" 
          variant="contained" 
          color="primary"
          sx={{ 
            mt: 1,
            px: 4,
            py: 1,
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
            }
          }}
        >
          View FAQ
        </Button>
      </Paper>

      {/* Snackbar for form submission feedback */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
