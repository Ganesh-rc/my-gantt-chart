import React, { useState, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import styled from "styled-components";
import "gantt-task-react/dist/index.css";
import { useUiData } from "../services/helperFunctions";

const CustomType = styled(Gantt)`
  color: green;
  background-color: orange;
  height: 50vh;
  border: 3px solid red;
`;

export const GanttChart = (): ReactElement => {
  const { view, setView, tasks, setTasks, columnWidth, ganttHeight } =
    useUiData();

  return (
    <Box>
      <CustomType
        tasks={tasks}
        viewMode={view}
        listCellWidth="320px"
        columnWidth={columnWidth}
        ganttHeight={ganttHeight}
      />
    </Box>
  );
};
