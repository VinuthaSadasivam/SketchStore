import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Work from "../IndividualWork/work";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../State/index";

const Works = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  console.log("items", items);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    try {
      const response = await fetch(
        "https://vinuarts.com/api/items?populate=image",
        { method: "GET" }
      );

      const itemsJson = await response.json();
      dispatch(setItems(itemsJson.data));
    } catch (error) {
      console.error("error fetching items:", error);
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
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        FEATURED <b>ARTWORKS</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="CHARCOAL" value="charcoalDrawings" />
        <Tab label="GRAPHITE" value="graphiteDrawings" />
        <Tab label="OIL PAINTING" value="oilPaintings" />
        <Tab label="OIL PASTEL" value="oilPastelWork" />
        <Tab label="GOUACHE" value="gouacheNaturePaintings" />
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items
            .slice(0, 6)
            .map((item) => (
              <Work item={item} key={`${item.name}-${item.id}`} />
            ))}
        {value === "charcoalDrawings" &&
          charcoal.map((item) => (
            <Work item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "graphiteDrawings" &&
          graphite.map((item) => (
            <Work item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "oilPaintings" &&
          oils.map((item) => (
            <Work item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "gouacheNaturePaintings" &&
          gouache.map((item) => (
            <Work item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "oilPastelWork" &&
          oilPastel.map((item) => (
            <Work item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default Works;
