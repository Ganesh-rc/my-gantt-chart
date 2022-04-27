import React, { useState, ReactElement } from "react";
import { Box, Typography } from "@mui/material";
import { Gantt, Task, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import {
  useUiData,
  handleTaskChange,
  handleTaskProgressChange,
  handleExpanderClick,
} from "../services/helperFunctions";
import { getTaskList } from "../services/helperData";
import { BufferComponent } from "../components/BufferComponent";

export const GanttChart = (): ReactElement => {
  const {
    view,
    setView,
    tasks,
    setTasks,
    loading,
    setLoading,
    columnWidth,
    ganttHeight,
  } = useUiData();

  if (loading) {
    return <BufferComponent />;
  }

  return (
    <Box>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={(modifiedTask): void => {
          handleTaskChange(modifiedTask, tasks, setTasks);
        }}
        onProgressChange={(modifiedTask): void => {
          handleTaskProgressChange(modifiedTask, tasks, setTasks);
        }}
        onExpanderClick={(modifiedTask): void => {
          handleExpanderClick(modifiedTask, tasks, setTasks);
        }}
        listCellWidth="320px"
        columnWidth={columnWidth}
        ganttHeight={ganttHeight}
      />
    </Box>
  );
};
