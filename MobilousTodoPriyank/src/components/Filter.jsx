import React from "react";
import { useSelector } from "react-redux";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  return (
    <select value={filter} onChange={(e) => console.log(e.target.value)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
    </select>
  );
};

export default Filter;
