import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import testimonials from '../data/testimonials';

const Testimonials = () => {
  // Theme is used implicitly through the MUI components

  return (
    <Box sx={{ mb: 8, py: 6, bgcolor: 'secondary.light', borderRadius: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          What Our Customers Say
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: 'auto' }}
        >
          Don't just take our word for it - hear from some of our satisfied customers!
          Our plants have helped bring joy and life to homes across the country.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ px: { xs: 2, md: 4 } }}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={6} key={testimonial.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                pt: 2,
                boxShadow: 2,
                '&:hover': {
                  boxShadow: 4,
                  transform: 'translateY(-5px)'
                },
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  color: 'primary.light',
                  opacity: 0.3,
                  transform: 'scale(2)'
                }}
              >
                <FormatQuoteIcon fontSize="large" />
              </Box>
              <CardContent sx={{ pt: 4, px: 4, pb: 3, zIndex: 1 }}>
                <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
                  "{testimonial.text}"
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.location}
                    </Typography>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
