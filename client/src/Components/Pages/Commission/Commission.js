import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { shades } from "../../../theme";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Commission = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    medium: "",
    size: "",
    description: "",
    inquiries: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("SUBMIT");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("sending...");
    let response = await fetch("http://localhost:4000/commission", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };
  return (
    <Box
      margin="10%"
      sx={{
        margin: { xs: "20% 5%", md: "10%", lg: "10%" },
      }}
    >
      <Typography
        fontFamily="Open Sans, sans-serif"
        textAlign="center"
        color={shades.neutral[900]}
        variant="h2"
        sx={{
          fontSize: { xs: "20px", md: "30px", lg: "40px" },
        }}
      >
        COMMISSIONS
      </Typography>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[700]}
        margin="30px auto"
        variant="h5"
      >
        I have been doing commissions for the past 7 years. I love creating
        customizable artwork based on client specifications and making art that
        captures moment of joy and preserves memories forever.
      </Typography>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[700]}
        margin="30px auto"
        variant="h5"
      >
        If you would like a commission in any of these mediums
      </Typography>

      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[700]}
        margin="20px auto"
        variant="h5"
        display="flex"
        alignItems="center"
      >
        <FiberManualRecordIcon sx={{ fontSize: "10px", marginRight: "10px" }} />
        Pencil Sketch
      </Typography>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[700]}
        margin="20px auto"
        variant="h5"
        display="flex"
        alignItems="center"
      >
        <FiberManualRecordIcon sx={{ fontSize: "10px", marginRight: "10px" }} />
        Oil Painting
      </Typography>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[700]}
        margin="20px auto"
        variant="h5"
        display="flex"
        alignItems="center"
      >
        <FiberManualRecordIcon sx={{ fontSize: "10px", marginRight: "10px" }} />{" "}
        Gouache
      </Typography>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[700]}
        margin="20px auto"
        variant="h5"
        display="flex"
        alignItems="center"
      >
        <FiberManualRecordIcon sx={{ fontSize: "10px", marginRight: "10px" }} />
        Oil Pastel
      </Typography>

      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[900]}
        variant="h4"
        margin="30px auto"
      >
        REQUEST A COMMISSION
      </Typography>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[700]}
        variant="h5"
        margin="30px auto"
      >
        Please fill in the form if you are interested in a commission from me.
        For rates, ask in the 'Further Inquiries' section of the form or contact
        me at vinuthasadasivam@gmail.com. Rates may vary depending on the chosen
        medium and the number of subjects.
      </Typography>

      <Box display="flex">
        <form onSubmit={handleSubmit} style={{ width: "70%", margin: "0" }}>
          <Box display="flex" justifyContent="space-between">
            <Box margin="10px" width="50%">
              <TextField
                label="First Name"
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
                fullWidth
              />
            </Box>
            <Box margin="10px" width="50%">
              <TextField
                label="Last Name"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
                fullWidth
              />
            </Box>
          </Box>
          <Box margin="5px 10px 15px 10px">
            <TextField
              label="Email"
              type="email"
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              fullWidth
            />
          </Box>
          <Box margin="10px">
            <FormControl component="fieldset">
              <FormLabel component="legend">Select Medium</FormLabel>
              <RadioGroup
                aria-label="medium"
                name="medium"
                value={formDetails.medium}
                onChange={(e) => onFormUpdate("medium", e.target.value)}
                row
              >
                <FormControlLabel
                  value="pencilsketch"
                  control={<Radio />}
                  label="Pencil Sketch"
                />
                <FormControlLabel
                  value="oilpainting"
                  control={<Radio />}
                  label="Oil Painting"
                />
                <FormControlLabel
                  value="gouache"
                  control={<Radio />}
                  label="Gouache"
                />
                <FormControlLabel
                  value="oilPaste"
                  control={<Radio />}
                  label="Oil Paste"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box margin="10px">
            <FormControl fullWidth>
              <FormLabel>Select Size</FormLabel>
              <Select
                value={formDetails.size}
                onChange={(e) => onFormUpdate("size", e.target.value)}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select an option
                </MenuItem>
                <MenuItem value="small">A5</MenuItem>
                <MenuItem value="medium">A4</MenuItem>
                <MenuItem value="large">A3</MenuItem>
                <MenuItem value="large">A2</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box margin="10px">
            <TextField
              label="Description"
              value={formDetails.message}
              onChange={(e) => onFormUpdate("description", e.target.value)}
              fullWidth
            />
          </Box>
          <Box margin="10px">
            <FormLabel>Further Inquiries</FormLabel>
            <textarea
              minRows={3}
              value={formDetails.furtherInquiries}
              onChange={(e) => onFormUpdate("inquiries", e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid grey",
              }}
            />
          </Box>
          <Box display="flex" justifyContent="center" padding="10px">
            <Button
              type="submit"
              sx={{
                width: "40%",
                padding: "10px",
                backgroundColor: `${shades.neutral[100]}`,
                color: "black",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: `${shades.neutral[700]}`,
                  color: "white",
                },
                border: `1px solid ${shades.neutral[900]}`,
              }}
            >
              {buttonText}
            </Button>
            {status.message && (
              <Typography color={status.success ? "green" : "red"}>
                {status.message}
              </Typography>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Commission;
