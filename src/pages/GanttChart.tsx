import React, { useState, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import { useUiData } from "../services/helperFunctions";

export const GanttChart = (): ReactElement => {
  const { view, setView, tasks, setTasks, columnWidth, ganttHeight } =
    useUiData();

  return (
    <Box>
      <Gantt
        tasks={tasks}
        viewMode={view}
        listCellWidth="320px"
        columnWidth={columnWidth}
        ganttHeight={ganttHeight}
      />
    </Box>
  );
};
