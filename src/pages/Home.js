import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { keyframes } from '@mui/system';

// Enhanced custom components
import EnhancedHeroCarousel from '../components/EnhancedHeroCarousel';
import EnhancedFeaturedProducts from '../components/EnhancedFeaturedProducts';
import CategoryBrowser from '../components/CategoryBrowser';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import StatsCounter from '../components/StatsCounter';
import SpecialOffer from '../components/SpecialOffer';
import FuturisticElements from '../components/FuturisticElements';

// Define subtle background animation
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;



const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{
      overflow: 'hidden', // Prevent horizontal scrollbar from animations
      position: 'relative',
      background: 'linear-gradient(135deg, rgba(27,94,32,0.03) 0%, rgba(129,199,132,0.05) 50%, rgba(27,94,32,0.03) 100%)',
      backgroundSize: '400% 400%',
      animation: `${gradientShift} 15s ease infinite`,
    }}>
      {/* Enhanced Hero Carousel Section */}
      <EnhancedHeroCarousel />

      <Container maxWidth="lg">
        {/* Special Offer with Countdown */}
        <SpecialOffer />

        {/* Enhanced Featured Products Section */}
        <EnhancedFeaturedProducts />

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* Category Browser Section */}
        <CategoryBrowser />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Newsletter Section */}
        <Newsletter />
      </Container>

      {/* Futuristic decorative elements */}
      <Box sx={{ position: 'relative', zIndex: 0 }}>
        <FuturisticElements />
      </Box>

      {/* Additional background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: -150,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(129,199,132,0.2) 0%, rgba(129,199,132,0) 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: -150,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(27,94,32,0.1) 0%, rgba(27,94,32,0) 70%)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
    </Box>
  );
};

export default Home;