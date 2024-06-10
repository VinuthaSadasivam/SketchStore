import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { shades } from "../../../theme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setItems } from "../../State/index";
import Work from "../../IndividualWork/work";
import { Instagram } from "@mui/icons-material";

const PortFolio = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  async function getItems() {
    try {
      const response = await fetch(
        "http://localhost:1337/api/items?populate=image",
        { method: "GET" }
      );

      const itemsJSON = await response.json();
      dispatch(setItems(itemsJSON.data));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const charcoal = items.filter(
    (item) => item.attributes.category === "charcoalDrawings"
  );
  const graphite = items.filter(
    (item) => item.attributes.category === "graphiteDrawings"
  );
  const oils = items.filter(
    (item) => item.attributes.category === "oilPaintings"
  );
  const oilPastel = items.filter(
    (item) => item.attributes.category === "oilPastelWork"
  );
  const gouache = items.filter(
    (item) => item.attributes.category === "gouacheNaturePaintings"
  );
  return (
    <Box
      margin="10%"
      sx={{
        margin: { xs: "20% 5%", md: "10%", lg: "10%" },
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="10px"
      >
        <Typography
          fontFamily="Open Sans, sans-serif"
          fontWeight="lighter"
          color={shades.neutral[900]}
          sx={{
            fontSize: { xs: "20px", md: "30px", lg: "40px" },
            textAlign: { xs: "center", md: "center" },
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          FOLLOW ME ON INSTAGRAM
          <IconButton margin="0" sx={{ "&:hover": { cursor: "pointer" } }}>
            <a
              href="https://www.instagram.com/vinu_arts?igsh=Y3l1ZXd5MDd6NWNj"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                sx={{
                  color: shades.neutral[700],
                  margin: "0 ",
                  fontSize: "50px",
                  "&:hover": { color: shades.neutral[500] },
                }}
              />
            </a>
          </IconButton>
        </Typography>
      </Box>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[800]}
        textAlign="center"
        margin="5%"
        variant="h3"
      >
        Charcoal
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="10%"
      >
        {charcoal.slice(3, 5).map((item) => (
          <Work item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[800]}
        textAlign="center"
        margin="5%"
        variant="h3"
      >
        Graphite
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="10%"
      >
        {graphite.slice(2, 4).map((item) => (
          <Work item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[800]}
        textAlign="center"
        margin="5%"
        variant="h3"
      >
        Oil Painting
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="10%"
      >
        {oils.slice(1, 3).map((item) => (
          <Work item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[800]}
        textAlign="center"
        margin="5%"
        variant="h3"
      >
        Oil Pastel
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="10%"
      >
        {oilPastel.slice(0, 2).map((item) => (
          <Work item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
      <Typography
        fontFamily="Open Sans, sans-serif"
        color={shades.neutral[800]}
        textAlign="center"
        margin="5%"
        variant="h3"
      >
        Gouache
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="10%"
      >
        {gouache.slice(0, 2).map((item) => (
          <Work item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
  );
};

export default PortFolio;
