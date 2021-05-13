import "../TaskItem/item.scss";
import { Delete } from "../TaskItem/Delete/Delete";
import { Priority } from "../TaskItem/Priority/Priority";
import PropTypes from 'prop-types';
import React, { useContext } from "react";
import {TodoAppContext} from '../../App/context';

export const TaskItem = ({
  taskName,
  id,
  important,
  active
}) => {
  const context = useContext(TodoAppContext);
  const {inactiveTask} = context;

  const style = {
    fontWeight: important === true ? "bold" : "normal",
    textDecoration: active === true ? "none" : "line-through",
    cursor: "pointer"
  };

  const btnContent = important ? "-" : "!";

  return (
    <div className="todoItem">
      <p style={style} onClick={() => inactiveTask(id)}>
        {taskName}
      </p>
      <Delete id={id} />
      <p className="priority">{important}</p>
      <Priority btnContent={btnContent} id={id} />
    </div>
  );
};

TaskItem.propTypes ={
  taskName: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
}
