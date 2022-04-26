import React, { useState, ReactElement } from "react";
import { Box } from "@mui/material";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import {
  getTaskList,
  getStartAndEndDatesOfProject,
} from "../services/helperData";
import "gantt-task-react/dist/index.css";
import { getUiData } from "../services/helperFunctions";

export const GanttChart = (): ReactElement => {
  const { view, setView, tasks, setTasks, columnWidth, ganttHeight } =
    getUiData();

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
