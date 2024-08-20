import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="bg-red-100 ml-12 mr-14 ">
      <div className="container ">
        <div className="row kg-row p-1 die">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => onDeleteClick(todoName)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
