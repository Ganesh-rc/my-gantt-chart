import { Task } from "gantt-task-react";

export const getTaskList = () => {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 2),
      name: "Sample Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false,
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "Idea",
      id: "Task 0",
      progress: 120,
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "Research",
      id: "Task 1",
      progress: 40,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6, 0, 0),
      name: "Requirement Analysis",
      id: "Task 2",
      progress: 25,
      dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 3",
      progress: 10,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Defining Requirements",
      id: "Task 4",
      progress: 15,
      dependencies: ["Task 3"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        12,
        0,
        0
      ),
      name: "Designing Architecture",
      id: "Task 5",
      progress: 10,
      dependencies: ["Task 1", "Task 4"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 13),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        15,
        0,
        0
      ),
      name: "Prototype Development",
      id: "Task 6",
      progress: 2,
      dependencies: ["Task 5"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 16),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        18,
        0,
        0
      ),
      name: "Prototype Review",
      id: "Task 7",
      progress: 2,
      dependencies: ["Task 6"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 17),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        18,
        0,
        0
      ),
      name: "Team Discussion and planning",
      id: "Task 8",
      progress: 2,
      dependencies: ["Task 7"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        27,
        0,
        0
      ),
      name: "Development",
      id: "Task 9",
      progress: 2,
      dependencies: ["Task 8"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        18,
        0,
        0
      ),
      name: "Development - Server Setup and Configuration",
      id: "Task 9.1",
      progress: 2,
      dependencies: ["Task 9"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        20,
        0,
        0
      ),
      name: "Development - Creating Rpcs",
      id: "Task 9.2",
      progress: 2,
      dependencies: ["Task 9.1"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        21,
        0,
        0
      ),
      name: "Development - Creating UI",
      id: "Task 9.3",
      progress: 2,
      dependencies: ["Task 9.1"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 22),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        24,
        0,
        0
      ),
      name: "Development - Getting data from server",
      id: "Task 9.4",
      progress: 2,
      dependencies: ["Task 9.2", "Task 9.3"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 26),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        27,
        0,
        0
      ),
      name: "Development - Load Testing",
      id: "Task 9.5",
      progress: 2,
      dependencies: ["Task 9.4"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 28),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 30),
      name: "Review",
      id: "Task 10",
      type: "task",
      progress: 70,
      dependencies: ["Task 9.5"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 2),
      name: "Release",
      id: "Task 11",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: ["Task 10"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 7),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 7),
      name: "Celebration",
      id: "Task 12",
      progress: 0,
      isDisabled: true,
      type: "task",
    },
  ];
  return tasks;
};

export const getStartAndEndDatesOfProject = (
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
