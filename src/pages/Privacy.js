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
import SecurityIcon from '@mui/icons-material/Security';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import StorageIcon from '@mui/icons-material/Storage';
import ShareIcon from '@mui/icons-material/Share';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Privacy = () => {
  // Last updated date
  const lastUpdated = "April 15, 2023";
  
  // Privacy policy sections
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <PrivacyTipIcon color="primary" fontSize="large" />,
      content: `
        At GreenThumb Cannabis, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.

        This privacy policy applies to personal data we collect from you when you use our website, create an account, make a purchase, sign up for our newsletter, or otherwise interact with us.

        Please read this privacy policy carefully to understand our policies and practices regarding your personal data and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our website. By accessing or using our website, you agree to this privacy policy.
      `
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: <StorageIcon color="primary" fontSize="large" />,
      content: `
        We collect several types of information from and about users of our website, including:

        Personal Information:
        • Contact information (such as name, email address, mailing address, and phone number)
        • Account information (such as username and password)
        • Payment information (such as credit card details and billing address)
        • Order history and preferences
        • Age verification information
        • Any other information you choose to provide

        Non-Personal Information:
        • Browser type and version
        • Operating system
        • IP address
        • Device information
        • Browsing patterns and website usage
        • Referring website addresses

        We collect this information:
        • Directly from you when you provide it to us
        • Automatically as you navigate through the site
        • From third parties, for example, our business partners and analytics providers
      `
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      content: `
        We use the information we collect about you for various purposes, including to:

        • Process and fulfill your orders
        • Create and manage your account
        • Provide customer service and respond to your inquiries
        • Send transactional emails (such as order confirmations and shipping updates)
        • Send marketing communications (if you have opted in)
        • Improve our website and product offerings
        • Personalize your experience
        • Analyze website usage and trends
        • Protect against fraud and unauthorized transactions
        • Comply with legal obligations
        • Enforce our terms and conditions

        We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose.
      `
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: <ShareIcon color="primary" fontSize="large" />,
      content: `
        We may share your personal information with:

        • Service providers who perform services on our behalf (such as payment processors, shipping companies, and marketing agencies)
        • Business partners with whom we jointly offer products or services
        • Law enforcement agencies, regulatory bodies, or other third parties when required by law or to protect our rights
        • Other third parties with your consent or at your direction

        We do not sell, rent, or lease your personal information to third parties. We may share aggregated, non-personal information about our users with third parties for marketing, advertising, or other purposes.

        In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred as part of the transaction. We will notify you of any such change in ownership or control of your personal information.
      `
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      content: `
        We use cookies and similar tracking technologies to track activity on our website and to hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.

        Types of cookies we use:
        • Essential cookies: Necessary for the website to function properly
        • Analytical/performance cookies: Allow us to recognize and count visitors and see how they move around our website
        • Functionality cookies: Enable us to personalize content for you
        • Targeting cookies: Record your visit to our website, the pages you have visited, and the links you have followed

        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.

        We also use Google Analytics and other third-party analytics services to help us understand how our users engage with the website. These services may use cookies and similar technologies to collect information about your use of the website and report website trends.
      `
    },
    {
      id: "data-security",
      title: "Data Security",
      icon: <SecurityIcon color="primary" fontSize="large" />,
      content: `
        We have implemented appropriate technical and organizational measures to protect the security of your personal information. We use encryption, secure socket layer technology (SSL), firewalls, and other security measures to help prevent unauthorized access to your personal information.

        The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our website, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.

        Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our website. Any transmission of personal information is at your own risk.
      `
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: `
        We will retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.

        To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.

        In some circumstances, we may anonymize your personal information so that it can no longer be associated with you, in which case we may use such information without further notice to you.
      `
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: `
        Depending on your location, you may have certain rights regarding your personal information, including:

        • The right to access your personal information
        • The right to rectify inaccurate personal information
        • The right to request the deletion of your personal information
        • The right to restrict the processing of your personal information
        • The right to data portability
        • The right to object to the processing of your personal information
        • The right to withdraw consent at any time

        To exercise any of these rights, please contact us using the contact information provided below. We may need to verify your identity before responding to your request.

        Please note that these rights may be limited in some circumstances, such as where we have a legal obligation to retain certain information.
      `
    },
    {
      id: "california-privacy",
      title: "California Privacy Rights",
      content: `
        If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA).

        You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. You also have the right to request that we delete any of your personal information that we collected from you, subject to certain exceptions.

        To exercise these rights, please contact us using the contact information provided below. We will respond to your request within the timeframe required by applicable law.

        We do not sell personal information to third parties. We may share your personal information with service providers as described in this privacy policy.
      `
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: `
        Our website is not intended for children under 18 years of age. No one under age 18 may provide any personal information to or on the website. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this website.

        If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 18, please contact us.
      `
    },
    {
      id: "changes",
      title: "Changes to Our Privacy Policy",
      content: `
        We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page or by email.

        The date the privacy policy was last revised is identified at the top of the page. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our website and this privacy policy to check for any changes.
      `
    },
    {
      id: "contact",
      title: "Contact Us",
      content: `
        If you have any questions about this privacy policy or our privacy practices, please contact us:

        By email: privacy@greenthumb.com
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
          <Typography color="text.primary">Privacy Policy</Typography>
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
          Privacy Policy
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

      {/* Privacy Policy Content */}
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

export default Privacy;
