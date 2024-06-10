import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBagOutlined, Menu as MenuIcon } from "@mui/icons-material";
import { shades } from "../../theme";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../State";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    handleMenuClose();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="70px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          display="flex"
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.primary[900]}
        >
          <Typography variant="h5" fontWeight="bold" color="black">
            VINU_ARTS
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: shades.primary[300] }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton
            color={shades.primary[300]}
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem
              onClick={() => handleMenuItemClick("/")}
              sx={{ padding: "20px" }}
            >
              Home
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/portfolio")}
              sx={{ padding: "20px" }}
            >
              Portfolio
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/aboutme")}
              sx={{ padding: "20px" }}
            >
              About Me
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/commission")}
              sx={{ padding: "20px" }}
            >
              Commissions
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/contact")}
              sx={{ padding: "20px" }}
            >
              Contact
            </MenuItem>
          </Menu>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => navigate("/portfolio")}
            sx={{
              display: { xs: "none", md: "flex" },
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                "&:hover": { color: shades.primary[300] },
                fontWeight: "bold",
                color: shades.primary[400],
              }}
            >
              Portfolio
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => navigate("/aboutme")}
            sx={{
              display: { xs: "none", md: "flex" },
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                "&:hover": { color: shades.primary[300] },
                fontWeight: "bold",
                color: shades.primary[400],
              }}
            >
              About
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => navigate("/commission")}
            sx={{
              display: { xs: "none", md: "flex" },
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                "&:hover": { color: shades.primary[300] },
                fontWeight: "bold",
                color: shades.primary[400],
              }}
            >
              Commissions
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => navigate("/contact")}
            sx={{
              display: { xs: "none", md: "flex" },
              "&:hover": { cursor: "pointer" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                "&:hover": { color: shades.primary[300] },
                fontWeight: "bold",
                color: shades.primary[400],
              }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
