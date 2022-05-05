import { ReactElement } from "react";
import classnames from "classnames";
import { Box } from "@mui/material";
import ReactPaginate from "react-paginate";
import { handlePageClick } from "../services/helperFunctions";
import { Task } from "gantt-task-react";
import styles from "../css/Paginate.module.css";
import "../css/Paginate.css";

interface PaginateProps {
  pageCount: number;
  itemsPerPage: number;
  tasks: Task[];
  setItemOffset: Function;
}

export const Paginate = ({
  pageCount,
  itemsPerPage,
  tasks,
  setItemOffset,
}: PaginateProps): ReactElement => {
  return (
    <Box
      className={classnames("paginate", styles.pagination)}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <ReactPaginate
        breakLabel="..."
        onPageChange={(event): void => {
          handlePageClick(event.selected, itemsPerPage, tasks, setItemOffset);
        }}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="&larr;"
        nextLabel="&rarr;"
      />
    </Box>
  );
};
