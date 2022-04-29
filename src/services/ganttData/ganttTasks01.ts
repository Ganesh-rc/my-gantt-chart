import { Task } from "gantt-task-react";
import { getTaskList2 } from "./ganttTasks02";

export const getTaskList1 = (): Task[] => {
  let tasks: Task[] = [
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 4, 2),
      name: "Sample Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
    },
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 3, 2, 9, 0),
      name: "Project Management Activities",
      id: "Task 0",
      progress: 90,
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 3, 1, 9, 0),
      name: "Project Charter",
      id: "Task 0.1",
      progress: 90,
      type: "task",
      dependencies: ["Task 0"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 1),
      end: new Date(2022, 3, 1, 9, 0),
      name: "Project Management plan",
      id: "Task 0.2",
      progress: 90,
      type: "task",
      dependencies: ["Task 0.1"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 2),
      end: new Date(2022, 3, 2, 9, 0),
      name: "Monitoring Activities",
      id: "Task 0.3",
      progress: 90,
      type: "task",
      dependencies: ["Task 0.2"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 2),
      end: new Date(2022, 3, 2, 9, 0),
      name: "Controlling Activities",
      id: "Task 0.4",
      progress: 90,
      type: "task",
      dependencies: ["Task 0.3"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 2),
      end: new Date(2022, 3, 2, 9, 0),
      name: "UP Management Activities completed",
      id: "Task 0.5",
      progress: 90,
      type: "milestone",
      dependencies: ["Task 0.4"],
      project: "Task 0",
    },
    {
      start: new Date(2022, 3, 3),
      end: new Date(2022, 3, 6, 9, 0),
      name: "Intiation/Planning",
      id: "Task 1",
      progress: 40,
      dependencies: ["Task 0.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 3),
      end: new Date(2022, 3, 3, 9, 0),
      name: "Feasibility Study",
      id: "Task 1.1",
      progress: 40,
      dependencies: ["Task 1"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 3),
      end: new Date(2022, 3, 3, 9, 0),
      name: "Buisiness Case",
      id: "Task 1.2",
      progress: 40,
      dependencies: ["Task 1.1"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 4),
      end: new Date(2022, 3, 4, 9, 0),
      name: "Project Planning",
      id: "Task 1.3",
      progress: 40,
      dependencies: ["Task 1.2"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 5),
      end: new Date(2022, 3, 5, 9, 0),
      name: "Initiation",
      id: "Task 1.4",
      progress: 40,
      dependencies: ["Task 1.3"],
      type: "task",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 6),
      end: new Date(2022, 3, 6, 9, 0),
      name: "Planning Activities Completed",
      id: "Task 1.5",
      progress: 40,
      dependencies: ["Task 1.4"],
      type: "milestone",
      project: "Task 1",
    },
    {
      start: new Date(2022, 3, 6),
      end: new Date(2022, 3, 8, 9, 0),
      name: "Requirements Gathering",
      id: "Task 2",
      progress: 40,
      dependencies: ["Task 1.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 6),
      end: new Date(2022, 3, 6, 9, 0),
      name: "Identify Stakeholders",
      id: "Task 2.1",
      progress: 40,
      dependencies: ["Task 2"],
      type: "task",
      project: "Task 2",
    },
    {
      start: new Date(2022, 3, 6),
      end: new Date(2022, 3, 6, 9, 0),
      name: "Establish goals and objectives",
      id: "Task 2.2",
      progress: 40,
      dependencies: ["Task 2.1"],
      type: "task",
      project: "Task 2",
    },
    {
      start: new Date(2022, 3, 7),
      end: new Date(2022, 3, 7, 9, 0),
      name: "Elicit Requirements froim stake holders",
      id: "Task 2.3",
      progress: 40,
      dependencies: ["Task 2.2"],
      type: "task",
      project: "Task 2",
    },
    {
      start: new Date(2022, 3, 7),
      end: new Date(2022, 3, 7, 9, 0),
      name: "Document Requirements",
      id: "Task 2.4",
      progress: 40,
      dependencies: ["Task 2.3"],
      type: "task",
      project: "Task 2",
    },
    {
      start: new Date(2022, 3, 7),
      end: new Date(2022, 3, 7, 9, 0),
      name: "Review Requirements",
      id: "Task 2.5",
      progress: 40,
      dependencies: ["Task 2.4"],
      type: "task",
      project: "Task 2",
    },
    {
      start: new Date(2022, 3, 8),
      end: new Date(2022, 3, 8, 9, 0),
      name: "Requirements Finalized",
      id: "Task 2.6",
      progress: 40,
      dependencies: ["Task 2.5"],
      type: "milestone",
      project: "Task 2",
    },
    {
      start: new Date(2022, 3, 9),
      end: new Date(2022, 3, 11, 9, 0),
      name: "High Level Design",
      id: "Task 3",
      progress: 40,
      dependencies: ["Task 2.6"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 9),
      end: new Date(2022, 3, 9, 9, 0),
      name: "Analyze the problem",
      id: "Task 3.1",
      progress: 40,
      dependencies: ["Task 3"],
      type: "task",
      project: "Task 3",
    },
    {
      start: new Date(2022, 3, 9),
      end: new Date(2022, 3, 9, 9, 0),
      name: "Generate the System Interface",
      id: "Task 3.2",
      progress: 40,
      dependencies: ["Task 3.1"],
      type: "task",
      project: "Task 3",
    },
    {
      start: new Date(2022, 3, 10),
      end: new Date(2022, 3, 10, 9, 0),
      name: "Generate the Architecture",
      id: "Task 3.3",
      progress: 40,
      dependencies: ["Task 3.2"],
      type: "task",
      project: "Task 3",
    },
    {
      start: new Date(2022, 3, 11),
      end: new Date(2022, 3, 11, 9, 0),
      name: "Generate Detailed Design",
      id: "Task 3.4",
      progress: 40,
      dependencies: ["Task 3.3"],
      type: "task",
      project: "Task 3",
    },
    {
      start: new Date(2022, 3, 11),
      end: new Date(2022, 3, 11, 9, 0),
      name: "Review The Design",
      id: "Task 3.5",
      progress: 40,
      dependencies: ["Task 3.4"],
      type: "milestone",
      project: "Task 3",
    },
    {
      start: new Date(2022, 3, 12),
      end: new Date(2022, 3, 13, 9, 0),
      name: "Proof Of Concept",
      id: "Task 4",
      progress: 40,
      dependencies: ["Task 3.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 12),
      end: new Date(2022, 3, 12, 9, 0),
      name: "Theoretical Demonstratration",
      id: "Task 4.1",
      progress: 40,
      dependencies: ["Task 4"],
      type: "task",
      project: "Task 4",
    },
    {
      start: new Date(2022, 3, 12),
      end: new Date(2022, 3, 12, 9, 0),
      name: "Feasibilty Discussion",
      id: "Task 4.2",
      progress: 40,
      dependencies: ["Task 4.1"],
      type: "task",
      project: "Task 4",
    },
    {
      start: new Date(2022, 3, 12),
      end: new Date(2022, 3, 12, 9, 0),
      name: "Testing Development viability",
      id: "Task 4.3",
      progress: 40,
      dependencies: ["Task 4.2"],
      type: "task",
      project: "Task 4",
    },
    {
      start: new Date(2022, 3, 13),
      end: new Date(2022, 3, 13, 9, 0),
      name: "Identify Technical and Logistical Issues",
      id: "Task 4.4",
      progress: 40,
      dependencies: ["Task 4.3"],
      type: "task",
      project: "Task 4",
    },
    {
      start: new Date(2022, 3, 13),
      end: new Date(2022, 3, 13, 9, 0),
      name: "Proof Of Concept Completed",
      id: "Task 4.5",
      progress: 40,
      dependencies: ["Task 4.4"],
      type: "milestone",
      project: "Task 4",
    },
    {
      start: new Date(2022, 3, 14),
      end: new Date(2022, 3, 16, 9, 0),
      name: "Technical Specification",
      id: "Task 5",
      progress: 40,
      dependencies: ["Task 4.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 14),
      end: new Date(2022, 3, 14, 9, 0),
      name: "Application servers  ",
      id: "Task 5.1",
      progress: 40,
      dependencies: ["Task 5"],
      type: "task",
      project: "Task 5",
    },
    {
      start: new Date(2022, 3, 14),
      end: new Date(2022, 3, 14, 9, 0),
      name: "File Servers",
      id: "Task 5.2",
      progress: 40,
      dependencies: ["Task 5"],
      type: "task",
      project: "Task 5",
    },
    {
      start: new Date(2022, 3, 15),
      end: new Date(2022, 3, 15, 9, 0),
      name: "Web Servers",
      id: "Task 5.3",
      progress: 40,
      dependencies: ["Task 5"],
      type: "task",
      project: "Task 5",
    },
    {
      start: new Date(2022, 3, 15),
      end: new Date(2022, 3, 15, 9, 0),
      name: "Database Servers",
      id: "Task 5.4",
      progress: 40,
      dependencies: ["Task 5"],
      type: "task",
      project: "Task 5",
    },
    {
      start: new Date(2022, 3, 16),
      end: new Date(2022, 3, 16, 9, 0),
      name: "Review",
      id: "Task 5.5",
      progress: 40,
      dependencies: ["Task 5"],
      type: "milestone",
      project: "Task 5",
    },
    {
      start: new Date(2022, 3, 17),
      end: new Date(2022, 3, 20, 9, 0),
      name: "Environment Setup",
      id: "Task 6",
      progress: 40,
      dependencies: ["Task 5.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 17),
      end: new Date(2022, 3, 17, 9, 0),
      name: "Staging Environment",
      id: "Task 6.1",
      progress: 40,
      dependencies: ["Task 6"],
      type: "task",
      project: "Task 6",
    },
    {
      start: new Date(2022, 3, 18),
      end: new Date(2022, 3, 18, 9, 0),
      name: "Production Environment",
      id: "Task 6.2",
      progress: 40,
      dependencies: ["Task 6.1"],
      type: "task",
      project: "Task 6",
    },
    {
      start: new Date(2022, 3, 18),
      end: new Date(2022, 3, 18, 9, 0),
      name: "Adding Dependencies",
      id: "Task 6.3",
      progress: 40,
      dependencies: ["Task 6.2"],
      type: "task",
      project: "Task 6",
    },
    {
      start: new Date(2022, 3, 19),
      end: new Date(2022, 3, 19, 9, 0),
      name: "Dummy Data",
      id: "Task 6.4",
      progress: 40,
      dependencies: ["Task 6.3"],
      type: "task",
      project: "Task 6",
    },
    {
      start: new Date(2022, 3, 20),
      end: new Date(2022, 3, 20, 9, 0),
      name: "Environment Setup Completed",
      id: "Task 6.5",
      progress: 40,
      dependencies: ["Task 6.4"],
      type: "milestone",
      project: "Task 6",
    },
    {
      start: new Date(2022, 3, 21),
      end: new Date(2022, 3, 22, 9, 0),
      name: "Task Allotment",
      id: "Task 7",
      progress: 40,
      dependencies: ["Task 6.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 21),
      end: new Date(2022, 3, 21, 9, 0),
      name: "Frontend Tasks Allotment",
      id: "Task 7.1",
      progress: 40,
      dependencies: ["Task 7"],
      type: "task",
      project: "Task 7",
    },
    {
      start: new Date(2022, 3, 21),
      end: new Date(2022, 3, 21, 9, 0),
      name: "server Tasks Allotment",
      id: "Task 7.2",
      progress: 40,
      dependencies: ["Task 7"],
      type: "task",
      project: "Task 7",
    },
    {
      start: new Date(2022, 3, 21),
      end: new Date(2022, 3, 21, 9, 0),
      name: "AWS Tasks Allotment",
      id: "Task 7.3",
      progress: 40,
      dependencies: ["Task 7"],
      type: "task",
      project: "Task 7",
    },
    {
      start: new Date(2022, 3, 22),
      end: new Date(2022, 3, 22, 9, 0),
      name: "Database Tasks Allotment",
      id: "Task 7.4",
      progress: 40,
      dependencies: ["Task 7"],
      type: "task",
      project: "Task 7",
    },
    {
      start: new Date(2022, 3, 22),
      end: new Date(2022, 3, 22, 9, 0),
      name: "Tasks Allotment Completed",
      id: "Task 7.5",
      progress: 40,
      dependencies: ["Task 7.1", "Task 7.2", "Task 7.3", "Task 7.4"],
      type: "milestone",
      project: "Task 7",
    },
    {
      start: new Date(2022, 3, 23),
      end: new Date(2022, 3, 29, 9, 0),
      name: "Build Sprint 1",
      id: "Task 8",
      progress: 40,
      dependencies: ["Task 7.5"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 3, 23),
      end: new Date(2022, 3, 23, 9, 0),
      name: "Sprint planning",
      id: "Task 8.1",
      progress: 40,
      dependencies: ["Task 8"],
      type: "task",
      project: "Task 8",
    },
    {
      start: new Date(2022, 3, 24),
      end: new Date(2022, 3, 24, 9, 0),
      name: "Sprint 1 start",
      id: "Task 8.2",
      progress: 40,
      dependencies: ["Task 8.1"],
      type: "task",
      project: "Task 8",
    },
    {
      start: new Date(2022, 3, 25),
      end: new Date(2022, 3, 25, 9, 0),
      name: "Sprint 1 period",
      id: "Task 8.3",
      progress: 40,
      dependencies: ["Task 8.2"],
      type: "task",
      project: "Task 8",
    },
    {
      start: new Date(2022, 3, 26),
      end: new Date(2022, 3, 26, 9, 0),
      name: "Testing",
      id: "Task 8.4",
      progress: 40,
      dependencies: ["Task 8.3"],
      type: "task",
      project: "Task 8",
    },
    {
      start: new Date(2022, 3, 27),
      end: new Date(2022, 3, 27, 9, 0),
      name: "Stakeholder Review",
      id: "Task 8.5",
      progress: 40,
      dependencies: ["Task 8.4"],
      type: "task",
      project: "Task 8",
    },
    {
      start: new Date(2022, 3, 28),
      end: new Date(2022, 3, 29, 9, 0),
      name: "Deploy",
      id: "Task 8.6",
      progress: 40,
      dependencies: ["Task 8.5"],
      type: "milestone",
      project: "Task 8",
    },
    {
      start: new Date(2022, 4, 1),
      end: new Date(2022, 4, 7, 9, 0),
      name: "Build Sprint 2",
      id: "Task 9",
      progress: 40,
      dependencies: ["Task 8.6"],
      type: "project",
      project: "ProjectSample",
    },
    {
      start: new Date(2022, 4, 1),
      end: new Date(2022, 4, 1, 9, 0),
      name: "Backlog grooming",
      id: "Task 9.1",
      progress: 40,
      dependencies: ["Task 9"],
      type: "task",
      project: "Task 9",
    },
    {
      start: new Date(2022, 4, 1),
      end: new Date(2022, 4, 1, 9, 0),
      name: "Sprint 1 retrospective",
      id: "Task 9.2",
      progress: 40,
      dependencies: ["Task 9.1"],
      type: "task",
      project: "Task 9",
    },
    {
      start: new Date(2022, 4, 2),
      end: new Date(2022, 4, 2, 9, 0),
      name: "Sprint planning",
      id: "Task 9.3",
      progress: 40,
      dependencies: ["Task 9.2"],
      type: "task",
      project: "Task 9",
    },
    {
      start: new Date(2022, 4, 3),
      end: new Date(2022, 4, 3, 9, 0),
      name: "Sprint 2 start",
      id: "Task 9.4",
      progress: 40,
      dependencies: ["Task 9.3"],
      type: "task",
      project: "Task 9",
    },
    {
      start: new Date(2022, 4, 4),
      end: new Date(2022, 4, 4, 9, 0),
      name: "Sprint period",
      id: "Task 9.5",
      progress: 40,
      dependencies: ["Task 9.4"],
      type: "task",
      project: "Task 9",
    },
    {
      start: new Date(2022, 4, 4),
      end: new Date(2022, 4, 4, 9, 0),
      name: "Testing",
      id: "Task 9.6",
      progress: 40,
      dependencies: ["Task 9.5"],
      type: "task",
      project: "Task 9",
    },
    {
      start: new Date(2022, 4, 5),
      end: new Date(2022, 4, 5, 9, 0),
      name: "Stakeholder review",
      id: "Task 9.7",
      progress: 40,
      dependencies: ["Task 9.6"],
      type: "task",
      project: "Task 9",
    },
    {
      start: new Date(2022, 4, 6),
      end: new Date(2022, 4, 7, 9, 0),
      name: "Deploy",
      id: "Task 9.8",
      progress: 40,
      dependencies: ["Task 9.7"],
      type: "milestone",
      project: "Task 9",
    },
  ];
  const tasks2 = getTaskList2();
  tasks.push(...tasks2);
  return tasks;
};
