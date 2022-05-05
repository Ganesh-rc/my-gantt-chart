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
import { ChartView } from "../components/ChartView";

export const GanttChart = (): ReactElement => {
  const { view, tasks, setTasks, loading, columnWidth, ganttHeight } =
    useUiData();

  if (loading) {
    return <BufferComponent />;
  }

  return (
    <Box>
      <ChartView />
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={(modifiedTask): void => {
          handleTaskChange(modifiedTask, tasks, setTasks);
          console.log(view);
        }}
        onProgressChange={(modifiedTask, children): void => {
          handleTaskProgressChange(modifiedTask, tasks, setTasks);
        }}
        listCellWidth="320px"
        columnWidth={columnWidth}
        ganttHeight={ganttHeight}
      />
    </Box>
  );
};
