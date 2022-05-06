import { ReactElement } from "react";
import { Box } from "@mui/material";
import { Gantt } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import {
  useUiData,
  handleTaskChange,
  handleTaskProgressChange,
  handleModalClose,
  handleTaskDblClick,
  handleColorSelect,
} from "../services/helperFunctions";
import { BufferComponent } from "../components/BufferComponent";
import { ChartView } from "../components/ChartView";
import { Paginate } from "../components/Paginate";
import { ColorModal } from "../components/ColorModal";

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
    openModal,
    setOpenModal,
    dblTask,
    setDblTask,
  } = useUiData();

  if (loading) {
    return <BufferComponent />;
  }

  return (
    <Box>
      <ChartView view={view} setView={setView} />
      <Gantt
        tasks={currentTasks}
        viewMode={view}
        onDateChange={(modifiedTask): void => {
          handleTaskChange(modifiedTask, tasks, setTasks);
        }}
        onDoubleClick={(modifiedTask) => {
          handleTaskDblClick(modifiedTask, setOpenModal, setDblTask);
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
      <ColorModal
        open={openModal}
        onClose={() => {
          handleModalClose(setOpenModal, setDblTask);
        }}
        setColor={(color: "red" | "green" | "blue" | "yellow") => {
          if (dblTask !== null) {
            handleColorSelect(
              color,
              dblTask,
              tasks,
              setTasks,
              setOpenModal,
              setDblTask
            );
          } else {
            handleModalClose(setOpenModal, setDblTask);
          }
        }}
      />
    </Box>
  );
};
