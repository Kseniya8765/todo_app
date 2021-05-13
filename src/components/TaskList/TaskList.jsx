import { TaskItem } from "../TaskList/TaskItem/TaskItem";
import { Filter } from "../Filter/Filter";
import React from "react";
import PropTypes from "prop-types";

export function TaskList({ todo, inputFilterValue, addTask, displayedList }) {
  return (
    <div>
      <Filter
        inputFilterValue={inputFilterValue}
        addTask={addTask}
        displayedList={displayedList}
      />
      <div>
        {todo.map((item) => (
          <TaskItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

TaskList.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      taskName: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      important: PropTypes.bool.isRequired,
      active: PropTypes.bool.isRequired
    })
  ).isRequired,
  inputFilterValue: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  displayedList: PropTypes.string.isRequired
};
