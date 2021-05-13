import "../Filter/filter.scss";
import { Title } from "../Title/Title";
import { Form } from "../Filter/Form/Form";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import {TodoAppContext} from '../App/context';

export const Filter = ({
  inputFilterValue,
  addTask,
  displayedList
}) => {
  const context = useContext(TodoAppContext);
  const {btnHandler,inputHandler} = context;

  const style = displayedList === "all" ? "activeBtn" : "";
  const style2 = displayedList === "active" ? "activeBtn" : "";
  const style3 = displayedList === "complited" ? "activeBtn" : "";

  return (
    <div>
      <Title />
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search"
          value={inputFilterValue}
          onChange={inputHandler}
        />
        <div>
          <button className={style} onClick={() => btnHandler("all")}>
            All
          </button>
          <button className={style2} onClick={() => btnHandler("active")}>
            Active
          </button>
          <button className={style3} onClick={() => btnHandler("complited")}>
            Complited
          </button>
        </div>
      </div>
      <Form addTask={addTask} />
    </div>
  );
};

Filter.propTypes = {
  inputFilterValue: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  displayedList: PropTypes.string.isRequired
};
