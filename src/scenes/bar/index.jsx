import React from "react";
import { Box } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height={"75vh"} m={"20px"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
