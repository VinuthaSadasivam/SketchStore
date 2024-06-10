import React from 'react'
import { shades } from '../../theme'
import { Box, IconButton, Typography } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  const navigate = useNavigate();
 
  return (
    <Box>
      <Box alignItems="center" justifyContent="center" display="flex">
        <IconButton>
          <a
            href="https://www.instagram.com/vinu_arts?igsh=Y3l1ZXd5MDd6NWNj"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram
              sx={{
                fontSize: "50px",
                color: shades.neutral[900],
                "&:hover": { cursor: "pointer", color: shades.neutral[700] },
              }}
            />
          </a>
        </IconButton>
        <Typography
          fontFamily="Open Sans, sans-serif"
          fontSize="20px"
          color={shades.neutral[900]}
          marginLeft="10px"
          onClick={() => navigate("/contact")}
          sx={{
            "&:hover": { cursor: "pointer", color: shades.neutral[700] },
          }}
        >
          Contact
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        backgroundColor={shades.neutral[200]}
        height="50px"
      >
        <Typography
          variant="h6"
          fontFamily="Open Sans, sans-serif"
          fontSize="12px"
          color={`${shades.neutral[900]}`}
          marginLeft="10px"
        >
          © {year} Vinutha
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer