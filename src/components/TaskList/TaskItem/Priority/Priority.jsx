import "../Priority/priority.scss";
import PropTypes from 'prop-types';
import React, { useContext } from "react";
import {TodoAppContext} from '../../../App/context';

export const Priority = ({ btnContent, id }) => {
  const context = useContext(TodoAppContext);
  const {importantTask} = context;

  return (
    <button className="important" onClick={() => importantTask(id)}>
      {btnContent}
    </button>
  );
};

Priority.propTypes={
  id: PropTypes.string.isRequired,
  btnContent: PropTypes.string.isRequired
}