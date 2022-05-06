import { useState, useEffect } from "react";
import { Task, ViewMode } from "gantt-task-react";
import { getTaskList } from "./helperData";
import { clearTimeout } from "timers";
import { useWindowDimensions } from "./windowData";

const getParent = (task: Task, taskList: Task[]): Task => {
  return taskList[taskList.findIndex((t) => t.id === task.project)];
};

export const getStartAndEndDatesOfProjectOrTask = (
  tasks: Task[],
  projectId: string
): [start: Date, end: Date] => {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let taskIndex = 0; taskIndex < projectTasks.length; taskIndex++) {
    const task = projectTasks[taskIndex];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
};

const getUpdatedStartEndTaskList = (
  modifiedTask: Task,
  updatedTaskList: Task[]
): Task[] => {
  if (modifiedTask.project) {
    const [start, end] = getStartAndEndDatesOfProjectOrTask(
      updatedTaskList,
      modifiedTask.project
    );
    const parent = getParent(modifiedTask, updatedTaskList);
    if (parent.start.getTime() !== end.getTime() || parent.end.getTime()) {
      const newParent = { ...parent, start, end };
      updatedTaskList = updatedTaskList.map((task) =>
        task.id === modifiedTask.project ? newParent : task
      );
      if (newParent.project) {
        updatedTaskList = getUpdatedStartEndTaskList(
          newParent,
          updatedTaskList
        );
      }
    }
  }
  return updatedTaskList;
};

const getUpdatedProgressTaskList = (
  modifiedTask: Task,
  updatedTaskList: Task[]
): Task[] => {
  if (modifiedTask.project) {
    let parent = getParent(modifiedTask, updatedTaskList);
    let numChildren = 0;
    let totalProgress = 0;
    updatedTaskList.forEach((task): void => {
      if (task.project === parent.id) {
        totalProgress += task.progress;
        numChildren++;
      }
    });
    if (numChildren !== 0) {
      parent = { ...parent, progress: totalProgress / numChildren };
      updatedTaskList = updatedTaskList.map((t) =>
        t.id === parent.id ? parent : t
      );
    }
    updatedTaskList = getUpdatedProgressTaskList(parent, updatedTaskList);
  }
  return updatedTaskList;
};

interface UseUiDataType {
  view: ViewMode;
  setView: Function;
  tasks: Task[];
  setTasks: Function;
  loading: Boolean;
  setLoading: Function;
  columnWidth: number;
  ganttHeight: number;
  ganttWidth: number;
  pageCount: number;
  setPageCount: Function;
  itemOffset: number;
  setItemOffset: Function;
  itemsPerPage: number;
  currentTasks: Task[];
  setCurrentTasks: Function;
  openModal: boolean;
  setOpenModal: Function;
}

export const useUiData = (): UseUiDataType => {
  const [view, setView] = useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = useState<Task[]>(getTaskList());
  const [loading, setLoading] = useState<Boolean>(true);
  const { ganttHeight, ganttWidth } = useWindowDimensions();
  const [currentTasks, setCurrentTasks] = useState<Task[]>(tasks);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const itemsPerPage = 20;
  const columnWidth = 60;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentTasks(tasks.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tasks.length / itemsPerPage));
  }, [itemOffset, tasks]);

  return {
    view,
    setView,
    tasks,
    setTasks,
    loading,
    setLoading,
    columnWidth,
    ganttHeight,
    ganttWidth,
    pageCount,
    setPageCount,
    itemOffset,
    setItemOffset,
    itemsPerPage,
    currentTasks,
    setCurrentTasks,
    openModal,
    setOpenModal,
  };
};

export const handleTaskChange = (
  modifiedTask: Task,
  tasks: Task[],
  setTasks: Function
): void => {
  let updatedTaskList = tasks.map((task) =>
    task.id === modifiedTask.id ? modifiedTask : task
  );
  updatedTaskList = getUpdatedStartEndTaskList(modifiedTask, updatedTaskList);
  setTasks(updatedTaskList);
};

export const handleTaskProgressChange = (
  modifiedTask: Task,
  taskList: Task[],
  setTasks: Function
): void => {
  let updatedTaskList = taskList.map((task) =>
    task.id === modifiedTask.id ? modifiedTask : task
  );
  updatedTaskList = getUpdatedProgressTaskList(modifiedTask, updatedTaskList);
  setTasks(updatedTaskList);
};

export const handleExpanderClick = (
  modifiedTask: Task,
  taskList: Task[],
  setTasks: Function
): void => {
  setTasks(taskList.map((t) => (t.id === modifiedTask.id ? modifiedTask : t)));
};

export const handlePageClick = (
  selected: number,
  itemsPerPage: number,
  tasks: Task[],
  setItemOffset: Function
) => {
  const newOffset = (selected * itemsPerPage) % tasks.length;
  setItemOffset(newOffset);
};

export const handleModalClose = (setOpenModal: Function) => {
  setOpenModal(false);
};

export const handleColorSelect = (
  selectedColor: "red" | "green" | "blue" | "yellow",
  modifiedTask: Task,
  tasks: Task[],
  setTasks: Function,
  setOpenModal: Function
) => {
  let task: Task = {
    ...modifiedTask,
    styles: { backgroundColor: selectedColor },
  };
  handleTaskChange(modifiedTask, tasks, setTasks);
  handleModalClose(setOpenModal);
};

export const handleTaskDblClick = (
  modifiedtask: Task,
  setOpenModal: Function
) => {
  setOpenModal(true);
};
