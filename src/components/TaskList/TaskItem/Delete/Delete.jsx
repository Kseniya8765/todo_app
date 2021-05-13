import "../Delete/delete.scss";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { TodoAppContext } from "../../../App/context";

export const Delete = ({ id }) => {
  const context = useContext(TodoAppContext);
  const { deleteTask } = context;
  return (
    <button className="reset" onClick={() => deleteTask(id)}>
      x
    </button>
  );
};

Delete.propTypes = {
  id: PropTypes.string.isRequired
};
