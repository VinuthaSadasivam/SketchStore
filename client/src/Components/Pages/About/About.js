import React from "react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../../theme";
import Me from "../../../assets/myPic.jpg";

const Aboutme = () => {
  return (
    <Box
      margin="10%"
      display="flex"
      sx={{
        margin: { xs: "20% 5%", md: "10%", lg: "10%" },
      }}
      
    >
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
        <Box width={{ xs: "100%", md: "50%" }} marginRight="20px">
          <Typography
            fontFamily="Open Sans, sans-serif"
            color={shades.neutral[900]}
            variant="h2"
            sx={{
              fontSize: { xs: "20px", md: "30px", lg: "40px" },
            }}
          >
            ABOUT
          </Typography>
          <Typography
            fontFamily="Open Sans, sans-serif"
            color={shades.neutral[700]}
            margin="20px auto"
            variant="h5"
          >
            Welcome to the artistic world of Vinutha, a talented portrait artist
            whose passion for creating captivating artwork knows no bounds.
          </Typography>
          <Typography
            fontFamily="Open Sans, sans-serif"
            margin="20px auto"
            color={shades.neutral[700]}
            variant="h5"
          >
            Vinutha finds immense joy and solace in her art, viewing it as a
            form of meditation. Hailing from the vibrant land of India, Vinutha
            draws inspiration from its diverse culture, rich heritage, and
            stunning landscapes.
          </Typography>

          <Typography
            fontFamily="Open Sans, sans-serif"
            margin="20px auto"
            color={shades.neutral[700]}
            variant="h5"
          >
            Her artistic journey began in childhood, fueled by a deep-seated
            passion for drawing and painting. Over the years, Vinutha has
            dedicated herself to mastering her craft, exploring a range of
            mediums including pencil sketches, oil painting, gouache, and oil
            pastels.
          </Typography>
          <Typography
            fontFamily="Open Sans, sans-serif"
            margin="20px auto"
            color={shades.neutral[700]}
            variant="h5"
          >
            Vinutha's work is imbued with a sense of magic and wonder,
            reflecting her fascination with the natural world. Her art
            seamlessly weaves together the mystical and the beautiful, inviting
            viewers to embark on a journey of exploration and discovery. With a
            diploma in fine arts, Vinutha brings a wealth of knowledge and
            expertise to her practice, ensuring that each canvas and commission
            is handled with precision and care.
          </Typography>
          <Typography
            fontFamily="Open Sans, sans-serif"
            margin="20px auto"
            color={shades.neutral[700]}
            variant="h5"
          >
            Explore Vinutha's portfolio and immerse yourself in her enchanting
            world of art.
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
        >
          <img src={Me}  height="auto" width="100%" max-height="700px" alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutme;
