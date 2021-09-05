import React from "react";

const TableItem = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td>{props.distance}</td>
    </tr>
  );
};

export default TableItem;
