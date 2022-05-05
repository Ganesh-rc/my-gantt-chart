import React, { ReactElement, useState } from "react";
import { Box, Button } from "@mui/material";
import { ViewMode } from "gantt-task-react";
import { styled } from "@mui/system";
import { useUiData } from "../services/helperFunctions";

const CustomButton = styled(Button)((props) => ({
  borderRadius: "4px",
  backgroundColor: "#6495ED",
  marginInline: 1,
  color: "white",
  ":hover": {
    backgroundColor: "#0000CD",
  },
}));

const getBGColor = (clicked: boolean): string => {
  return clicked ? "#0000CD" : "#6495ED";
};

export const ChartView = (): ReactElement => {
  const { view, setView } = useUiData();
  const [onClickColor, setOnClickColor] = useState<{
    day: boolean;
    week: boolean;
    month: boolean;
  }>({
    day: true,
    week: false,
    month: false,
  });

  const setViewMode = async (viewMode: string) => {
    if (viewMode === "day") {
      await setView(ViewMode.Day);
    } else if (viewMode === "week") {
      await setView(ViewMode.Week);
    } else {
      await setView(ViewMode.Month);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    viewMode: string
  ): void => {
    setViewMode(viewMode);
    setOnClickColor({
      day: viewMode === "day",
      week: viewMode === "week",
      month: viewMode === "month",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        py: 1,
      }}
    >
      <CustomButton
        sx={{ backgroundColor: getBGColor(onClickColor.day) }}
        onClick={(e) => {
          //   setView(ViewMode.Day);
          handleClick(e, "day");
        }}
      >
        Day
      </CustomButton>
      <CustomButton
        sx={{ backgroundColor: getBGColor(onClickColor.week) }}
        onClick={(e) => {
          //   setView(ViewMode.Week);
          handleClick(e, "week");
        }}
      >
        Week
      </CustomButton>
      <CustomButton
        sx={{ backgroundColor: getBGColor(onClickColor.month) }}
        onClick={(e) => {
          //   setView(ViewMode.Month);
          handleClick(e, "month");
        }}
      >
        Month
      </CustomButton>
    </Box>
  );
};
