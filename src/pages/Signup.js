import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Link,
  InputAdornment,
  IconButton,
  Divider,
  Alert,
  Checkbox,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormHelperText,
  Select,
  MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Styled components
const SignupPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius * 2,
}));



const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '50%',
  width: 56,
  height: 56,
  marginBottom: theme.spacing(2),
}));

const PasswordStrengthBar = styled(Box)(({ strength, theme }) => {
  const getColor = () => {
    if (strength < 2) return theme.palette.error.main;
    if (strength < 3) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  return {
    height: 4,
    width: '100%',
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: `${(strength / 4) * 100}%`,
      backgroundColor: getColor(),
      borderRadius: theme.shape.borderRadius,
      transition: 'width 0.3s ease, background-color 0.3s ease',
    },
  };
});

const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    state: '',
    agreeTerms: false,
    receiveUpdates: true
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Calculate password strength when password changes
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return 'Very Weak';
    if (passwordStrength === 1) return 'Weak';
    if (passwordStrength === 2) return 'Fair';
    if (passwordStrength === 3) return 'Good';
    return 'Strong';
  };

  const handleNext = () => {
    setError('');

    // Validate first step
    if (activeStep === 0) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        setError('Please fill in all required fields');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        return;
      }
    }

    // Validate second step
    if (activeStep === 1) {
      if (!formData.password || !formData.confirmPassword) {
        setError('Please fill in all required fields');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      if (passwordStrength < 2) {
        setError('Please choose a stronger password');
        return;
      }
    }

    // Validate third step
    if (activeStep === 2) {
      if (!formData.birthDate || !formData.state) {
        setError('Please fill in all required fields');
        return;
      }

      if (!formData.agreeTerms) {
        setError('You must agree to the Terms and Conditions');
        return;
      }

      // Submit the form
      handleSubmit();
      return;
    }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setError('');
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted with:', formData);
      setIsSubmitting(false);
      setActiveStep(3); // Success step
    }, 1500);
  };

  // Step content
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Personal Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Create Password
            </Typography>

            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 1 }}
            />

            <PasswordStrengthBar strength={passwordStrength} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                Password Strength:
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 'bold',
                  color: passwordStrength < 2 ? 'error.main' :
                         passwordStrength < 3 ? 'warning.main' : 'success.main'
                }}
              >
                {getPasswordStrengthText()}
              </Typography>
            </Box>

            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1, mb: 3 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Password Requirements:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { text: 'At least 8 characters', met: formData.password.length >= 8 },
                  { text: 'At least one uppercase letter', met: /[A-Z]/.test(formData.password) },
                  { text: 'At least one number', met: /[0-9]/.test(formData.password) },
                  { text: 'At least one special character', met: /[^A-Za-z0-9]/.test(formData.password) }
                ].map((req, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{
                        mr: 1,
                        color: req.met ? 'success.main' : 'text.disabled',
                        opacity: req.met ? 1 : 0.5
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: req.met ? 'text.primary' : 'text.secondary',
                        textDecoration: req.met ? 'none' : 'none'
                      }}
                    >
                      {req.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Additional Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="birthDate"
                  label="Date of Birth"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  helperText="You must be 21 or older to register"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <Select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    displayEmpty
                    renderValue={formData.state ? undefined : () => "Select Your State"}
                  >
                    {['California', 'Colorado', 'Massachusetts', 'Michigan', 'Nevada', 'Oregon', 'Washington'].map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>We only ship to states where cannabis is legal</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeTerms"
                      color="primary"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I agree to the{' '}
                      <Link component={RouterLink} to="/terms" variant="body2">
                        Terms and Conditions
                      </Link>{' '}
                      and{' '}
                      <Link component={RouterLink} to="/privacy" variant="body2">
                        Privacy Policy
                      </Link>
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="receiveUpdates"
                      color="primary"
                      checked={formData.receiveUpdates}
                      onChange={handleChange}
                    />
                  }
                  label="I want to receive marketing promotions and updates via email"
                />
              </Grid>
            </Grid>
          </>
        );
      case 3:
        return (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Registration Complete!
            </Typography>
            <Typography variant="body1" paragraph>
              Thank you for creating an account with GreenThumb Cannabis.
            </Typography>
            <Typography variant="body1" paragraph>
              We've sent a confirmation email to <strong>{formData.email}</strong>.
              Please verify your email to complete the registration process.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/login"
              size="large"
              sx={{ mt: 2 }}
            >
              Go to Login
            </Button>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Grid container justifyContent="center">
        {/* Signup form */}
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <SignupPaper elevation={3}>
            <IconWrapper>
              <PersonAddOutlinedIcon fontSize="large" />
            </IconWrapper>

            <Typography variant="h4" component="h1" gutterBottom sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.75rem', sm: '2.125rem' } // Smaller on mobile
            }}>
              Create Account
            </Typography>

            {activeStep < 3 && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
                Join our community and get access to exclusive products and offers
              </Typography>
            )}

            {error && (
              <Alert severity="error" sx={{ width: '100%', mb: 3 }}>
                {error}
              </Alert>
            )}

            {activeStep < 3 && (
              <Stepper
                activeStep={activeStep}
                sx={{
                  width: '100%',
                  mb: 4,
                  '& .MuiStepLabel-label': {
                    // Hide step labels on very small screens
                    display: { xs: 'none', sm: 'block' }
                  }
                }}
              >
                <Step>
                  <StepLabel>Account</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Security</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Details</StepLabel>
                </Step>
              </Stepper>
            )}

            <Box sx={{ width: '100%', mb: 3 }}>
              {getStepContent(activeStep)}
            </Box>

            {activeStep < 3 && (
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 0 }
              }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    mr: { sm: 1 },
                    order: { xs: 2, sm: 1 } // Change order on mobile
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  sx={{
                    order: { xs: 1, sm: 2 } // Change order on mobile
                  }}
                  fullWidth={{
                    xs: true,
                    sm: false
                  }}
                >
                  {activeStep === 2 ? (isSubmitting ? 'Creating Account...' : 'Create Account') : 'Next'}
                </Button>
              </Box>
            )}

            {activeStep < 3 && (
              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Typography variant="body2">
                  Already have an account?{' '}
                  <Link component={RouterLink} to="/login" variant="body2" sx={{ fontWeight: 'bold' }}>
                    Sign In
                  </Link>
                </Typography>
              </Box>
            )}
          </SignupPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
