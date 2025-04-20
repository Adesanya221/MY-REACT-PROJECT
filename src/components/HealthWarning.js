import React from 'react';
import { Box, Typography, Tooltip, IconButton } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const HealthWarning = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'inline-block', verticalAlign: 'middle', ml: 1 }}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <Typography sx={{ p: 1, fontSize: '0.75rem' }}>
            WARNING: Smoking cannabis products can expose you to chemicals that are known to cause cancer and may increase your risk of dying young.
          </Typography>
        }
      >
        <IconButton 
          onClick={handleTooltipOpen}
          size="small"
          sx={{ 
            color: 'warning.main',
            p: 0.5,
            '&:hover': {
              bgcolor: 'rgba(255, 152, 0, 0.08)'
            }
          }}
        >
          <WarningAmberIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default HealthWarning;
