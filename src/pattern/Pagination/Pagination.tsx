import React from "react";
import Icon from "@icon-park/react/es/all";

export interface PaginationProps {
  num: number;
  size?: "sm" | "lg";
}

const createRange = (
  num: number,
  numNeighbours: number,
  selected: number,
  selectPag: React.Dispatch<React.SetStateAction<number>>
) => {
  let pagination = [];
  let from;
  let to;
  if (6 < num && num <= 8) {
    numNeighbours = 2;
  }
  if (num <= 6) {
    pagination = createPaginations(1, num, num, selected, selectPag);
  } else if (selected - numNeighbours <= 2) {
    from = 1;
    to = 1 + 2 * numNeighbours;
    pagination = createPaginations(from, to, num, selected, selectPag);
    pagination.push(createSymbol());
    pagination.push(createPag(num, selected, selectPag));
  } else if (selected + numNeighbours >= num - 1) {
    from = num - 2 * numNeighbours;
    to = num;
    pagination.push(createPag(1, selected, selectPag));
    pagination.push(createSymbol());
    pagination.push(createPaginations(from, to, num, selected, selectPag));
  } else {
    from = selected - 2;
    to = selected + 2;
    pagination.push(createPag(1, selected, selectPag));
    pagination.push(createSymbol());
    pagination.push(createPaginations(from, to, num, selected, selectPag));
    pagination.push(createSymbol());
    pagination.push(createPag(num, selected, selectPag));
  }
  return pagination;
};

const createPag = (
  value: number,
  selected: number,
  selectPag: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <span
      className={
        value === selected ? "pagination-selected" : "pagination-unselected"
      }
      onClick={() => selectPag(value)}
    >
      {value}
    </span>
  );
};

const createSymbol = () => {
  return <span className={"pagination-unselected"}>...</span>;
};

const createPaginations = (
  from: number,
  to: number,
  num: number,
  selected: number,
  selectPag: React.Dispatch<React.SetStateAction<number>>
) => {
  let paginations = [];
  for (let i = from; i <= to; i++) {
    paginations.push(createPag(i, selected, selectPag));
  }
  return paginations;
};

const Pagination = ({ num, size = "sm", ...props }: PaginationProps) => {
  // if num <= 6, all elements are shown
  // if 6 < num <= 8, size is forced to be 'sm', which means to show 5 elements
  // espeacially for num === 7 && size === 'sm' while choosing 4 or num === 9 && size === 'lg' while choosing 5, all elements are displayed
  // if num > 9, at initialization, display 5 or 7 elements and the last element, others are replaced with '...'
  // while clicking any element, neighbours change， but 5 or 7 elements around and the first and the last element is always displayed，same rule for '...'

  const numNeighbours = size === "sm" ? 2 : 3;
  const [selectedPag, selectPag] = React.useState(1);
  let range = [1, num];
  return (
    <div className={"pagination"} {...props}>
      <Icon type={"Left"} size={24} className={"pagination-icon"} />
      {createRange(num, numNeighbours, selectedPag, selectPag)}
      <Icon type={"Right"} size={24} className={"pagination-icon"} />
    </div>
  );
};

export default Pagination;
