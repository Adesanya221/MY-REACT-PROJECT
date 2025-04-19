import React from 'react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Paper,
  Container,
  Divider,
  Breadcrumbs,
  Link
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link as RouterLink } from 'react-router-dom';

const FAQ = () => {
  // FAQ data
  const faqCategories = [
    {
      category: "Products & Ordering",
      questions: [
        {
          question: "How do I know which plant is right for me?",
          answer: "We recommend starting with our beginner-friendly plants if you're new to cannabis cultivation. Each product page includes detailed information about growing difficulty, effects, and recommended environments. You can also contact our support team for personalized recommendations."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and cryptocurrency payments. All transactions are secure and encrypted for your protection."
        },
        {
          question: "How long will shipping take?",
          answer: "Shipping times vary based on your location. Typically, orders are processed within 1-2 business days and delivered within 3-7 business days. Express shipping options are available at checkout."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to countries where cannabis seeds are legal. Please check your local laws before ordering. International shipping may take 7-14 business days depending on customs processing."
        }
      ]
    },
    {
      category: "Growing & Cultivation",
      questions: [
        {
          question: "What growing supplies do I need to get started?",
          answer: "For beginners, we recommend a basic setup including quality soil, proper lighting, ventilation, and pH-balanced water. Our starter kits include everything you need to begin your growing journey."
        },
        {
          question: "How much light do cannabis plants need?",
          answer: "Cannabis plants typically require 18-24 hours of light during the vegetative stage and 12 hours during the flowering stage. The specific requirements may vary by strain, so check the detailed growing instructions provided with your purchase."
        },
        {
          question: "What's the ideal temperature and humidity for growing?",
          answer: "Most cannabis strains thrive in temperatures between 70-85°F (21-29°C) during the day and slightly cooler at night. Humidity should be around 40-70% during vegetation and 40-50% during flowering. Always monitor these conditions for optimal growth."
        },
        {
          question: "How often should I water my plants?",
          answer: "Water your plants when the top inch of soil feels dry to the touch. Overwatering is a common mistake among beginners. The frequency depends on your growing medium, container size, plant size, and environmental conditions."
        }
      ]
    },
    {
      category: "Account & Support",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click on the 'Sign Up' button in the top right corner of our website. Fill in your details, verify your email address, and you're all set! Having an account allows you to track orders, save favorites, and receive personalized recommendations."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "On the login page, click 'Forgot Password?' and follow the instructions sent to your registered email address. If you don't receive the email, check your spam folder or contact our support team."
        },
        {
          question: "How can I contact customer support?",
          answer: "You can reach our customer support team through email at support@greenthumb.com, by phone at 1-800-GREEN-THUMB during business hours (9 AM - 5 PM EST, Monday-Friday), or through the live chat feature on our website."
        },
        {
          question: "Do you offer growing advice or consultations?",
          answer: "Yes! We offer free basic growing advice through our blog and knowledge base. For personalized consultations, we offer virtual sessions with our expert growers at an additional cost. Premium members receive one free consultation per month."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We accept returns of unopened products within 30 days of delivery. Please contact our customer service team to initiate a return. Note that due to the nature of our products, we cannot accept returns of opened seed packages."
        },
        {
          question: "What if my plants don't germinate?",
          answer: "We stand behind the quality of our seeds. If less than 80% of your seeds germinate when following our germination guide, contact us within 60 days of purchase with photos of the failed germination, and we'll replace them free of charge."
        },
        {
          question: "How do I request a refund?",
          answer: "To request a refund, contact our customer service team with your order number and reason for the refund. Approved refunds are processed within 5-7 business days and will be issued to the original payment method."
        },
        {
          question: "Do you offer a satisfaction guarantee?",
          answer: "Yes, we offer a 100% satisfaction guarantee on all our products. If you're not completely satisfied with your purchase for any reason, please contact us within 30 days and we'll make it right."
        }
      ]
    }
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
          <Typography color="text.primary">FAQ</Typography>
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
          Frequently Asked Questions
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
          Find answers to common questions about our products, ordering process, growing tips, and more. 
          Can't find what you're looking for? Contact our support team for assistance.
        </Typography>
      </Box>

      {/* FAQ Content */}
      <Box sx={{ mb: 6 }}>
        {faqCategories.map((category, categoryIndex) => (
          <Paper 
            key={categoryIndex} 
            elevation={3} 
            sx={{ 
              mb: 4, 
              overflow: 'hidden',
              borderRadius: 2,
              animation: 'fadeInUp 0.8s ease-out',
              animationFillMode: 'both',
              animationDelay: `${categoryIndex * 0.2}s`,
              '@keyframes fadeInUp': {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' }
              },
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }
            }}
          >
            {/* Category Header */}
            <Box 
              sx={{ 
                p: 3, 
                bgcolor: 'primary.main', 
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <QuestionAnswerIcon fontSize="large" />
              <Typography variant="h5" component="h2" fontWeight="bold">
                {category.category}
              </Typography>
            </Box>
            
            <Divider />
            
            {/* Questions and Answers */}
            <Box sx={{ p: 2 }}>
              {category.questions.map((faq, faqIndex) => (
                <Accordion 
                  key={faqIndex} 
                  disableGutters 
                  elevation={0}
                  sx={{
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    mb: 1,
                    borderRadius: '4px !important',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
                      bgcolor: 'rgba(76, 175, 80, 0.04)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon color="primary" />}
                    sx={{
                      '&.Mui-expanded': {
                        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                      }
                    }}
                  >
                    <Typography 
                      fontWeight="medium" 
                      color="primary.dark"
                      sx={{ 
                        transition: 'color 0.3s ease',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Contact Section */}
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
          Still Have Questions?
        </Typography>
        <Typography variant="body1" paragraph>
          Our customer support team is here to help. Reach out to us through any of the channels below.
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: 3,
            mt: 3 
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              Email
            </Typography>
            <Typography variant="body2">
              support@greenthumb.com
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              Phone
            </Typography>
            <Typography variant="body2">
              1-800-GREEN-THUMB
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              Hours
            </Typography>
            <Typography variant="body2">
              9 AM - 5 PM EST, Monday-Friday
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default FAQ;
