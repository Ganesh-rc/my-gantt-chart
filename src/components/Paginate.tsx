import { ReactElement } from "react";
import { Box } from "@mui/material";
import ReactPaginate from "react-paginate";
import { handlePageClick } from "../services/helperFunctions";
import { Task } from "gantt-task-react";

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
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event): void => {
          handlePageClick(event.selected, itemsPerPage, tasks, setItemOffset);
        }}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
      />
    </Box>
  );
};
