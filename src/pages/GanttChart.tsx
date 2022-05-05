import { ReactElement } from "react";
import { Box } from "@mui/material";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import {
  useUiData,
  handleTaskChange,
  handleTaskProgressChange,
} from "../services/helperFunctions";
import { BufferComponent } from "../components/BufferComponent";
import { ChartView } from "../components/ChartView";
import { Paginate } from "../components/Paginate";

export const GanttChart = (): ReactElement => {
  const {
    view,
    setView,
    tasks,
    setTasks,
    loading,
    columnWidth,
    ganttHeight,
    pageCount,
    itemOffset,
    setItemOffset,
    itemsPerPage,
    currentTasks,
    setCurrentTasks,
  } = useUiData();

  if (loading) {
    return <BufferComponent />;
  }

  return (
    <Box>
      <ChartView />
      <Gantt
        tasks={currentTasks}
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
      <Paginate
        pageCount={pageCount}
        itemsPerPage={itemsPerPage}
        tasks={tasks}
        setItemOffset={setItemOffset}
      />
    </Box>
  );
};
