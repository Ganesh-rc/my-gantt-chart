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
      <Gantt
        tasks={currentTasks}
        viewMode={view}
        onDateChange={(modifiedTask): void => {
          handleTaskChange(modifiedTask, tasks, setTasks);
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
