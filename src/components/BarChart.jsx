import React from "react";
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData } from "../data/mochData";

const BarChart = ({ data = mockBarData, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <ResponsiveBar /* or Bar for fixed dimensions */
        data={data}
        theme={{
          // added
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        keys={["hot dog", "burger", "sandwich", "kebab", "donut"]}
        indexBy="country"
        enableLabel={false}
        labelSkipWidth={12}
        padding={0.3}
        labelSkipHeight={12}
        borderColor={{ from: "color", modifiers: [] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "column",
            translateX: 120,
            itemWidth: 100,
            itemHeight: 20,
            itemsSpacing: 2,
            symbolSize: 20,
          },
        ]}
        axisBottom={{
          legend: isDashboard ? undefined : "country (indexBy)",
          legendOffset: 32,
        }}
        axisLeft={{
          legend: isDashboard ? undefined : "food",
          legendOffset: -40,
        }}
        isFocusable={true}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      />
    </>
  );
};

export default BarChart;
