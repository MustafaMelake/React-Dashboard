import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geography = () => {
  return (
    <Box>
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box height={"75vh"}>
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;
