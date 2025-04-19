import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper,
  Divider,
  Breadcrumbs,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Terms = () => {
  // Last updated date
  const lastUpdated = "April 15, 2023";
  
  // Terms sections
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <GavelIcon color="primary" fontSize="large" />,
      content: `
        Welcome to GreenThumb Cannabis ("Company", "we", "our", "us")!

        These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at www.greenthumb.com (together or individually "Service") operated by GreenThumb Cannabis.

        Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.

        Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.

        If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@greenthumb.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
      `
    },
    {
      id: "communications",
      title: "Communications",
      content: `
        By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at support@greenthumb.com.
      `
    },
    {
      id: "purchases",
      title: "Purchases",
      icon: <PaymentIcon color="primary" fontSize="large" />,
      content: `
        If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.

        You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.

        We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.

        We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.

        We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
      `
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      icon: <LocalShippingIcon color="primary" fontSize="large" />,
      content: `
        GreenThumb Cannabis ships to all 50 U.S. states and select international locations where our products are legal. Please check your local laws before ordering.

        Domestic orders are typically processed within 1-2 business days and delivered within 3-7 business days, depending on your location. International orders may take 7-14 business days for delivery, subject to customs processing.

        We offer standard shipping, expedited shipping, and overnight delivery options at checkout. Shipping costs are calculated based on weight, dimensions, and destination.

        You will receive a shipping confirmation email with tracking information once your order has been shipped. We are not responsible for delays caused by customs, weather conditions, or other circumstances beyond our control.

        For certain products, signature confirmation may be required upon delivery. Please ensure someone is available to receive the package or consider shipping to a location where someone will be present.
      `
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      content: `
        We accept returns of unopened products within 30 days of delivery. To initiate a return, please contact our customer service team with your order number and reason for the return.

        Refunds will be processed within 5-7 business days after we receive and inspect the returned items. Refunds will be issued to the original payment method.

        For seed products, we offer a germination guarantee. If less than 80% of your seeds germinate when following our germination guide, contact us within 60 days of purchase with photos of the failed germination, and we'll replace them free of charge.

        We do not accept returns of opened seed packages due to the nature of the product.

        Shipping costs are non-refundable unless the return is due to our error (damaged, defective, or incorrect item).
      `
    },
    {
      id: "content",
      title: "Content",
      content: `
        Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on or through Service, including its legality, reliability, and appropriateness.

        By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.

        You retain any and all of your rights to any Content you submit, post or display on or through Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through Service. However, by posting Content using Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through Service. You agree that this license includes the right for us to make your Content available to other users of Service, who may also use your Content subject to these Terms.

        GreenThumb Cannabis has the right but not the obligation to monitor and edit all Content provided by users.
      `
    },
    {
      id: "prohibited-uses",
      title: "Prohibited Uses",
      content: `
        You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:

        1. In any way that violates any applicable national or international law or regulation.
        2. For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.
        3. To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.
        4. To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.
        5. In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
        6. To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.

        Additionally, you agree not to:

        1. Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party's use of Service, including their ability to engage in real time activities through Service.
        2. Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.
        3. Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.
        4. Use any device, software, or routine that interferes with the proper working of Service.
        5. Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.
        6. Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.
        7. Attack Service via a denial-of-service attack or a distributed denial-of-service attack.
        8. Take any action that may damage or falsify Company rating.
        9. Otherwise attempt to interfere with the proper working of Service.
      `
    },
    {
      id: "age-restriction",
      title: "Age Restriction",
      content: `
        Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.

        Due to the nature of our products, we strictly enforce age verification procedures. We may request additional documentation to verify your age before processing your order.
      `
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      content: `
        Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of GreenThumb Cannabis and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of GreenThumb Cannabis.
      `
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      icon: <SecurityIcon color="primary" fontSize="large" />,
      content: `
        We care about data privacy and security. Please review our Privacy Policy at www.greenthumb.com/privacy. By using Service, you agree to be bound by our Privacy Policy, which is incorporated into these Terms. Please be advised the Service is hosted in the United States. If you access the Service from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Service, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
      `
    },
    {
      id: "changes",
      title: "Changes To Terms",
      content: `
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, in whole or in part, please stop using the website and the Service.
      `
    },
    {
      id: "contact",
      title: "Contact Us",
      content: `
        If you have any questions about these Terms, please contact us:

        By email: legal@greenthumb.com
        By phone: (800) GREEN-THUMB
        By mail: 123 Green Street, Portland, OR 97205, United States
      `
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
          <Typography color="text.primary">Terms of Service</Typography>
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
          Terms of Service
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
          Last updated: {lastUpdated}
        </Typography>
      </Box>

      {/* Table of Contents */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 3, 
          mb: 4, 
          borderRadius: 2,
          animation: 'fadeInUp 0.8s ease-out 0.2s both',
          '@keyframes fadeInUp': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        }}
      >
        <Typography variant="h5" component="h2" color="primary" gutterBottom fontWeight="bold">
          Table of Contents
        </Typography>
        <List dense>
          {sections.map((section, index) => (
            <ListItem 
              key={index} 
              component="a" 
              href={`#${section.id}`}
              sx={{ 
                py: 0.5,
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(76, 175, 80, 0.08)',
                  transform: 'translateX(5px)'
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <ArrowRightIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={section.title} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Terms Content */}
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mb: 6, 
          borderRadius: 2,
          animation: 'fadeInUp 0.8s ease-out 0.4s both',
        }}
      >
        {sections.map((section, index) => (
          <Box 
            key={index} 
            id={section.id}
            sx={{ 
              mb: 4,
              scrollMarginTop: '100px'
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2,
                mb: 2
              }}
            >
              {section.icon && (
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  bgcolor: 'rgba(76, 175, 80, 0.1)',
                }}>
                  {section.icon}
                </Box>
              )}
              <Typography 
                variant="h5" 
                component="h2" 
                color="primary.dark" 
                fontWeight="bold"
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #1B5E20, #4CAF50)',
                    borderRadius: '2px',
                  }
                }}
              >
                {section.title}
              </Typography>
            </Box>
            
            <Typography 
              variant="body1" 
              component="div" 
              sx={{ 
                pl: section.icon ? 8 : 0,
                color: 'text.secondary',
                lineHeight: 1.7,
                whiteSpace: 'pre-line'
              }}
            >
              {section.content}
            </Typography>
            
            {index < sections.length - 1 && (
              <Divider sx={{ my: 4 }} />
            )}
          </Box>
        ))}
      </Paper>
    </Container>
  );
};

export default Terms;
