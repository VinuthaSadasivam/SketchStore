import React from "react";
import { useState } from "react";
import { shades } from "../../../theme";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DangerousIcon from "@mui/icons-material/Dangerous";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
    let response = await fetch("http://localhost:4000/contact", {
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
      height="100vh"
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
        CONTACT
      </Typography>
      <Box display="flex" justifyContent="center" margin="60px auto">
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box margin="10px" width={{ xs: "100%", sm: "45%" }}>
              <label
                htmlFor="first name"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "16px",
                  color: `${shades.neutral[800]}`,
                }}
              >
                First Name
              </label>
              <input
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid grey",
                }}
                type="text"
                autoComplete
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              />
            </Box>
            <Box margin="10px" width={{ xs: "100%", sm: "45%" }}>
              <label
                htmlFor="last name"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "16px",
                  color: `${shades.neutral[800]}`,
                }}
              >
                Last Name
              </label>
              <input
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid grey",
                }}
                type="text"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              />
              <br />
            </Box>
          </Box>

          <Box margin="5px 10px 15px 10px">
            <label
              htmlFor="email"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                color: `${shades.neutral[800]}`,
              }}
            >
              Email Address
            </label>
            <br />
            <input
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid grey",
              }}
              type="email"
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
            />
            <br />
          </Box>
          <Box margin="15px 10px">
            <label
              htmlFor="message"
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "16px",
                color: `${shades.neutral[800]}`,
              }}
            >
              Message
            </label>
            <br />
            <textarea
              style={{ padding: "10px", width: "100%", borderRadius: "5px" }}
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
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
              <Box display="flex">
                <p className={status.success === false ? "danger" : "success"}>
                  {status.message === true ? (
                    <IconButton>
                      <CheckCircleOutlineIcon />
                    </IconButton>
                  ) : (
                    <IconButton>
                      <DangerousIcon />
                    </IconButton>
                  )}
                </p>
              </Box>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
