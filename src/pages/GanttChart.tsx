import { ReactElement } from "react";
import { Box } from "@mui/material";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import {
  useUiData,
  handleTaskChange,
  handleTaskProgressChange,
  handleExpanderClick,
} from "../services/helperFunctions";
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
    ganttWidth,
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
        listCellWidth="320px"
        columnWidth={columnWidth}
        ganttHeight={ganttHeight}
      />
    </Box>
  );
};
