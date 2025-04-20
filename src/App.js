import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import AnimatedBackground from './components/AnimatedBackground';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <CartProvider>
          <Box className="App" sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Animated background with random cannabis leaves */}
            <AnimatedBackground
              verticalLeafCount={5}
              horizontalLeafCount={4}
              swayingLeafCount={6}
              waveCount={3}
              showRandomLeaves={true}
            />

            {/* Header with animated logo */}
            <Header />

            {/* Main content */}
            <Container component="main" maxWidth="lg" sx={{ py: 2, position: 'relative', zIndex: 1, flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Container>

            {/* Footer with animated green waves */}
            <Footer />
          </Box>
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
