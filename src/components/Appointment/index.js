import React, {Fragment} from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Empty from "./Empty.js";
import Show from "./Show.js";

const Appointment = function (props) {
  return (
    <article className="appointment">
      {props.time}
    </article>
  );
}

export default Appointment;