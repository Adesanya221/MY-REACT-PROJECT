import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
// Using alternative icons that are available in the current MUI version
import CheckIcon from '@mui/icons-material/Check';
import NatureIcon from '@mui/icons-material/Nature';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link as RouterLink } from 'react-router-dom';

// Define animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components
const AnimatedSection = styled(Box)(({ theme, delay = 0 }) => ({
  animation: `${fadeIn} 0.8s ease-out ${delay}s both`,
}));

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const TeamMemberCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const GreenHighlight = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
}));

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Ph.D. in Botany with 15+ years of experience in cannabis research and cultivation.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Operations Officer',
      bio: 'Former pharmaceutical executive with expertise in regulatory compliance and supply chain management.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Amara Williams',
      role: 'Head of Product Development',
      bio: 'Master Cultivator with a background in developing award-winning cannabis strains.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'James Rodriguez',
      role: 'Chief Science Officer',
      bio: 'Biochemist specializing in cannabinoid research and therapeutic applications.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Company values
  const companyValues = [
    {
      title: 'Quality',
      description: 'We maintain the highest standards in cultivation, processing, and product development.',
      icon: <SecurityIcon fontSize="large" color="primary" />
    },
    {
      title: 'Sustainability',
      description: 'Our eco-friendly practices minimize environmental impact while maximizing plant health.',
      icon: <NatureIcon fontSize="large" color="primary" />
    },
    {
      title: 'Education',
      description: 'We believe in empowering consumers with knowledge about cannabis and its benefits.',
      icon: <SchoolIcon fontSize="large" color="primary" />
    },
    {
      title: 'Community',
      description: 'We actively support and engage with the communities we serve through various initiatives.',
      icon: <PeopleIcon fontSize="large" color="primary" />
    }
  ];

  return (
    <Box sx={{ pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
          mb: 6,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.1)',
            zIndex: 0
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.05)',
            zIndex: 0
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <Typography
              variant="overline"
              component="div"
              sx={{
                mb: 1,
                fontWeight: 'bold',
                letterSpacing: 2
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Pioneering Cannabis Excellence
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mb: 4,
                opacity: 0.9
              }}
            >
              At GreenThumb Cannabis, we're dedicated to providing premium cannabis products
              through sustainable cultivation and innovative research.
            </Typography>
          </AnimatedSection>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Our Story Section */}
        <AnimatedSection delay={0.2}>
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Our Story
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2018, <GreenHighlight>GreenThumb Cannabis</GreenHighlight> began with a simple mission: to provide access to high-quality,
                legal cannabis products while promoting education and responsible use. What started as a small operation
                with just three employees has grown into a leading provider in the industry.
              </Typography>
              <Typography variant="body1" paragraph>
                Our journey began when our founder, Dr. Sarah Johnson, recognized the need for scientifically-backed cannabis
                products in the emerging legal market. With her background in botany and passion for plant medicine,
                she assembled a team of experts dedicated to cultivating exceptional cannabis while adhering to the
                highest standards of quality and safety.
              </Typography>
              <Typography variant="body1">
                Today, we operate state-of-the-art facilities across the country, employing over 100 passionate
                individuals who share our commitment to excellence, sustainability, and community engagement.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1536819114556-1e10f967fb61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Cannabis cultivation"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 4,
                  height: { xs: 300, md: 400 },
                  objectFit: 'cover'
                }}
              />
            </Grid>
          </Grid>
        </AnimatedSection>

        {/* Our Mission Section */}
        <AnimatedSection delay={0.3}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <LocalFloristIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
              We strive to elevate the cannabis experience through innovation, education, and community engagement,
              while maintaining an unwavering commitment to quality, sustainability, and responsible consumption.
            </Typography>

            <Paper
              elevation={3}
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: 2,
                maxWidth: 900,
                mx: 'auto'
              }}
            >
              <List>
                {[
                  'Cultivate premium cannabis products using sustainable and innovative methods',
                  'Educate consumers about the benefits and responsible use of cannabis',
                  'Support research that advances our understanding of cannabis and its applications',
                  'Advocate for fair and sensible cannabis policies',
                  'Create a positive impact in the communities we serve'
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </AnimatedSection>

        {/* Our Values Section */}
        <AnimatedSection delay={0.4}>
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
              Our Values
            </Typography>

            <Grid container spacing={3}>
              {companyValues.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <ValueCard elevation={2}>
                    <Box sx={{ mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </ValueCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </AnimatedSection>

        {/* Divider */}
        <Divider sx={{ my: 8 }} />

        {/* Our Team Section */}
        <AnimatedSection delay={0.5}>
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
              Our Leadership Team
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 4 }}>
              Meet the experts behind GreenThumb Cannabis who bring decades of combined experience in botany,
              agriculture, pharmaceuticals, and business management.
            </Typography>

            <Grid container spacing={4}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <TeamMemberCard>
                    <CardMedia
                      component="img"
                      height="240"
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle2" color="primary" gutterBottom>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.bio}
                      </Typography>
                    </CardContent>
                  </TeamMemberCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection delay={0.6}>
          <Box
            sx={{
              textAlign: 'center',
              py: 6,
              px: 4,
              bgcolor: 'primary.light',
              borderRadius: 2,
              color: 'primary.contrastText',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background decoration */}
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.1)',
                zIndex: 0
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -30,
                left: -30,
                width: 150,
                height: 150,
                borderRadius: '50%',
                bgcolor: 'rgba(255,255,255,0.05)',
                zIndex: 0
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                Join Our Community
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
                Discover our premium cannabis products and become part of our growing community of enthusiasts and advocates.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component={RouterLink}
                to="/products"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 'bold',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: 4
                  },
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
              >
                Explore Our Products
              </Button>
            </Box>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default About;
