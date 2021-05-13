import "../Form/form.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

export const Form = (props) => {
  const [inputAdd, setInputAdd] = useState("");

  const inputHandler = (e) => {
    const { value } = e.target;
    setInputAdd(value);
  };

  const clearInputAdd = () => {
    props.addTask(inputAdd);
    setInputAdd("");
  };

  return (
    <div className="form-container">
      <input
        placeholder="Add"
        value={inputAdd}
        onChange={inputHandler}
        type="text"
      />
      <button disabled={!inputAdd} onClick={clearInputAdd}>
        ADD
      </button>
    </div>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired
};
